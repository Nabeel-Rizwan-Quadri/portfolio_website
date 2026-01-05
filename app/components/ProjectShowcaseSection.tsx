"use client";
import React, { useRef, useEffect } from 'react';
import { 
  Typography, 
  Box, 
  Container, 
  Button,
  Chip,
  Card
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Image from 'next/image';
import { ReactElement } from 'react';

// Define the purple color to keep it consistent
const PURPLE_COLOR = '#9c27b0';

// Colors from ProductKeysSection for consistency
const PROJECT_COLORS = [
  '#42ad01', // Green
  '#2196f3', // Blue
  '#039e83', // Yellow/amber
  '#f44336', // Red
  '#DA70D6', // Purple
];

// Types for project data
interface StatItem {
  icon: ReactElement;
  value: string;
  description: string;
}

interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats: StatItem[];
  techStack: string[];
  color?: string; // Add color property
}

// Project data
const projectsData: ProjectData[] = [


  {
    title: "Vizii - SaaS Platform",
    subtitle: "Session Management & Dynamic SaaS System",
    description: "A comprehensive web application built with React, featuring secure data fetching from CRMs (XERO, Quickbooks) via OAuth, REST API connectivity, and stripe payment functionality for seamless user experiences.",
    image: "/scheddio.png",
    stats: [
      { icon: <SchoolIcon fontSize="large" />, value: "100%", description: "Secure authentication" },
      { icon: <StorageIcon fontSize="large" />, value: "24/7", description: "Real-time tracking" }
    ],
    techStack: ["React", "Node", "SQL", "Stripe", "CRM SDKs"],
    color: PROJECT_COLORS[4]
  },
  {
    title: "Sloif - SaaS Platform",
    subtitle: "React and REST API Platform",
    description: "A comprehensive web application built with React, Node and MongoDB with Data syncing from CRMs (pipedrive, hubspot). Featuring AI integration, AI analysis for keywords extraction and sentiment analysis.",
    image: "/sloif.png",
    stats: [
      { icon: <PeopleIcon fontSize="large" />, value: "80k+", description: "Active users" },
      { icon: <StorageIcon fontSize="large" />, value: "35%", description: "Increase in post-launch sign-ups" }
    ],
    techStack: ["React", "Node", "MongoDB", "OpenAI", "Langchain", "OpenCore"],
    color: PROJECT_COLORS[0]
  },
  // {
  //   title: "Punjab Health Care System - Mobile App",
  //   subtitle: "Live Video Streaming & Beauty Enhancement Platform",
  //   description: "A sophisticated live video streaming platform featuring real-time facial enhancement via FaceUnity's Beauty-Kit, optimized performance across Android devices, and efficient asset management through Google Play Asset Delivery.",
  //   image: "/phcs.jpg",
  //   stats: [
  //     { icon: <StorageIcon fontSize="large" />, value: "40%", description: "App size reduction" },
  //     { icon: <SentimentSatisfiedAltIcon fontSize="large" />, value: "20%", description: "Performance optimization" }
  //   ],
  //   techStack: ["Flutter", "Agora SDK", "FaceUnity", "Node.js", "PostgreSQL"],
  //   color: PROJECT_COLORS[1]
  // },
 
  
 
  // {
  //   title: "Saloon - Mobile App",
  //   subtitle: "Live Video Streaming & Beauty Enhancement Platform",
  //   description: "A sophisticated live video streaming platform featuring real-time facial enhancement via FaceUnity's Beauty-Kit, optimized performance across Android devices, and efficient asset management through Google Play Asset Delivery.",
  //   image: "/saloon.png",
  //   stats: [
  //     { icon: <StorageIcon fontSize="large" />, value: "40%", description: "App size reduction" },
  //     { icon: <SentimentSatisfiedAltIcon fontSize="large" />, value: "20%", description: "Performance optimization" }
  //   ],
  //   techStack: ["Flutter", "Agora SDK", "FaceUnity", "Node.js", "PostgreSQL"],
  //   color: PROJECT_COLORS[2]
  // }
];

// ProjectShowcase Component for a single project
const ProjectShowcase = ({ project, index }: { project: ProjectData; index: number }) => {
  const controls = useAnimation();
  const imageControls = useAnimation();
  const contentControls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  
  // Alternate image position based on index (odd/even)
  const isImageOnLeft = index % 2 === 0;
  
  // Get project color or default to purple
  const projectColor = project.color || PURPLE_COLOR;

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Calculate how much of the element is visible
        const visiblePercentage = entry.intersectionRatio;
        
        // Animate in when entering viewport
        if (entry.isIntersecting && visiblePercentage > 0.2) {
          controls.start({ opacity: 1, y: 0 });
          imageControls.start({ opacity: 1, scale: 1 });
          contentControls.start({ 
            opacity: 1, 
            x: 0,
            filter: 'blur(0px)'
          });
        } else {
          // Reverse animation when leaving viewport (less than 80% visible)
          controls.start({ opacity: 0, y: 50 });
          imageControls.start({ opacity: 0, scale: 0.9 });
          contentControls.start({ 
            opacity: 0, 
            x: isImageOnLeft ? -20 : 20,
            filter: 'blur(3px)'
          });
        }
      },
      { threshold: [0.2, 0.8], rootMargin: "-10%" }
    );
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, [controls, imageControls, contentControls, isImageOnLeft]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, delay: 0.1 }}
      style={{ 
      
        minHeight: '100vh', // Make each project take full viewport height
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Box 
        sx={{ 
          marginLeft: '10%', // 10% margin from all sides
          marginRight: '10%',
          display: 'flex',
          flexDirection: { xs: 'column', md: isImageOnLeft ? 'row' : 'row-reverse' },
          position: 'relative',
          width: '100%'
        }}
      >
        {/* Image Column */}
        <Box 
          sx={{ 
            width: { xs: '100%', md: '48%' },
            pr: { 
              xs: 0, 
              md: isImageOnLeft ? 4 : 0 
            },
            pl: { 
              xs: 0, 
              md: isImageOnLeft ? 0 : 4 
            },
            mb: { xs: 4, md: 0 }
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={imageControls}
            transition={{ 
              duration: 1.5, 
              delay: 0.3,
              scale: {
                type: "spring",
                damping: 18,
                stiffness: 80
              }
            }}
          >
            <Box sx={{ 
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
              border: `1px solid rgba(255, 255, 255, 0.1)`,
              height: '100%',
              display: 'flex',
              alignItems: 'center'
            }}>
              <Image 
                src={project.image} 
                alt={`${project.title} Project`}
                width={700} 
                height={400} 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  display: 'block' 
                }} 
              />
            </Box>
          </motion.div>
        </Box>

        {/* Content Column */}
        <Box 
          sx={{ 
            width: { xs: '100%', md: '52%' },
            pl: { 
              xs: 0, 
              md: isImageOnLeft ? 4 : 0 
            },
            pr: { 
              xs: 0, 
              md: isImageOnLeft ? 0 : 4 
            },
            textAlign: 'left',
            position: 'relative'
          }}
        >
          {/* Vertical line at the outside edge - always visible but lights up during load */}
          <Box 
            sx={{
              position: 'absolute',
              [isImageOnLeft ? 'right' : 'left']: '-40px',
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              display: { xs: 'none', md: 'block' }
            }}
          >
            <motion.div
              initial={{ 
                height: '100%', 
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                opacity: 0.3
              }}
              animate={{ 
                backgroundColor: projectColor,
                opacity: 1
              }}
              transition={{ 
                duration: 1.8,
                opacity: { duration: 2.2 }
              }}
              style={{
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            />
          </Box>

          {/* App Title & Description */}
          <motion.div
            initial={{ 
              opacity: 0, 
              x: isImageOnLeft ? -20 : 20,
              filter: 'blur(3px)'
            }}
            animate={contentControls}
            transition={{ 
              duration: 0.7, 
              delay: 0.3,
              ease: "easeOut"
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                mb: 1,
                fontSize: { xs: '1.4rem', sm: '1.6rem', md: '2.5rem' }
              }}
            >
              {project.title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: projectColor,
                mb: 2,
                fontSize: '1.2rem'
              }}
            >
              {project.subtitle}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                mb: 4,
                fontSize: '1rem',
                lineHeight: 1.7
              }}
            >
              {project.description}
            </Typography>
          </motion.div>

          {/* Stats section with icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'flex-start', 
              gap: { xs: 3, md: 4 }, 
              mb: 4,
              flexWrap: 'wrap' 
            }}>
              {project.stats.map((stat: StatItem, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={controls}
                  transition={{ 
                    duration: 0.7, 
                    delay: 1.0 + (i * 0.15), // Increased delay - these come in last
                    ease: "easeOut",
                    scale: {
                      type: "spring",
                      damping: 8
                    }
                  }}
                  style={{ width: 'calc(50% - 16px)' }} // Equal width for stat cards
                >
                  <Card
                    sx={{
                      backgroundColor: '#1a1a1a',
                      color: '#fff',
                      borderRadius: '12px',
                      padding: '20px',
                      width: '100%', // Takes full width of parent
                      height: '100%', // Full height
                      minHeight: '180px', // Minimum height to ensure consistency
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      textAlign: 'left',
                      gap: 1.5,
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        border: `1px solid ${projectColor}66`,
                        transform: 'translateY(-5px)',
                        boxShadow: `0 12px 20px rgba(0, 0, 0, 0.4)`
                      }
                    }}
                  >
                    <Box sx={{ 
                      backgroundColor: '#2a2a2a', 
                      borderRadius: '10px',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: projectColor,
                      mb: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: projectColor,
                        backgroundColor: '#2a2a2a',
                        boxShadow: `0 0 0 2px ${projectColor}66`
                      }
                    }}>
                      {stat.icon}
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                      {stat.description}
                    </Typography>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </motion.div>

          {/* Tech Stack Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {project.techStack.map((tech: string, i: number) => {
                  const alpha = i === 0 ? 0.15 : 0.1;
                  return (
                    <Chip 
                      key={i}
                      label={tech} 
                      sx={{ 
                        backgroundColor: `${projectColor}${alpha * 100}`,
                        color: projectColor,
                        borderRadius: '4px',
                        fontWeight: 500,
                        fontSize: '0.85rem'
                      }}
                    />
                  );
                })}
              </Box>
            </Box>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                variant="contained" 
                startIcon={<PlayArrowIcon />}
                sx={{
                  backgroundColor: '#1a1a1a',
                  color: '#fff',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  px: 3,
                  py: 1.2,
                  borderRadius: '8px',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#2a2a2a',
                    borderColor: projectColor,
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
                  }
                }}
              >
                Live Demo
              </Button>
              <Button 
                variant="contained" 
                startIcon={<CodeIcon />}
                sx={{
                  backgroundColor: '#1a1a1a',
                  color: '#fff',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  px: 3,
                  py: 1.2,
                  borderRadius: '8px',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#2a2a2a',
                    borderColor: projectColor,
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
                  }
                }}
              >
                View Source Code
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};

const ProjectShowcaseSection = () => {
  const headerControls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Add scroll listener to fade header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrollY = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const fadeStart = sectionTop;
      const fadeEnd = sectionTop + 300;
      
      if (scrollY > fadeStart) {
        const opacity = 1 - Math.min(1, (scrollY - fadeStart) / (fadeEnd - fadeStart));
        headerControls.start({ opacity });
      } else {
        headerControls.start({ opacity: 1 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headerControls]);

  return (
    <Box 
      ref={sectionRef}
      sx={{ 
        backgroundColor: '#121212', 
        py: { xs: 10, md: 12 },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Static grid background - same as hero section */}
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
      
      <Container maxWidth={false} sx={{ maxWidth: '1600px', mx: 'auto', position: 'relative', zIndex: 1 }}>
        {/* Header that fades out on scroll */}
        <motion.div animate={headerControls} initial={{ opacity: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 8, pt: 4 }}>
            <Typography
              variant="overline"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.9rem',
                letterSpacing: '1.5px',
                mb: 1,
                display: 'block'
              }}
            >
              REAL CHALLENGES, EFFECTIVE SOLUTIONS
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                mb: 3,
                fontSize: { xs: '2rem', md: '2.8rem' }
              }}
            >
              Featured Projects
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '800px',
                mx: 'auto',
                fontSize: '1.1rem',
                lineHeight: 1.7
              }}
            >
              Each project represents a business problem solved through digital means. The aesthetics serve the function, and every element earns its place by contributing to the end goal.
            </Typography>
          </Box>
        </motion.div>

        {/* Multiple Project Showcases */}
        {projectsData.map((project, index) => (
          <ProjectShowcase key={index} project={project} index={index} />
        ))}
      </Container>
    </Box>
  );
};

export default ProjectShowcaseSection; 