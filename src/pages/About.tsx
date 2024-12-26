import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Container from '../components/layout/Container';
import AboutHero from '../components/about/hero/AboutHero';
import TeamSection from '../components/about/team/TeamSection';
import CultureSection from '../components/about/culture/CultureSection';
import CSRSection from '../components/about/csr/CSRSection';

export default function About() {
  return (
    <PageWrapper>
      <Container>
        <AboutHero />
        <TeamSection />
        <CultureSection />
        <CSRSection />
      </Container>
    </PageWrapper>
  );
}