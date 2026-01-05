"use client";
import { useRef, useEffect, useState, } from 'react';
import React from 'react';
import {
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import ProductKeysSection from '../components/ProductKeysSection';
// import ProjectShowcaseSection from '../components/ProjectShowcaseSection';
// import ClientExperiencesSection from '../components/ClientExperiencesSection';
// import TestimonialsSection from '../components/TestimonialsSection';
import SkillsSection from '../components/SkillsSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Intro from '../components/Intro';
import Header from '../components/Header';

// Create a theme with Roboto Serif as the default font
const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto-serif)',
    h1: {
      fontFamily: 'var(--font-roboto-serif)',
    },
    h2: {
      fontFamily: 'var(--font-roboto-serif)',
    },
    h3: {
      fontFamily: 'var(--font-roboto-serif)',
    },
    h4: {
      fontFamily: 'var(--font-roboto-serif)',
    },
    h5: {
      fontFamily: 'var(--font-roboto-serif)',
    },
    h6: {
      fontFamily: 'var(--font-roboto-serif)',
    },
    body1: {
      fontFamily: 'var(--font-roboto-serif)',
    },
    body2: {
      fontFamily: 'var(--font-roboto-serif)',
    },
    button: {
      fontFamily: 'var(--font-roboto-serif)',
    },
    caption: {
      fontFamily: 'var(--font-roboto-serif)',
    },
  },
});



const FadeInSection = React.forwardRef(({ children, id }: { children: React.ReactNode; id?: string }, ref: React.Ref<HTMLDivElement>) => {
  // Intersection Observer to trigger animation
  const controls = useAnimation();
  const localRef = useRef(null);
  
  // Use the passed ref or the local one
  const resolvedRef = ref || localRef;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.3 } // Increased threshold to ensure more of section is visible
    );
    
    const currentElement = (resolvedRef as React.RefObject<HTMLDivElement>).current;
    if (currentElement) observer.observe(currentElement);
    return () => observer.disconnect();
  }, [controls, resolvedRef]);

  return (
    <motion.div
      ref={resolvedRef}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      style={{ marginBottom: '6rem' }}
    >
      {children}
    </motion.div>
  );
});

// Adding display name for React DevTools
FadeInSection.displayName = 'FadeInSection';

export default function HomePage() {
  const [scrollIconVisible, setScrollIconVisible] = useState(true);

  // Add ref for the sections
  const projectsRef = useRef<HTMLDivElement>(null);
  const productKeysRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the projects section
  const scrollToProjects = () => {
    // Try using the ref first
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    } 
    // Fallback to using the ID
    else {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollIconVisible(false);
      } else {
        setScrollIconVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        backgroundColor: '#121212', 
        color: '#fff', 
        minHeight: '100vh',
        fontFamily: 'var(--font-roboto-serif)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Static grid background - limited to first screen */}
        <Box 
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100vh', // Limit to just the viewport height
            opacity: 0.65,
            zIndex: 0,
            pointerEvents: 'none',
            backgroundColor: '#121212',
            backgroundImage: `
              linear-gradient(rgba(40, 40, 40, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(40, 40, 40, 0.5) 1px, transparent 1px),
              linear-gradient(rgba(40, 40, 40, 0.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(40, 40, 40, 0.25) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px, 40px 40px, 10px 10px, 10px 10px',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'radial-gradient(circle at center, rgba(25, 25, 25, 0) 0, #121212 100%)',
              zIndex: 1
            }
          }}
        />
        
        {/* Header */}
        <Header scrollToProjects={scrollToProjects} />

        {/* Intro Section */}
        <Intro scrollToProjects={scrollToProjects} scrollIconVisible={scrollIconVisible} />

        {/* Product Keys Section */}
        <Box ref={productKeysRef} id="product-keys">
          <ProductKeysSection />
        </Box>
        
        {/* Projects Section */}
        {/* <Box ref={projectsRef} id="projects">
          <ProjectShowcaseSection />
        </Box> */}
        
        {/* Other sections */}
        {/* <ClientExperiencesSection /> */}
        {/* <TestimonialsSection /> */}
        <SkillsSection />
        <FAQSection />
        <ContactSection />
      </Box>
    </ThemeProvider>
  );
} 