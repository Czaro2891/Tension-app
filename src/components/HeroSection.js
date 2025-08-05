import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, Brain } from 'lucide-react';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
  background: radial-gradient(circle at center, rgba(255, 107, 157, 0.1) 0%, transparent 70%);
`;

const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--primary-color);
  border-radius: 50%;
  opacity: 0.6;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  text-align: center;
  z-index: 1;
`;

const Tagline = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  color: var(--text-secondary);
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const MainMessage = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 3rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const MessageText = styled.p`
  font-size: 1.2rem;
  color: var(--text-primary);
  line-height: 1.7;
  font-style: italic;
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryCTA = styled(motion.button)`
  background: var(--gradient-primary);
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-soft);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-glow);
  }
`;

const SecondaryCTA = styled(motion.button)`
  background: transparent;
  border: 2px solid var(--primary-color);
  padding: 1rem 2rem;
  border-radius: 50px;
  color: var(--primary-color);
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-3px);
  }
`;

const FeatureIcons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 4rem;
  flex-wrap: wrap;
`;

const IconContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--gradient-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const IconText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;

const HeroSection = () => {
  const floatingElements = Array.from({ length: 20 }, (_, i) => i);

  return (
    <HeroContainer id="hero">
      <BackgroundAnimation>
        {floatingElements.map((_, index) => (
          <FloatingElement
            key={index}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </BackgroundAnimation>

      <HeroContent>
        <Tagline
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Where Intimacy Meets Intelligence
        </Tagline>

        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover the depths of your desires through advanced AI-powered psychosexual profiling. 
          A revolutionary social experiment in human connection and self-awareness.
        </Subtitle>

        <MainMessage
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <MessageText>
            "Tension is not just an app—it's a journey into the uncharted territories of human intimacy. 
            Through sophisticated AI agents and psychological insights, we create a space where vulnerability 
            becomes strength, and self-discovery leads to deeper connections."
          </MessageText>
        </MainMessage>

        <CTAButtons
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <PrimaryCTA
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
          >
            Begin Your Journey
            <ArrowRight size={20} />
          </PrimaryCTA>
          <SecondaryCTA
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('ai-technology').scrollIntoView({ behavior: 'smooth' })}
          >
            Explore AI Technology
            <Sparkles size={20} />
          </SecondaryCTA>
        </CTAButtons>

        <FeatureIcons
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <IconContainer
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon>
              <Brain size={24} />
            </Icon>
            <IconText>AI Profiling</IconText>
          </IconContainer>
          <IconContainer
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon>
              <Heart size={24} />
            </Icon>
            <IconText>Deep Connection</IconText>
          </IconContainer>
          <IconContainer
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon>
              <Sparkles size={24} />
            </Icon>
            <IconText>Multi-Agent AI</IconText>
          </IconContainer>
        </FeatureIcons>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection; 