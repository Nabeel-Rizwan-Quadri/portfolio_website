"use client";
import React, { useState } from 'react';
import { 
  Typography, 
  Box, 
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { motion } from 'framer-motion';

// FAQ data
const faqData = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "I specialize in full-stack development, UI/UX design, and custom software solutions. My services include web application development, responsive website design, e-commerce solutions, and API integrations."
  },
  {
    id: 2,
    question: "What is your development process?",
    answer: "My development process follows these key steps: 1) Discovery and requirements gathering, 2) Planning and architecture, 3) Design and prototyping, 4) Development with regular check-ins, 5) Testing and quality assurance, and 6) Deployment and support."
  },
  {
    id: 3,
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. Small websites typically take 2-4 weeks, while complex web applications may require 2-6 months. During our initial consultation, I'll provide a detailed timeline specific to your project requirements."
  },
  {
    id: 4,
    question: "Do you provide ongoing maintenance?",
    answer: "Yes, I offer ongoing maintenance and support services to ensure your project continues to perform optimally. This includes regular updates, security patches, feature enhancements, and technical support as needed."
  },
  {
    id: 5,
    question: "How do you handle revisions and feedback?",
    answer: "Feedback is an essential part of my process. I incorporate structured review periods throughout development. Each milestone includes a feedback cycle, and I work closely with clients to implement revisions efficiently while maintaining project timelines."
  },
  {
    id: 6,
    question: "What technologies do you specialize in?",
    answer: "I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various database solutions. I also work with design tools like Figma and have experience with cloud platforms such as AWS and Firebase."
  },

];

// FAQAccordion component for a single FAQ item
const FAQAccordion = ({ faq, index }: { faq: typeof faqData[0], index: number }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Accordion
        expanded={expanded}
        onChange={handleChange}
        sx={{
          backgroundColor: 'transparent',
          color: 'white',
          boxShadow: 'none',
          '&:before': {
            display: 'none',
          },
          mb: 2,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <AccordionSummary
          expandIcon={<AddIcon sx={{ color: 'white' }} />}
          sx={{
            padding: '16px 24px',
            '& .MuiAccordionSummary-content': {
              margin: '12px 0',
            },
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: '1.1rem',
              fontFamily: 'var(--font-roboto-serif)',
            }}
          >
            {faq.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: '0px 24px 24px 24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.7,
              fontFamily: 'var(--font-roboto-serif)',
            }}
          >
            {faq.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </motion.div>
  );
};

const FAQSection = () => {
  return (
    <Box sx={{ 
      backgroundColor: '#121212', 
      py: { xs: 10, md: 12 },
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Static grid background - same as other sections */}
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
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
      
      <Container id="faq" maxWidth={false} sx={{ maxWidth: '1600px', mx: 'auto', position: 'relative', zIndex: 1, px: { xs: 4, sm: 6, md: 3, lg: 2, xl: 3 } }}>
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography
            variant="overline"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.9rem',
              letterSpacing: '1.5px',
              mb: 1,
              display: 'block',
              fontFamily: 'var(--font-roboto-serif)',
            }}
          >
            FAQ
          </Typography>
          <Box 
            sx={{ 
              width: '60px', 
              height: '4px', 
              backgroundColor: 'rgba(255, 255, 255, 0.3)', 
              mx: 'auto',
              mb: 3
            }} 
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '1.75rem', sm: '2.2rem', md: '3.5rem' },
              fontFamily: 'var(--font-roboto-serif)',
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '800px',
              mx: 'auto',
              mb: 6,
              fontFamily: 'var(--font-roboto-serif)',
            }}
          >
            Answers to common questions about my work and process
          </Typography>
        </Box>
        
        {/* FAQ Accordions */}
        <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
          {faqData.map((faq, index) => (
            <FAQAccordion key={faq.id} faq={faq} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection; 