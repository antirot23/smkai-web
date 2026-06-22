import { motion } from 'framer-motion';
import { RotlessText } from '../components/ui/RotlessText';
import kaustubhiImg from '@/assets/KaustubhiJi.jpeg';
import anshulImg from '@/assets/Anshul.jpeg';

const TEAM = [
  {
    name: 'Kaustubhi Shastri',
    role: 'Founder, Chairperson & Director',
    shares: '60% Shareholding',
    image: kaustubhiImg,
    background: [
      'BA (Hons.) English Literature',
      'Minor in Entrepreneurship',
      'UPSC Preparation Experience',
      'Public Speaker',
      'Content Creator',
      'Community Builder'
    ],
    strengths: ['Vision', 'Communication', 'Product Ideation', 'Community Building']
  },
  {
    name: 'Anshul Maheshwari',
    role: 'Co-Founder, CEO & Director',
    shares: '40% Shareholding',
    image: anshulImg,
    background: [
      'B.Com Graduate',
      'MBA Studies',
      'Business Management Experience',
      'Hardware Retail Operations'
    ],
    strengths: ['Finance', 'Operations', 'Business Administration', 'Financial Planning']
  }
];

export const FoundingTeamSection = () => {
  return (
    <section id="team" className="py-12 md:py-12 bg-bg-secondary relative border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <RotlessText variant="boom" className="mb-4">The Minds Behind It</RotlessText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-bg-primary rounded-3xl overflow-hidden border border-border-default shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Premium Image Header */}
              <div className="relative h-96 w-full overflow-hidden bg-bg-dark">
                {/* Image with cool effect: grayscale by default, colored on hover */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                {/* Gradient Overlay strictly at the bottom for text readability */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-transparent" />
                
                <div className="absolute bottom-4 left-6 right-6">
                  <RotlessText variant="loud2" className="text-text-primary mb-1 leading-none">{member.name}</RotlessText>
                  <RotlessText variant="chat" className="text-primary-default font-medium text-sm">{member.role}</RotlessText>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6">
                <div className="mb-8">
                  <RotlessText variant="label" className="text-text-tertiary mb-4 uppercase tracking-wider">Background</RotlessText>
                  <ul className="space-y-2">
                    {member.background.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary-default mt-1">•</span>
                        <RotlessText variant="chat" className="text-text-secondary">{item}</RotlessText>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <RotlessText variant="label" className="text-text-tertiary mb-4 uppercase tracking-wider">Key Strengths</RotlessText>
                  <div className="flex flex-wrap gap-2">
                    {member.strengths.map((strength, i) => (
                      <span key={i} className="px-3 py-1.5 bg-bg-elevated border border-border-subtle rounded-lg text-sm text-text-primary">
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
