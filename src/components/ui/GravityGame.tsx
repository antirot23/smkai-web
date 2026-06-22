import { useEffect, useRef, useState } from 'react';
import { RotlessText } from './RotlessText';
import mascotImgSrc from '@/assets/mascot.png';

export const GravityGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);

  // Game state refs to avoid dependency loops in requestAnimationFrame
  const gameState = useRef({
    state: 'aiming', // 'aiming' | 'flying' | 'shattering'
    x: 175,
    y: 320,
    vx: 0,
    vy: 0,
    alpha: 1, // Mascot opacity
    targetX: Math.random() * 250 + 50, // Spawn target randomly in the top area
    targetY: Math.random() * 100 + 50,
    targetAlpha: 1,
    score: 0,
    isDragging: false,
    particles: [] as { x: number; y: number; vx: number; vy: number; char: string; alpha: number; rot: number; vrot: number }[]
  });

  const anchor = { x: 175, y: 320 };
  const pivotLeft = { x: 140, y: 320 };
  const pivotRight = { x: 210, y: 320 };
  const maxPull = 100;

  // Touch and Mouse handlers for slingshot
  const handlePointerDown = (e: React.PointerEvent) => {
    if (gameState.current.state !== 'aiming') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    // Check if clicking near the ball
    const dx = mouseX - gameState.current.x;
    const dy = mouseY - gameState.current.y;
    if (Math.sqrt(dx * dx + dy * dy) < 50) {
      gameState.current.isDragging = true;
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!gameState.current.isDragging || gameState.current.state !== 'aiming') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    let mouseX = (e.clientX - rect.left) * scaleX;
    let mouseY = (e.clientY - rect.top) * scaleY;

    // Constrain so you can only pull DOWNWARDS (shooting UP)
    if (mouseY < anchor.y) {
      mouseY = anchor.y;
    }

    // Calculate pull distance
    let dx = mouseX - anchor.x;
    let dy = mouseY - anchor.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > maxPull) {
      mouseX = anchor.x + (dx / dist) * maxPull;
      mouseY = anchor.y + (dy / dist) * maxPull;
    }

    // Keep inside canvas bounds
    if (mouseX < 20) mouseX = 20;
    if (mouseX > canvas.width - 20) mouseX = canvas.width - 20;
    if (mouseY > canvas.height - 20) mouseY = canvas.height - 20;

    gameState.current.x = mouseX;
    gameState.current.y = mouseY;
  };

  const handlePointerUp = () => {
    if (!gameState.current.isDragging) return;
    gameState.current.isDragging = false;
    
    // Shoot!
    const dx = anchor.x - gameState.current.x;
    const dy = anchor.y - gameState.current.y;
    
    // If pulled back enough
    if (Math.sqrt(dx * dx + dy * dy) > 15) {
      gameState.current.vx = dx * 0.18; // Power multiplier
      gameState.current.vy = dy * 0.18;
      gameState.current.state = 'flying';
    } else {
      // Snap back if barely pulled
      gameState.current.x = anchor.x;
      gameState.current.y = anchor.y;
    }
  };

  const spawnParticles = (x: number, y: number) => {
    const chars = ['R', 'O', 'T'];
    const particles = [];
    // The main 3 letters blasting apart
    for (let i = 0; i < chars.length; i++) {
      particles.push({
        x: x + (i - 1) * 15,
        y: y,
        vx: (Math.random() - 0.5) * 8, // Blast horizontally
        vy: (Math.random() - 1) * 8,   // Blast up
        char: chars[i],
        alpha: 1,
        rot: 0,
        vrot: (Math.random() - 0.5) * 0.4
      });
    }
    // Debris
    for (let i = 0; i < 8; i++) {
      particles.push({
        x: x + (Math.random() - 0.5) * 30,
        y: y + (Math.random() - 0.5) * 30,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 1) * 10,
        char: ['+', '*', 'x', '-'][Math.floor(Math.random() * 4)],
        alpha: 1,
        rot: Math.random() * Math.PI,
        vrot: (Math.random() - 0.5) * 0.5
      });
    }
    return particles;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mascotImg = new Image();
    mascotImg.src = mascotImgSrc;

    let animationFrameId: number;
    const radius = 20; // Slightly bigger mascot
    const targetRadius = 30; // Bigger hit area

    const resetAiming = (spawnNewTarget: boolean = false) => {
      gameState.current.state = 'aiming';
      gameState.current.x = anchor.x;
      gameState.current.y = anchor.y;
      gameState.current.vx = 0;
      gameState.current.vy = 0;
      gameState.current.alpha = 1;
      gameState.current.targetAlpha = 1;
      gameState.current.particles = [];
      
      if (spawnNewTarget) {
        gameState.current.targetX = Math.random() * 250 + 50;
        gameState.current.targetY = Math.random() * 100 + 50;
      }
    };

    const render = () => {
      // Background clear
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (gameState.current.state === 'flying' || gameState.current.state === 'shattering') {
        // Reduced Gravity for a longer, higher arc
        gameState.current.vy += 0.15; 

        // Move mascot
        gameState.current.x += gameState.current.vx;
        gameState.current.y += gameState.current.vy;

        // Bouncing logic
        if (gameState.current.y > canvas.height - radius) {
          gameState.current.y = canvas.height - radius;
          gameState.current.vy *= -0.6; // Bounce 
          gameState.current.vx *= 0.85; // Ground friction
        }
        if (gameState.current.x > canvas.width - radius) {
          gameState.current.x = canvas.width - radius;
          gameState.current.vx *= -0.7; // Wall bounce
        }
        if (gameState.current.x < radius) {
          gameState.current.x = radius;
          gameState.current.vx *= -0.7;
        }
      }

      if (gameState.current.state === 'flying') {
        // Stop checking: If ball is barely moving on the ground, reset to aiming
        const speed = Math.sqrt(gameState.current.vx * gameState.current.vx + gameState.current.vy * gameState.current.vy);
        if (speed < 0.5 && gameState.current.y >= canvas.height - radius - 2) {
          resetAiming();
        }

        // Check collision with target
        const dx = gameState.current.x - gameState.current.targetX;
        const dy = gameState.current.y - gameState.current.targetY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < radius + targetRadius) {
          gameState.current.score += 1;
          setScore(gameState.current.score);
          
          gameState.current.state = 'shattering';
          gameState.current.targetAlpha = 0; // Hide the main target
          gameState.current.particles = spawnParticles(gameState.current.targetX, gameState.current.targetY);
        }
      }

      if (gameState.current.state === 'shattering') {
        // Fade out ball slowly
        gameState.current.alpha = Math.max(0, gameState.current.alpha - 0.015);

        // Update and draw particles
        let allDead = true;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        for (let p of gameState.current.particles) {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.2; // Particle gravity
          p.rot += p.vrot; // Spin
          p.alpha = Math.max(0, p.alpha - 0.015); // Fade out slower
          
          if (p.alpha > 0) {
            allDead = false;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.font = p.char.length === 1 && p.char !== '.' && p.char !== '+' && p.char !== 'x' && p.char !== '-' 
              ? 'bold 32px "Courier New", Courier, monospace' 
              : 'bold 20px "Courier New", Courier, monospace';
            ctx.fillStyle = `rgba(255, 59, 48, ${p.alpha})`; // Danger red
            ctx.shadowBlur = 10;
            ctx.shadowColor = `rgba(255, 59, 48, ${p.alpha})`;
            ctx.fillText(p.char, 0, 0);
            ctx.restore();
          }
        }

        // If mascot is invisible and particles are dead, reset
        if (gameState.current.alpha === 0 && allDead) {
          resetAiming(true); // Spawn a new target only after shattering is complete
        }
      }

      // Draw Slingshot Bands (only if aiming)
      if (gameState.current.state === 'aiming') {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(pivotLeft.x, pivotLeft.y);
        ctx.lineTo(gameState.current.x, gameState.current.y);
        ctx.moveTo(pivotRight.x, pivotRight.y);
        ctx.lineTo(gameState.current.x, gameState.current.y);
        // Thicker, more visible rubber band
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.lineWidth = 6;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
        ctx.restore();
      }

      // Draw "ROT" target text (if not shattered)
      if (gameState.current.targetAlpha > 0) {
        ctx.save();
        ctx.font = 'bold 32px "Courier New", Courier, monospace'; // Bigger target
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = `rgba(255, 59, 48, ${gameState.current.targetAlpha})`; 
        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgba(255, 59, 48, ${gameState.current.targetAlpha})`;
        ctx.fillText('ROT', gameState.current.targetX, gameState.current.targetY);
        ctx.restore();
      }

      // Draw mascot ball
      if (gameState.current.alpha > 0) {
        ctx.save();
        ctx.globalAlpha = gameState.current.alpha;
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
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full max-w-[24rem] sm:max-w-sm mx-auto bg-white/50 rounded-3xl border border-border-default p-3 min-[375px]:p-4 sm:p-6 backdrop-blur-md shadow-lg">
      <div className="flex flex-row items-center justify-between mb-4 w-full gap-2">
        <div 
          className="text-primary-default font-bold uppercase tracking-wider sm:tracking-widest text-[11px] min-[375px]:text-[13px] sm:text-sm text-left shrink"
          style={{ fontFamily: '"Press Start 2P", "Courier New", Courier, monospace' }}
        >
          <span className="sm:hidden">Anti-Rot shooter</span>
          <span className="hidden sm:inline">Anti - Rot shooter</span>
        </div>
        <div className="bg-bg-dark px-2 min-[375px]:px-3 py-1 rounded-full border border-white/10 shadow-sm whitespace-nowrap shrink-0">
          <RotlessText variant="label" className="text-primary-default sm:!text-xs">Score: {score}</RotlessText>
        </div>
      </div>

      <div 
        className="relative w-full h-auto sm:h-[400px] bg-bg-dark/90 rounded-2xl overflow-hidden border-2 border-border-subtle shadow-inner backdrop-blur-xl touch-none select-none"
        style={{ aspectRatio: '7/8' }}
      >
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
           {/* Subtle grid background */}
           <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>
        <canvas 
          ref={canvasRef} 
          width={350} 
          height={400} 
          className="w-full h-full block relative z-10 cursor-crosshair touch-none select-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        />
      </div>
      
      <div className="mt-4 pb-1 sm:pb-0 w-full">
        <RotlessText variant="tiny" className="text-text-tertiary text-center block w-full break-words">
          Pull the mascot down and release to destroy the ROT.
        </RotlessText>
      </div>
    </div>
  );
};
