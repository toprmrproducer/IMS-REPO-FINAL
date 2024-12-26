import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Container from '../components/layout/Container';
import ServicesHero from '../components/services/hero/ServicesHero';
import CoreServices from '../components/services/core/CoreServices';
import ServiceCategories from '../components/services/categories/ServiceCategories';
import ServicePortfolio from '../components/services/portfolio/ServicePortfolio';
import SocialMediaPortfolio from '../components/services/portfolio/social-media/SocialMediaPortfolio';
import PPCPortfolio from '../components/services/portfolio/ppc/PPCPortfolio';
import LongFormVideo from '../components/services/portfolio/LongFormVideo';
import PhotographyPortfolio from '../components/services/portfolio/photography/PhotographyPortfolio';
import GraphicDesignPortfolio from '../components/services/portfolio/graphic-design/GraphicDesignPortfolio';
import AdPlatforms from '../components/services/advertising/AdPlatforms';
import ClientSupport from '../components/services/support/ClientSupport';
import ContactForm from '../components/services/contact/ContactForm';

export default function Services() {
  return (
    <PageWrapper>
      <Container>
        <ServicesHero />
        <CoreServices />
        <ServiceCategories />
        <AdPlatforms />
        <ServicePortfolio />
        <SocialMediaPortfolio />
        <PPCPortfolio />
        <LongFormVideo />
        <PhotographyPortfolio />
        <GraphicDesignPortfolio />
        <ClientSupport />
        <ContactForm />
      </Container>
    </PageWrapper>
  );
}