import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Heart, Mail, Twitter, Instagram, Linkedin } from 'lucide-react';

const FooterContainer = styled.footer`
  background: var(--background-dark);
  border-top: 1px solid var(--border-color);
  padding: 4rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const FooterLink = styled(motion.a)`
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
  }
`;

const FooterText = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-glow);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid var(--border-color);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Copyright = styled.p`
  color: var(--text-muted);
  font-size: 0.9rem;
`;

const FooterLogo = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MadeWithLove = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.9rem;
`;

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <FooterLogo>
              Tension
              <Heart size={20} />
            </FooterLogo>
            <FooterText>
              Where intimacy meets intelligence. Discover the depths of your desires 
              through advanced AI-powered psychosexual profiling and meaningful connections.
            </FooterText>
            <SocialLinks>
              <SocialIcon
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={18} />
              </SocialIcon>
              <SocialIcon
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={18} />
              </SocialIcon>
              <SocialIcon
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={18} />
              </SocialIcon>
              <SocialIcon
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={18} />
              </SocialIcon>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Platform</FooterTitle>
            <FooterLink
              whileHover={{ x: 5 }}
              onClick={() => scrollToSection('features')}
            >
              Features
            </FooterLink>
            <FooterLink
              whileHover={{ x: 5 }}
              onClick={() => scrollToSection('ai-technology')}
            >
              AI Technology
            </FooterLink>
            <FooterLink
              whileHover={{ x: 5 }}
              onClick={() => scrollToSection('philosophy')}
            >
              Philosophy
            </FooterLink>
            <FooterLink
              whileHover={{ x: 5 }}
              onClick={() => scrollToSection('key-takeaways')}
            >
              Key Takeaways
            </FooterLink>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Support</FooterTitle>
            <FooterLink whileHover={{ x: 5 }}>
              Help Center
            </FooterLink>
            <FooterLink whileHover={{ x: 5 }}>
              Privacy Policy
            </FooterLink>
            <FooterLink whileHover={{ x: 5 }}>
              Terms of Service
            </FooterLink>
            <FooterLink whileHover={{ x: 5 }}>
              Contact Us
            </FooterLink>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Resources</FooterTitle>
            <FooterLink whileHover={{ x: 5 }}>
              Blog
            </FooterLink>
            <FooterLink whileHover={{ x: 5 }}>
              Research
            </FooterLink>
            <FooterLink whileHover={{ x: 5 }}>
              Community Guidelines
            </FooterLink>
            <FooterLink whileHover={{ x: 5 }}>
              Safety Center
            </FooterLink>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            © 2024 Tension. All rights reserved. A revolutionary approach to intimacy and self-discovery.
          </Copyright>
          <MadeWithLove>
            Made with <Heart size={14} style={{ color: 'var(--primary-color)' }} /> for human connection
          </MadeWithLove>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 