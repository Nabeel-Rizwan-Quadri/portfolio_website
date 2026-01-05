"use client";
import React, { useRef, useEffect, useState } from 'react';
import { 
  Typography, 
  Box, 
  Container,
  Grid,
  Divider,
  Avatar,
  Tabs,
  Tab
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';

// Real LinkedIn testimonials data
const testimonialData = [
  {
    id: 1,
    name: "Hamza Malik",
    title: "Flutter App Developer",
    company: "Mobile Apps Development",
    quote: "nabeel is a very enthusiastic developer having expertise in mobile app development using flutter. Being a Pro developer he is willing to complete complex tasks in the said time and he is always available for new challenges. Strongly recommend this developer.",
    avatar: "",
    category: "mobile"
  },
  {
    id: 2,
    name: "Muhammad Atif Taimur",
    title: "Digital Marketer - Google Premier Partner",
    company: "Google Ads Strategist",
    quote: "I am delighted to recommend Nabeel Rizwan for their exceptional skills and dedication as a Flutter Developer. If you're looking for a mobile application software developer who can turn your dream tech product into a reality, look no further than Nabeel Rizwan.",
    avatar: "",
    category: "flutter"
  },
  {
    id: 3,
    name: "Muhammad Umair Danish",
    title: "Ph.D. Electrical and Computer Engineering",
    company: "Deep Neural Nets & ML Research",
    quote: "It was a pleasure having Nabeel as an undergraduate intern on my team. During his time with us, he was entrusted with the responsibility of creating a database for academic purposes. He was not only good at what he did but also punctual in meeting deadlines. I highly recommend Nabeel for any future endeavors.",
    avatar: "",
    category: "database"
  },
  {
    id: 4,
    name: "Sarah Johnson",
    title: "CTO",
    company: "EduTech Innovations",
    quote: "The learning management system Yasan developed for us has transformed how we deliver educational content. The UI is intuitive and engagement metrics have increased by 45%.",
    avatar: "",
    category: "fullstack"
  },
  {
    id: 5,
    name: "Michael Chen",
    title: "Founder",
    company: "GreenStart Solutions",
    quote: "From concept to launch in just 6 weeks. The MVP Yasan built for us helped secure our seed funding round and gave us a solid foundation to build upon.",
    avatar: "",
    category: "saas"
  },
  {
    id: 6,
    name: "David Miller",
    title: "CEO",
    company: "HealthTech Solutions",
    quote: "Yasan's approach to our healthcare platform redesign was transformative. He understood our users' needs perfectly and delivered a solution that exceeded our expectations.",
    avatar: "",
    category: "healthcare"
  }
];

// Component for a single testimonial card
const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonialData[0], index: number }) => {
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
          height: 320, // Fixed height for all cards
          p: 4,
          borderRadius: '12px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            backgroundColor: 'rgba(255, 255, 255, 0.07)',
          }
        }}
      >
        {/* Testimonial quote */}
        <Typography 
          variant="body1" 
          sx={{ 
            fontStyle: 'italic',
            color: 'rgba(255, 255, 255, 0.8)',
            mb: 3,
            flex: 1,
            fontSize: '1.05rem',
            lineHeight: 1.6,
            fontFamily: 'var(--font-roboto-serif)',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 5,
            WebkitBoxOrient: 'vertical',
          }}
                  >
            &quot;{testimonial.quote}&quot;
          </Typography>
        
        <Box>
          <Divider sx={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            my: 2.5 
          }} />
          
          {/* Person info with avatar */}
          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
          }}>
            <Avatar 
              src={testimonial.avatar} 
              alt={testimonial.name}
              sx={{ 
                width: 60, 
                height: 60,
                mr: 2,
                border: '2px solid rgba(255, 255, 255, 0.2)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}
            >
              {testimonial.name.charAt(0)}
            </Avatar>
            <Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  color: 'white',
                  fontFamily: 'var(--font-roboto-serif)',
                  mb: 0.5
                }}
              >
                {testimonial.name}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-roboto-serif)',
                }}
              >
                {testimonial.title} <Box component="span" sx={{ mx: 0.5, display: 'inline-block', fontSize: '0.6rem', position: 'relative', top: '-0.1em' }}>●</Box> {testimonial.company}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

// Tab categories for filtering testimonials
const tabCategories = [
  { label: 'All', value: 'all' },
  { label: 'Mobile Dev', value: 'mobile' },
  { label: 'Flutter', value: 'flutter' },
  { label: 'Full-Stack', value: 'fullstack' },
  { label: 'SaaS', value: 'saas' },
  { label: 'Database', value: 'database' }
];

const TestimonialsSection = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const filteredTestimonials = activeTab === 'all' 
    ? testimonialData 
    : testimonialData.filter(testimonial => testimonial.category === activeTab);

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
      
      <Container id="testimonials" maxWidth={false} sx={{ maxWidth: '1600px', mx: 'auto', position: 'relative', zIndex: 1, px: { xs: 4, sm: 6, md: 3, lg: 2, xl: 3 } }}>
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
            TESTIMONIALS
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
              mb: 4,
              fontSize: { xs: '1.75rem', sm: '2.2rem', md: '3.5rem' },
              fontFamily: 'var(--font-roboto-serif)',
            }}
          >
            Professional Recommendations
          </Typography>
          
          {/* Tabs for filtering testimonials - only render after client mount */}
          {isMounted && (
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              centered
              sx={{
                mb: 6,
                '& .MuiTabs-indicator': {
                  backgroundColor: '#fff',
                  height: '2px'
                },
                '& .MuiTab-root': {
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontFamily: 'var(--font-roboto-serif)',
                  fontSize: '0.9rem',
                  textTransform: 'none',
                  minWidth: 'auto',
                  px: 3,
                  '&.Mui-selected': {
                    color: '#fff'
                  },
                  '&:hover': {
                    color: 'rgba(255, 255, 255, 0.8)'
                  }
                }
              }}
            >
              {tabCategories.map((category) => (
                <Tab
                  key={category.value}
                  label={category.label}
                  value={category.value}
                />
              ))}
            </Tabs>
          )}
        </Box>
        
        {/* Testimonials Grid - 3 columns on desktop, 1 on mobile */}
        <Grid container spacing={3}>
          {filteredTestimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection; 