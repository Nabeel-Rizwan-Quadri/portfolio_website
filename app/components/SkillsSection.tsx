"use client";
import React, { useRef, useEffect } from 'react';
import { 
  Typography, 
  Box, 
  Container,
  Grid,
  Divider,
  Chip
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';

// Comprehensive skills data based on professional experience
const skillsData = [
  {
    id: 1,
    title: "Frontend Development",
    skills: ["TypeScript", "React", "Vue.js", "Next.js", "SvelteKit", "HTML/CSS", "JavaScript", "Bootstrap", "FlutterFlow"]
  },
  {
    id: 2,
    title: "Backend & Database",
    skills: ["Python", "Node.js", "NestJS", "PostgreSQL", "OpenIAP", "Firebase", "MongoDB", "MS SQL", "RESTful APIs"]
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "TensorFlow Lite", "OpenVino", "Keras", "OpenCV", "Machine Learning", "Computer Vision", "Firebase ML Vision"]
  },
  {
    id: 5,
    title: "Cloud & DevOps",
    skills: ["Amazon AWS", "Google Cloud", "CI/CD Pipelines", "GitHub Actions", "Docker", "Serverless Architecture", "Version Control"]
  },
  {
    id: 6,
    title: "Development Practices",
    skills: ["Test-Driven Development (TDD)", "AGILE/SCRUM", "Microservices", "OAuth 2.0", "JWT", "Unit Testing", "Integration Testing"]
  }
];

// Component for a single skill card
const SkillCard = ({ skillCategory, index }: { skillCategory: typeof skillsData[0], index: number }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Staggered animation - delay based on index
          setTimeout(() => {
            controls.start({ opacity: 1, y: 0 });
          }, index * 200); // 200ms delay between each card
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Box
        sx={{
          p: 4,
          borderRadius: '12px',
          backgroundColor: '#000000',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            backgroundColor: '#0a0a0a',
          }
        }}
      >
        {/* Skill category title */}
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 'bold',
            color: 'white',
            mb: 2,
            fontFamily: 'var(--font-roboto-serif)',
          }}
        >
          {skillCategory.title}
        </Typography>
        
        <Divider sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          mb: 3
        }} />
        
        {/* Skills chips */}
        <Box sx={{ 
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1
        }}>
          {skillCategory.skills.map((skill, i) => (
            <Chip
              key={i}
              label={skill}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 500,
                border: '1px solid rgba(255, 255, 255, 0.15)',
                marginBottom: 1,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                }
              }}
            />
          ))}
        </Box>
      </Box>
    </motion.div>
  );
};

const SkillsSection = () => {
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
      
      <Container id="skills" maxWidth={false} sx={{ maxWidth: '1600px', mx: 'auto', position: 'relative', zIndex: 1, px: { xs: 4, sm: 6, md: 3, lg: 2, xl: 3 } }}>
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
            SKILLS
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
              mb: 3,
              fontSize: { xs: '1.75rem', sm: '2.2rem', md: '3.5rem' },
              fontFamily: 'var(--font-roboto-serif)',
            }}
          >
Technical Expertise & Skills
          </Typography>
        </Box>
        
        {/* Skills Grid - 3 columns on desktop, 1 on mobile for 6 items */}
        <Grid container spacing={4}>
          {skillsData.map((skillCategory, index) => (
            <Grid item xs={12} md={6} lg={4} key={skillCategory.id}>
              <SkillCard skillCategory={skillCategory} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsSection; 