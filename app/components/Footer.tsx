"use client";
import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  IconButton
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';

// Match exactly with the sections array in page.tsx
const navigationItems = [
  { title: 'Projects', href: '#projects' },
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'Skills', href: '#skills' },
  { title: 'FAQ', href: '#faq' },
  { title: 'Contact', href: '#contact' }
];

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#121212',
        color: '#fff',
        py: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
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

      <Container maxWidth={false} sx={{ 
        maxWidth: '1600px', 
        mx: 'auto', 
        position: 'relative', 
        zIndex: 1,
        px: { xs: 4, sm: 6, md: 3, lg: 6, xl: 8 }
      }}>
        <Grid container spacing={4}>
          {/* Logo and tagline */}
          <Grid item xs={12} md={5} lg={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, fontFamily: 'var(--font-roboto-serif)' }}>
              NR
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                mb: 3, 
                maxWidth: '350px',
                fontFamily: 'var(--font-roboto-serif)',
                fontSize: '0.95rem',
                lineHeight: 1.7
              }}
            >
              Building exceptional digital experiences that users love
            </Typography>
            {/* Social Icons */}
            <Box sx={{ display: 'flex', mb: { xs: 3, md: 0 } }}>
              <IconButton 
                sx={{ 
                  color: 'white', 
                  mr: 1,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                }}
                aria-label="LinkedIn"
                component="a"
                href="https://linkedin.com/in/nabeel-rizwan-quadri/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: 'white', 
                  mr: 1,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                }}
                aria-label="Twitter"
                component="a"
                href="https://twitter.com/nabeelrizwanq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: 'white', 
                  mr: 1,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                }}
                aria-label="GitHub"
                component="a"
                href="https://github.com/nabeel-rizwan-quadri"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                }}
                aria-label="Email"
                component="a"
                href="mailto:mr.nabeelrizwan@gmail.com"
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Navigation */}
          <Grid item xs={12} md={3} lg={4} sx={{ display: 'flex', justifyContent: { md: 'center', lg: 'flex-end' } }}>
            <Box sx={{ textAlign: 'left', width: '100%', maxWidth: '250px' }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: '500', 
                  mb: 3,
                  fontSize: '1.1rem',
                  fontFamily: 'var(--font-roboto-serif)'
                }}
              >
                Navigation
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column' }, gap: 1.5 }}>
                {navigationItems.map((item) => (
                  <Typography
                    key={item.title}
                    component={Link}
                    href={item.href}
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-roboto-serif)',
                      transition: 'color 0.2s ease',
                      '&:hover': {
                        color: '#fff'
                      }
                    }}
                  >
                    {item.title}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: { md: 'flex-end' } }}>
            <Box sx={{ textAlign: 'left', width: '100%', maxWidth: '250px' }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: '500', 
                  mb: 3,
                  fontSize: '1.1rem',
                  fontFamily: 'var(--font-roboto-serif)'
                }}
              >
                Contact
              </Typography>
              <Typography 
                component="a"
                href="mailto:mr.nabeelrizwan@gmail.com" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  display: 'block',
                  mb: 1.5,
                  textDecoration: 'none',
                  fontFamily: 'var(--font-roboto-serif)',
                  '&:hover': {
                    color: '#fff'
                  }
                }}
              >
              mr.nabeelrizwan@gmail.com
              </Typography>
              <Typography 
                component="a"
                href="tel:+4915211314543" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  display: 'block',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-roboto-serif)',
                  '&:hover': {
                    color: '#fff'
                  }
                }}
              >
                (+49) 15211314543
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
       
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.5)',
              fontFamily: 'var(--font-roboto-serif)',
              fontSize: '0.85rem',
              textAlign: 'center',
              paddingTop: '40px',
            }}
          >
            © 2025 Nabeel Rizwan. All rights reserved.
          </Typography>
   
      </Container>
    </Box>
  );
};

export default Footer; 