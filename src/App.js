import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AITechnologySection from './components/AITechnologySection';
import PhilosophySection from './components/PhilosophySection';
import KeyTakeawaysSection from './components/KeyTakeawaysSection';
import Footer from './components/Footer';

const AppContainer = styled.div`
  min-height: 100vh;
  background: var(--background-dark);
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AITechnologySection />
      <PhilosophySection />
      <KeyTakeawaysSection />
      <Footer />
    </AppContainer>
  );
};

export default App; 