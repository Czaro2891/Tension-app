import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Brain, Eye, Users, Sparkles } from 'lucide-react';

const PhilosophyContainer = styled.section`
  padding: 6rem 2rem;
  background: var(--background-light);
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const PhilosophyContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const PhilosophyText = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
`;

const PhilosophyTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--text-primary);
  font-family: 'Playfair Display', serif;
`;

const PhilosophyDescription = styled.div`
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1.1rem;

  p {
    margin-bottom: 1.5rem;
  }

  strong {
    color: var(--primary-color);
    font-weight: 600;
  }
`;

const VisualElement = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const CentralIcon = styled(motion.div)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  box-shadow: var(--shadow-glow);
`;

const OrbitingElements = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

const OrbitingElement = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--gradient-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  box-shadow: var(--shadow-soft);
`;

const CorePrinciples = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const PrincipleCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
    box-shadow: var(--shadow-glow);
  }
`;

const PrincipleIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.5rem;
`;

const PrincipleTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const PrincipleDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const MissionStatement = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(78, 205, 196, 0.1) 100%);
  border: 2px solid var(--primary-color);
  border-radius: 25px;
  padding: 4rem;
  text-align: center;
  margin-top: 4rem;
`;

const MissionTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--text-primary);
  font-family: 'Playfair Display', serif;
`;

const MissionText = styled.p`
  font-size: 1.3rem;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto;
  font-style: italic;
`;

const PhilosophySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const principles = [
    {
      icon: <Eye size={28} />,
      title: "Self-Awareness",
      description: "We believe that true intimacy begins with deep self-understanding. Our AI helps you explore the hidden aspects of your personality and desires."
    },
    {
      icon: <Heart size={28} />,
      title: "Authentic Connection",
      description: "Genuine relationships are built on vulnerability and honesty. We create spaces where authentic expression is celebrated and supported."
    },
    {
      icon: <Brain size={28} />,
      title: "Intellectual Exploration",
      description: "Intimacy is not just emotional—it's also intellectual. We encourage curiosity and learning about human psychology and relationships."
    },
    {
      icon: <Users size={28} />,
      title: "Collective Growth",
      description: "Every individual's journey contributes to our collective understanding of human connection and intimacy."
    }
  ];

  return (
    <PhilosophyContainer id="philosophy" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Philosophy & Messaging</SectionTitle>
          <SectionSubtitle>
            At the heart of Tension lies a profound belief in the transformative power of self-awareness 
            and authentic human connection.
          </SectionSubtitle>
        </SectionHeader>

        <PhilosophyContent>
          <PhilosophyText
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <PhilosophyTitle>The Philosophy of Tension</PhilosophyTitle>
            <PhilosophyDescription>
              <p>
                <strong>Tension</strong> is built on the fundamental understanding that human intimacy 
                is one of the most complex and beautiful aspects of our existence. We believe that 
                true connection requires both vulnerability and intelligence—the courage to be seen 
                and the wisdom to understand ourselves and others.
              </p>
              <p>
                Our platform represents a <strong>revolutionary approach</strong> to exploring intimacy 
                through the lens of advanced artificial intelligence. We don't replace human connection—we 
                enhance it by providing tools for deeper self-awareness and understanding.
              </p>
              <p>
                The name "Tension" reflects the beautiful <strong>dynamic balance</strong> between 
                vulnerability and strength, between exploration and safety, between individual growth 
                and collective understanding. It's the space where transformation happens.
              </p>
            </PhilosophyDescription>
          </PhilosophyText>

          <VisualElement
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CentralIcon
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Heart size={48} />
            </CentralIcon>
            <OrbitingElements>
              <OrbitingElement
                style={{ top: '0%', left: '50%', transform: 'translateX(-50%)' }}
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Brain size={24} />
              </OrbitingElement>
              <OrbitingElement
                style={{ top: '50%', right: '0%', transform: 'translateY(-50%)' }}
                animate={{ 
                  rotate: [360, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Eye size={24} />
              </OrbitingElement>
              <OrbitingElement
                style={{ bottom: '0%', left: '50%', transform: 'translateX(-50%)' }}
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Users size={24} />
              </OrbitingElement>
              <OrbitingElement
                style={{ top: '50%', left: '0%', transform: 'translateY(-50%)' }}
                animate={{ 
                  rotate: [360, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Sparkles size={24} />
              </OrbitingElement>
            </OrbitingElements>
          </VisualElement>
        </PhilosophyContent>

        <CorePrinciples
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {principles.map((principle, index) => (
            <PrincipleCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <PrincipleIcon>
                {principle.icon}
              </PrincipleIcon>
              <PrincipleTitle>{principle.title}</PrincipleTitle>
              <PrincipleDescription>{principle.description}</PrincipleDescription>
            </PrincipleCard>
          ))}
        </CorePrinciples>

        <MissionStatement
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <MissionTitle>Our Mission</MissionTitle>
          <MissionText>
            "To create a world where every individual has the tools, knowledge, and courage to explore 
            the depths of their own intimacy and forge connections that are both deeply personal and 
            universally meaningful. Through the marriage of human wisdom and artificial intelligence, 
            we're building a future where vulnerability is strength, self-awareness is power, and 
            authentic connection is the foundation of human flourishing."
          </MissionText>
        </MissionStatement>
      </Container>
    </PhilosophyContainer>
  );
};

export default PhilosophySection; 