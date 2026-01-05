"use client";
import React, { useRef, useEffect } from 'react';
import { 
  Typography, 
  Box, 
  Container,
  IconButton
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// Testimonial data
const testimonialData = [
  {
    id: 1,
    name: "David Miller",
    title: "CEO",
    company: "HealthTech Solutions",
    quote: "Nabeel's approach to our healthcare platform redesign was transformative. He understood our users' needs perfectly and delivered a solution that exceeded our expectations.",
    videoUrl: "#" // Replace with actual video URL
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "CTO",
    company: "EduTech Innovations",
    quote: "The learning management system Nabeel developed for us has transformed how we deliver educational content. The UI is intuitive and engagement metrics have increased by 45%.",
    videoUrl: "#" // Replace with actual video URL
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Founder",
    company: "GreenStart Solutions",
    quote: "From concept to launch in just 6 weeks. The MVP Nabeel built for us helped secure our seed funding round and gave us a solid foundation to build upon.",
    videoUrl: "#" // Replace with actual video URL
  }
];

// Component for a single testimonial video
const TestimonialVideo = ({ testimonial, isActive = false }: { testimonial: typeof testimonialData[0], isActive?: boolean }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.3 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      style={{ width: '100%', display: isActive ? 'block' : 'none' }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
          borderRadius: '12px',
          overflow: 'hidden',
          backgroundColor: '#000',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Video thumbnail or placeholder */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#000',
            opacity: 0.7
          }}
        />
        
        {/* Play button */}
        <IconButton
          sx={{
            width: '80px',
            height: '80px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(5px)',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            zIndex: 2,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            }
          }}
        >
          <PlayArrowIcon sx={{ fontSize: '40px', color: '#fff' }} />
        </IconButton>
        
        {/* Testimonial details - overlaid on video */}
        <Box 
          sx={{ 
            position: 'absolute',
            bottom: '30px',
            left: 0,
            right: 0,
            padding: '20px 40px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0) 100%)',
            color: '#fff',
            textAlign: 'left',
            zIndex: 2
          }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 'bold',
              mb: 1,
              fontSize: { xs: '1.2rem', md: '1.4rem' }
            }}
          >
            {testimonial.name} • {testimonial.title} • {testimonial.company}
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              fontStyle: 'italic',
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: { xs: '0.9rem', md: '1rem' },
              maxWidth: '800px',
              mb: 2
            }}
          >
            &ldquo;{testimonial.quote}&rdquo;
          </Typography>
          
          <Box 
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              cursor: 'pointer'
            }}
          >
            <PlayArrowIcon sx={{ mr: 1, fontSize: '1rem' }} />
            <Typography 
              variant="button" 
              sx={{ 
                textTransform: 'none',
                fontSize: '0.9rem'
              }}
            >
              Watch testimonial
            </Typography>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

const ClientExperiencesSection = () => {
  const [activeTestimonial] = React.useState(0);
  
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
      
      <Container maxWidth={false} sx={{ maxWidth: '1600px', mx: 'auto', position: 'relative', zIndex: 1 }}>
        <Box sx={{ mb: 8, textAlign: 'center' }}>
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
            CLIENT EXPERIENCES
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
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            What clients say
          </Typography>
        </Box>

        {/* Video testimonials */}
        <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
          {testimonialData.map((testimonial, index) => (
            <TestimonialVideo 
              key={testimonial.id} 
              testimonial={testimonial} 
              isActive={index === activeTestimonial} 
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ClientExperiencesSection; 