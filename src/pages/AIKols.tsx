import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Container from '../components/layout/Container';
import AIHero from '../components/ai-kols/AIHero';
import AIFeatures from '../components/ai-kols/AIFeatures';
import KOLCommunity from '../components/ai-kols/KOLCommunity';

export default function AIKols() {
  return (
    <PageWrapper>
      <Container>
        <AIHero />
        <AIFeatures />
        <KOLCommunity />
      </Container>
    </PageWrapper>
  );
}