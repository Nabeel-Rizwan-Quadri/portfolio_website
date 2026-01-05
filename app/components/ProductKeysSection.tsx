"use client";
import React, { useRef } from 'react';
import { 
  Typography, 
  Box, 
  Container, 
  Card,
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import CheckIcon from '@mui/icons-material/Check';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import SecurityIcon from '@mui/icons-material/Security';

// Card data
const productKeyCards = [
  {
    id: '01',
    title: 'Usability',
    subtitle: 'No instructions needed',
    description: 'Nobody reads manuals anymore. I build interfaces that feel obvious from the first click, eliminating confusion and making every action feel natural.',
    color: '#4caf50', // Green
    icon: <CheckIcon fontSize="medium" />
  },
  {
    id: '02',
    title: 'Desirability',
    subtitle: 'The smile factor',
    description: 'Useful isn&apos;t enough—people need to enjoy using your product. I create experiences with small moments of delight that turn everyday tasks into something people look forward to.',
    color: '#2196f3', // Blue
    icon: <FavoriteIcon fontSize="medium" />
  },
  {
    id: '03',
    title: 'Scalability',
    subtitle: 'Room to grow',
    description: 'Products that break under pressure lose trust instantly. I build systems that maintain speed and reliability whether you have 10 users or 10 million.',
    color: '#ffc107', // Yellow/amber
    icon: <TrendingUpIcon fontSize="medium" />
  },
  {
    id: '04',
    title: 'Accessibility',
    subtitle: 'For everyone, always',
    description: 'Excluding people isn&apos;t just wrong—it&apos;s bad business. I create products that work for people of all abilities, because universal design leads to better experiences for everyone.',
    color: '#f44336', // Red
    icon: <AccessibilityNewIcon fontSize="medium" />
  },
  {
    id: '05',
    title: 'Security',
    subtitle: 'Protection by design',
    description: 'Security isn&apos;t an afterthought—it&apos;s foundational. I design systems with multiple layers of protection to keep your users&apos; data safe without compromising experience.',
    color: '#9c27b0', // Purple
    icon: <SecurityIcon fontSize="medium" />
  }
];

// Component for each product key card
const ProductKeyCard = ({ card, index }: { card: typeof productKeyCards[0], index: number }) => {
  const controls = useAnimation();
  const iconControls = useAnimation();
  const contentControls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Element is in view - trigger animations
          controls.start({ opacity: 1, y: 0 });
          iconControls.start({ rotate: 0, transition: { duration: 0.8, ease: "easeOut" } });
          
          // Staggered animation for content items
          contentControls.start((i: number) => ({
            opacity: 1, 
            x: 0,
            filter: "blur(0px)",
            transition: { 
              duration: 0.9, 
              delay: 0.3 + (i * 0.15),
              ease: "easeOut",
              filter: { duration: 1.5 }
            }
          }));
        } else {
          // Element is out of view - reset animations
          controls.start({ opacity: 0, y: 40 });
          iconControls.start({ rotate: 15 });
          contentControls.start(() => ({
            opacity: 0, 
            x: -20, 
            filter: "blur(8px)"
          }));
        }
      },
      { threshold: 0.2, rootMargin: "-50px" }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls, iconControls, contentControls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      style={{ marginBottom: '3rem', width: '100%' }}
    >
      <Card
        sx={{
          backgroundColor: '#1e1e1e',
          color: '#fff',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          height: '100%',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            backgroundColor: card.color
          }
        }}
      >
        <Box sx={{ p: { xs: 4, md: 5 } }}>
          <Box sx={{ display: 'flex', mb: 4, alignItems: 'center' }}>
            {/* Icon box with tilt animation */}
            <motion.div
              initial={{ rotate: 15 }}
              animate={iconControls}
              style={{ marginRight: '24px', display: 'flex', alignItems: 'center', alignSelf: 'center' }}
            >
              <Box 
                sx={{ 
                  backgroundColor: card.color, 
                  borderRadius: '10px',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1e1e1e',
                  marginBottom: '10px'
                }}
              >
                {React.cloneElement(card.icon, { fontSize: "large" })}
              </Box>
            </motion.div>

            {/* Content column with fade + blur effect */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {/* ID/Index */}
              <motion.div
                custom={0}
                initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                animate={contentControls}
              >
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: card.color, 
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                 
                  }}
                >
                  {card.id}
                </Typography>
              </motion.div>

              {/* Title */}
              <motion.div
                custom={1}
                initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                animate={contentControls}
              >
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 'bold', 
                  
                    fontSize: { xs: '1.8rem', md: '2.2rem' }
                  }}
                >
                  {card.title}
                </Typography>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                custom={2}
                initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                animate={contentControls}
              >
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.6)', 
                    mb: 2,
                    fontSize: '1.1rem'
                  }}
                >
                  {card.subtitle}
                </Typography>
              </motion.div>
            </Box>
          </Box>

          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.8,
              fontSize: '1.2rem'
            }}
          >
            {card.description}
          </Typography>
        </Box>
      </Card>
    </motion.div>
  );
};

const ProductKeysSection = () => {
  return (
    <Box sx={{ 
      backgroundColor: '#121212', 
      py: { xs: 10, md: 12 },
      position: 'relative',
      overflow: 'hidden'
    }}>
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
            SOLVING REAL PROBLEMS
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              mb: 3,
              fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.8rem' }
            }}
          >
            Four keys to products people actually use
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
            The difference between products that collect dust and those that become daily essentials isn&apos;t complexity—it&apos;s how well they solve real human needs.
          </Typography>
        </Box>

        {/* One column grid for all screen sizes */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 6,
          maxWidth: '880px',  // Increased width by 10% (from 800px)
          mx: 'auto',         // Center the column
        }}>
          {productKeyCards.map((card, index) => (
            <ProductKeyCard key={card.id} card={card} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProductKeysSection; 