import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Brain, 
  Heart, 
  Users, 
  Palette, 
  Shield,
  Zap,
  Target,
  BarChart3,
  Lock
} from 'lucide-react';

const AIContainer = styled.section`
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

const TechnologyOverview = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  margin-bottom: 4rem;
`;

const OverviewTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  text-align: center;
`;

const OverviewText = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  text-align: center;
  font-size: 1.1rem;
`;

const AgentsTable = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 4rem;
`;

const TableHeader = styled.div`
  background: var(--gradient-primary);
  padding: 1.5rem 2rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1.5fr 1.5fr;
  gap: 2rem;
  align-items: center;
  font-weight: 600;
  color: white;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    text-align: center;
  }
`;

const TableRow = styled(motion.div)`
  padding: 1.5rem 2rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1.5fr 1.5fr;
  gap: 2rem;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    text-align: center;
  }
`;

const AgentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AgentIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: var(--gradient-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`;

const AgentName = styled.div`
  font-weight: 600;
  color: var(--text-primary);
  font-size: 1.1rem;
`;

const AgentRole = styled.div`
  color: var(--text-secondary);
  line-height: 1.5;
`;

const BaseModel = styled.div`
  color: var(--text-secondary);
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
`;

const Technologies = styled.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.4;
`;

const TechnicalSpecs = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SpecCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
`;

const SpecIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
  font-size: 1.5rem;
`;

const SpecTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const SpecDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const AITechnologySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const agents = [
    {
      icon: <Brain size={24} />,
      name: "PsychoProfiler",
      role: "Analyzes personality traits, sexual preferences, and behavioral patterns to create comprehensive psychosexual profiles",
      baseModel: "GPT-4 + Claude-3",
      technologies: "NLP, Sentiment Analysis, Pattern Recognition, Machine Learning"
    },
    {
      icon: <Heart size={24} />,
      name: "Intimacy Coach",
      role: "Provides personalized guidance, support, and educational content for relationship and intimacy development",
      baseModel: "Claude-3 + GPT-4",
      technologies: "Conversational AI, Educational Content Generation, Emotional Intelligence"
    },
    {
      icon: <Users size={24} />,
      name: "Compatibility Matcher",
      role: "Analyzes compatibility between users and suggests potential matches based on psychological profiles",
      baseModel: "GPT-4 + Custom ML",
      technologies: "Recommendation Systems, Similarity Algorithms, Predictive Analytics"
    },
    {
      icon: <Palette size={24} />,
      name: "Narrative Weaver",
      role: "Creates immersive storytelling experiences and role-playing scenarios for exploration",
      baseModel: "Claude-3 + GPT-4",
      technologies: "Creative Writing AI, Story Generation, Character Development"
    },
    {
      icon: <Shield size={24} />,
      name: "Privacy Guardian",
      role: "Ensures data security, manages anonymization, and protects user privacy throughout the platform",
      baseModel: "Custom Security AI",
      technologies: "Encryption, Zero-Knowledge Proofs, Privacy-Preserving ML"
    },
    {
      icon: <Zap size={24} />,
      name: "Adaptive Interface",
      role: "Dynamically adjusts the user interface and experience based on user preferences and comfort levels",
      baseModel: "GPT-4 + Custom UI AI",
      technologies: "Adaptive UI, Personalization, User Experience Optimization"
    }
  ];

  const technicalSpecs = [
    {
      icon: <Brain size={28} />,
      title: "Advanced NLP Processing",
      description: "State-of-the-art natural language processing for understanding complex human emotions and preferences"
    },
    {
      icon: <Lock size={28} />,
      title: "End-to-End Encryption",
      description: "Military-grade encryption ensuring all user data remains private and secure"
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Real-time Analytics",
      description: "Continuous learning and adaptation based on user interactions and feedback"
    },
    {
      icon: <Target size={28} />,
      title: "Precision Matching",
      description: "Advanced algorithms for accurate compatibility assessment and relationship insights"
    }
  ];

  return (
    <AIContainer id="ai-technology" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Technical Foundations of AI</SectionTitle>
          <SectionSubtitle>
            Our multi-agent AI architecture represents the cutting edge of artificial intelligence, 
            combining specialized agents to create a truly personalized and intelligent experience.
          </SectionSubtitle>
        </SectionHeader>

        <TechnologyOverview
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <OverviewTitle>🤖 Multi-Agent AI Architecture</OverviewTitle>
          <OverviewText>
            Tension's AI system consists of six specialized agents, each designed to handle specific aspects 
            of the user experience. These agents work in harmony, communicating and collaborating to provide 
            seamless, intelligent, and deeply personalized interactions. Our architecture leverages the latest 
            advances in large language models, machine learning, and privacy-preserving technologies.
          </OverviewText>
        </TechnologyOverview>

        <AgentsTable
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <TableHeader>
            <div>Agent</div>
            <div>Role & Responsibilities</div>
            <div>Base Model</div>
            <div>Supporting Technologies</div>
          </TableHeader>
          {agents.map((agent, index) => (
            <TableRow
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <AgentInfo>
                <AgentIcon>
                  {agent.icon}
                </AgentIcon>
                <AgentName>{agent.name}</AgentName>
              </AgentInfo>
              <AgentRole>{agent.role}</AgentRole>
              <BaseModel>{agent.baseModel}</BaseModel>
              <Technologies>{agent.technologies}</Technologies>
            </TableRow>
          ))}
        </AgentsTable>

        <TechnicalSpecs
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {technicalSpecs.map((spec, index) => (
            <SpecCard
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <SpecIcon>
                {spec.icon}
              </SpecIcon>
              <SpecTitle>{spec.title}</SpecTitle>
              <SpecDescription>{spec.description}</SpecDescription>
            </SpecCard>
          ))}
        </TechnicalSpecs>
      </Container>
    </AIContainer>
  );
};

export default AITechnologySection; 