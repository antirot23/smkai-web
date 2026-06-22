import { useEffect, useRef, useState } from 'react';
import { RotlessText } from './RotlessText';
import { Button } from './Button';
import mascotImgSrc from '@/assets/mascot.png';

export const GravityGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  // Game state refs to avoid dependency loops in requestAnimationFrame
  const gameState = useRef({
    x: 150,
    y: 150,
    vx: 0,
    vy: 0,
    targetX: Math.random() * 260 + 20,
    targetY: Math.random() * 260 + 20,
    score: 0
  });

  const requestAccess = async () => {
    // Detect mobile
    if (!/Mobi|Android/i.test(navigator.userAgent)) {
      setIsMobile(false);
      return;
    }

    // Must be triggered by user interaction
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      try {
        const permissionState = await (DeviceOrientationEvent as any).requestPermission();
        if (permissionState === 'granted') {
          startGame();
        } else {
          alert('Gyroscope permission denied. The game requires tilt access to play.');
        }
      } catch (error) {
        console.error(error);
        alert('Make sure you are testing on HTTPS. iOS requires a secure connection for gyro access.');
      }
    } else {
      // Non-iOS 13+ devices
      startGame();
    }
  };

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    gameState.current.score = 0;
    gameState.current.x = 150;
    gameState.current.y = 150;
    gameState.current.vx = 0;
    gameState.current.vy = 0;

    const handleOrientation = (e: DeviceOrientationEvent) => {
      // beta is front-to-back tilt in degrees
      // gamma is left-to-right tilt in degrees
      const maxTilt = 40; 
      
      let beta = e.beta || 0;
      let gamma = e.gamma || 0;

      if (beta > maxTilt) beta = maxTilt;
      if (beta < -maxTilt) beta = -maxTilt;
      if (gamma > maxTilt) gamma = maxTilt;
      if (gamma < -maxTilt) gamma = -maxTilt;

      // Adjust sensitivity 
      gameState.current.vx += gamma * 0.08;
      gameState.current.vy += beta * 0.08;
    };

    window.addEventListener('deviceorientation', handleOrientation);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  };

  useEffect(() => {
    if (!isPlaying) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mascotImg = new Image();
    mascotImg.src = mascotImgSrc;

    let animationFrameId: number;
    const radius = 15; 
    const targetRadius = 15;

    const render = () => {
      // Apply friction
      gameState.current.vx *= 0.90;
      gameState.current.vy *= 0.90;

      // Update position
      gameState.current.x += gameState.current.vx;
      gameState.current.y += gameState.current.vy;

      // Bounds checking (bounce)
      if (gameState.current.x < radius) {
        gameState.current.x = radius;
        gameState.current.vx *= -0.5;
      }
      if (gameState.current.x > canvas.width - radius) {
        gameState.current.x = canvas.width - radius;
        gameState.current.vx *= -0.5;
      }
      if (gameState.current.y < radius) {
        gameState.current.y = radius;
        gameState.current.vy *= -0.5;
      }
      if (gameState.current.y > canvas.height - radius) {
        gameState.current.y = canvas.height - radius;
        gameState.current.vy *= -0.5;
      }

      // Check collision with target
      const dx = gameState.current.x - gameState.current.targetX;
      const dy = gameState.current.y - gameState.current.targetY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < radius + targetRadius) {
        gameState.current.score += 1;
        setScore(gameState.current.score);
        
        gameState.current.targetX = Math.random() * (canvas.width - 40) + 20;
        gameState.current.targetY = Math.random() * (canvas.height - 40) + 20;
      }

      // Draw background
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw "ROT" target text 
      ctx.save();
      ctx.font = 'bold 24px "Courier New", Courier, monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#FF3B30'; 
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#FF3B30';
      ctx.fillText('ROT', gameState.current.targetX, gameState.current.targetY);
      ctx.restore();

      // Draw mascot ball
      if (mascotImg.complete) {
        ctx.drawImage(
          mascotImg, 
          gameState.current.x - radius, 
          gameState.current.y - radius, 
          radius * 2, 
          radius * 2
        );
      } else {
        ctx.beginPath();
        ctx.arc(gameState.current.x, gameState.current.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = '#E3C48A';
        ctx.fill();
        ctx.closePath();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying]);

  return (
    <div className="w-full max-w-sm mx-auto bg-white/50 rounded-3xl border border-border-default p-6 backdrop-blur-md shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <RotlessText variant="title" className="text-text-primary">AntiRot Gravity</RotlessText>
        <div className="bg-bg-dark px-3 py-1 rounded-full border border-white/10 shadow-sm">
          <RotlessText variant="label" className="text-primary-default">Score: {score}</RotlessText>
        </div>
      </div>

      <div className="relative w-full aspect-square bg-bg-dark/90 rounded-2xl overflow-hidden border-2 border-border-subtle shadow-inner backdrop-blur-xl">
        {!isMobile && !isPlaying && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-10 p-4 text-center">
            <RotlessText variant="chat" className="text-text-secondary mb-4">
              This mini-game requires a mobile device with tilt sensors.
            </RotlessText>
          </div>
        )}

        {!isPlaying && isMobile && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-10 p-4 backdrop-blur-md">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 border border-white/20">
              <img src={mascotImgSrc} alt="Mascot" className="w-10 h-10 object-contain" />
            </div>
            <RotlessText variant="chat" className="text-white text-center mb-6">
              Tilt your phone to destroy the ROT.
            </RotlessText>
            <Button onClick={requestAccess} className="px-8 shadow-lg shadow-primary-default/20">Enable Gyro</Button>
          </div>
        )}

        <canvas 
          ref={canvasRef} 
          width={300} 
          height={300} 
          className="w-full h-full block"
        />
      </div>
    </div>
  );
};
