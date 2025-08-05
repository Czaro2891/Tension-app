import React from 'react';
import 'react-intersection-observer';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Fingerprint, 
  Brain, 
  UserCheck, 
  BarChart3, 
  Shield, 
  Search, 
  BookOpen,
  Star,
  Heart
} from 'lucide-react';

const TakeawaysContainer = styled.section`
  padding: 6rem 2rem;
  background: var(--background-dark);
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

const TakeawaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const TakeawayCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
    box-shadow: var(--shadow-glow);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--gradient-primary);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const TakeawayIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 18px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.8rem;
  position: relative;
  z-index: 1;
`;

const TakeawayTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const TakeawayDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const TakeawayFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TakeawayFeature = styled.li`
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  font-size: 0.95rem;

  &:before {
    content: "→";
    color: var(--primary-color);
    position: absolute;
    left: 0;
    font-weight: bold;
  }
`;

const UniqueValue = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.15) 0%, rgba(78, 205, 196, 0.15) 100%);
  border: 2px solid var(--primary-color);
  border-radius: 25px;
  padding: 4rem;
  text-align: center;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 107, 157, 0.1) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
  }
`;

const UniqueValueContent = styled.div`
  position: relative;
  z-index: 1;
`;

const UniqueValueTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--text-primary);
  font-family: 'Playfair Display', serif;
`;

const UniqueValueDescription = styled.p`
  font-size: 1.3rem;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto 2rem;
`;

const UniqueValueList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

const UniqueValueItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
`;

const UniqueValueItemTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const UniqueValueItemText = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
`;

const CallToAction = styled(motion.div)`
  text-align: center;
  margin-top: 4rem;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const CTATitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const CTAButton = styled(motion.button)`
  background: var(--gradient-primary);
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-soft);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-glow);
  }
`;

const KeyTakeawaysSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const takeaways = [
    {
      icon: <Fingerprint size={32} />,
      title: "Identity Messaging",
      description: "Tension's core identity revolves around the concept of 'tension' as a positive force—the space where growth, discovery, and transformation occur.",
      features: [
        "Embraces vulnerability as strength",
        "Celebrates the complexity of human desire",
        "Positions exploration as intellectual pursuit",
        "Frames intimacy as a journey of self-discovery"
      ]
    },
    {
      icon: <Brain size={32} />,
      title: "AI Specialization",
      description: "Each AI agent is specifically designed for distinct aspects of the user experience, creating a comprehensive and intelligent ecosystem.",
      features: [
        "PsychoProfiler for personality analysis",
        "Intimacy Coach for guidance and support",
        "Compatibility Matcher for relationship insights",
        "Narrative Weaver for creative exploration"
      ]
    },
    {
      icon: <UserCheck size={32} />,
      title: "User Onboarding",
      description: "Progressive disclosure and adaptive questioning create a comfortable, personalized introduction to the platform.",
      features: [
        "Comfort level assessment",
        "Adaptive questionnaire flow",
        "Personalized recommendations",
        "Safe exploration environment"
      ]
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Visualization of Results",
      description: "Complex psychological data is presented through intuitive, beautiful visualizations that make insights accessible and engaging.",
      features: [
        "Interactive personality charts",
        "Compatibility visualizations",
        "Progress tracking displays",
        "Dynamic data representations"
      ]
    },
    {
      icon: <Shield size={32} />,
      title: "Data Security",
      description: "Advanced privacy measures ensure complete control over personal information while maintaining the quality of AI interactions.",
      features: [
        "End-to-end encryption",
        "Zero-knowledge architecture",
        "Anonymous registration options",
        "Complete data deletion control"
      ]
    },
    {
      icon: <Search size={32} />,
      title: "Self-Exploration Capabilities",
      description: "Tools and features designed to facilitate deep self-reflection and understanding of personal desires and boundaries.",
      features: [
        "Guided self-reflection exercises",
        "Personal boundary exploration",
        "Desire mapping tools",
        "Growth tracking systems"
      ]
    },
    {
      icon: <BookOpen size={32} />,
      title: "Narrative Integration",
      description: "Storytelling and narrative elements create immersive experiences that make psychological exploration engaging and meaningful.",
      features: [
        "Personalized story generation",
        "Role-playing scenarios",
        "Character development tools",
        "Immersive exploration experiences"
      ]
    },
    {
      icon: <Star size={32} />,
      title: "Educational Integration",
      description: "Seamless integration of educational content about psychology, relationships, and human sexuality within the exploration experience.",
      features: [
        "Contextual learning opportunities",
        "Expert-curated content",
        "Interactive educational modules",
        "Progressive knowledge building"
      ]
    }
  ];

  const uniqueValues = [
    {
      title: "Revolutionary Approach",
      text: "First platform to combine advanced AI with psychosexual profiling"
    },
    {
      title: "Scientific Foundation",
      text: "Built on established psychological principles and research"
    },
    {
      title: "Privacy-First Design",
      text: "Complete user control over data and anonymity"
    },
    {
      title: "Social Experiment",
      text: "Contributes to collective understanding of human intimacy"
    }
  ];

  return (
    <TakeawaysContainer id="key-takeaways" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Key Takeaways</SectionTitle>
          <SectionSubtitle>
            Discover what makes Tension truly unique in the landscape of intimacy and relationship applications.
          </SectionSubtitle>
        </SectionHeader>

        <TakeawaysGrid>
          {takeaways.map((takeaway, index) => (
            <TakeawayCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <TakeawayIcon>
                {takeaway.icon}
              </TakeawayIcon>
              <TakeawayTitle>{takeaway.title}</TakeawayTitle>
              <TakeawayDescription>{takeaway.description}</TakeawayDescription>
              <TakeawayFeatures>
                {takeaway.features.map((feature, featureIndex) => (
                  <TakeawayFeature key={featureIndex}>{feature}</TakeawayFeature>
                ))}
              </TakeawayFeatures>
            </TakeawayCard>
          ))}
        </TakeawaysGrid>

        <UniqueValue
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <UniqueValueContent>
            <UniqueValueTitle>🌟 What Makes Tension Unique</UniqueValueTitle>
            <UniqueValueDescription>
              Tension represents a paradigm shift in how we approach intimacy and self-discovery. 
              By combining cutting-edge AI technology with deep psychological insights, we've created 
              something that doesn't just exist—it transforms the way people understand themselves and connect with others.
            </UniqueValueDescription>
            <UniqueValueList>
              {uniqueValues.map((value, index) => (
                <UniqueValueItem
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                >
                  <UniqueValueItemTitle>{value.title}</UniqueValueItemTitle>
                  <UniqueValueItemText>{value.text}</UniqueValueItemText>
                </UniqueValueItem>
              ))}
            </UniqueValueList>
          </UniqueValueContent>
        </UniqueValue>

        <CallToAction
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <CTATitle>Ready to Begin Your Journey?</CTATitle>
          <CTAText>
            Join thousands of individuals who are already exploring the depths of their intimacy 
            and discovering new dimensions of human connection through Tension.
          </CTAText>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}
          >
            Start Exploring Now
            <Heart size={20} />
          </CTAButton>
        </CallToAction>
      </Container>
    </TakeawaysContainer>
  );
};

export default KeyTakeawaysSection; 