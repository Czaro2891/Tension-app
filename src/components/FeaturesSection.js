import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Brain, 
  Shield, 
  Users, 
  Zap,
  Target,
  Gamepad2
} from 'lucide-react';

const FeaturesContainer = styled.section`
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
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
    box-shadow: var(--shadow-glow);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const FeatureDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureListItem = styled.li`
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: "•";
    color: var(--primary-color);
    position: absolute;
    left: 0;
    font-weight: bold;
  }
`;

const SpecialFeature = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(78, 205, 196, 0.1) 100%);
  border: 2px solid var(--primary-color);
  border-radius: 25px;
  padding: 3rem;
  text-align: center;
  margin-top: 3rem;
`;

const SpecialFeatureTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const SpecialFeatureDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Brain size={28} />,
      title: "Advanced AI Profiling (PsychoProfiler)",
      description: "Comprehensive psychosexual profiling through sophisticated AI algorithms that analyze your responses, preferences, and behavioral patterns.",
      items: [
        "Multi-dimensional personality assessment",
        "Sexual compatibility analysis",
        "Visual representation of results",
        "Dynamic profiling that evolves with you"
      ]
    },
    {
      icon: <Zap size={28} />,
      title: "Multi-Agent AI Architecture",
      description: "Specialized AI agents working in harmony to provide personalized experiences and insights.",
      items: [
        "PsychoProfiler Agent for personality analysis",
        "Intimacy Coach for guidance and support",
        "Compatibility Matcher for relationship insights",
        "Narrative Weaver for storytelling experiences"
      ]
    },
    {
      icon: <Shield size={28} />,
      title: "Data Control & Anonymization",
      description: "Complete control over your data with advanced privacy measures and anonymity options.",
      items: [
        "End-to-end encryption",
        "Anonymous registration options",
        "Data deletion at any time",
        "Zero-knowledge architecture"
      ]
    },
    {
      icon: <Users size={28} />,
      title: "Social Experiment & Couples Features",
      description: "Explore compatibility and deepen connections through innovative social features.",
      items: [
        "Couples compatibility testing",
        "Anonymous group discussions",
        "Shared exploration journeys",
        "Community-driven insights"
      ]
    },
    {
      icon: <Target size={28} />,
      title: "Interactive Onboarding",
      description: "Personalized onboarding experience that adapts to your responses and comfort level.",
      items: [
        "Adaptive questionnaire flow",
        "Comfort level assessment",
        "Progressive disclosure options",
        "Personalized recommendations"
      ]
    },
    {
      icon: <Gamepad2 size={28} />,
      title: "AI Playground Mode",
      description: "Experiment with different AI agents and explore various aspects of your personality.",
      items: [
        "Multi-agent conversations",
        "Role-playing scenarios",
        "Creative exploration tools",
        "Safe experimentation space"
      ]
    }
  ];

  return (
    <FeaturesContainer id="features" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Platform Features</SectionTitle>
          <SectionSubtitle>
            Discover the revolutionary features that make Tension the most advanced 
            platform for exploring intimacy and self-awareness through AI technology.
          </SectionSubtitle>
        </SectionHeader>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <FeatureIcon>
                {feature.icon}
              </FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <FeatureList>
                {feature.items.map((item, itemIndex) => (
                  <FeatureListItem key={itemIndex}>{item}</FeatureListItem>
                ))}
              </FeatureList>
            </FeatureCard>
          ))}
        </FeaturesGrid>

        <SpecialFeature
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <SpecialFeatureTitle>🎭 The Social Experiment</SpecialFeatureTitle>
          <SpecialFeatureDescription>
            Tension is more than an app—it's a groundbreaking social experiment in human connection. 
            Through our multi-agent AI architecture, we create a safe space for exploring the depths 
            of human intimacy while contributing to our collective understanding of relationships, 
            desire, and self-awareness. Every interaction, every discovery, every connection 
            becomes part of a larger narrative about what it means to be human in the digital age.
          </SpecialFeatureDescription>
        </SpecialFeature>
      </Container>
    </FeaturesContainer>
  );
};

export default FeaturesSection; 