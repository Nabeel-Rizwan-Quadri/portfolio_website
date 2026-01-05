"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  Typography, 
  Box, 
  Container,
  Paper,

  Button,

  TextField,
  InputAdornment
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import Cal, { getCalApi } from "@calcom/embed-react";

// Feature benefits with check icons
const benefitItems = [
  {
    id: 1,
    text: "Free 30-minute consultation"
  },
  {
    id: 2,
    text: "No obligation"
  },
  {
    id: 3,
    text: "Fully Confidential"
  }
];

// BenefitChip component for a single benefit item
const BenefitChip = ({ benefit, index }: { benefit: typeof benefitItems[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(30, 30, 30, 0.5)',
          color: 'white',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '30px',
          padding: '8px 20px',
          margin: '10px',
          fontSize: '1rem',
          fontFamily: 'var(--font-roboto-serif)',
        }}
      >
        <CheckCircleIcon 
          sx={{ 
            fontSize: '1.2rem', 
            marginRight: '10px', 
            color: '#4CAF50' 
          }} 
        />
        {benefit.text}
      </Box>
    </motion.div>
  );
};

const ContactSection = () => {
  const [showCalendar, setShowCalendar] = useState(true);
  const [showEmail, setShowEmail] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const emailRef = useRef(null);
  const EMAIL_ADDRESS = "mr.nabeelrizwan@gmail.com";

  
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  const handleScheduleClick = () => {
    setShowCalendar(true);
    setShowEmail(false);
  };

  const handleEmailClick = () => {
    setShowCalendar(false);
    setShowEmail(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleSendEmail = () => {
    window.location.href = `mailto:${EMAIL_ADDRESS}`;
  };

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
      
      <Container id="contact" maxWidth={false} sx={{ maxWidth: '1600px', mx: 'auto', position: 'relative', zIndex: 1 }}>
        <Paper 
          elevation={0}
          sx={{
            backgroundColor: '#121212',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            maxWidth: '1000px',
            mx: 'auto',
            mb: 4,
          
            '& iframe': {
              backgroundColor: '#121212 !important',
              color: '#FFFFFF !important',
            }
          }}
        >
          <Box sx={{ p: 4, pb: 0 }}>
            <Box sx={{ mb: 3, textAlign: 'center' }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.85rem',
                  letterSpacing: '2px',
                  mb: 1,
                  display: 'block',
                  fontFamily: 'var(--font-roboto-serif)',
                }}
              >
                LET&apos;S CONNECT
              </Typography>
              <Box 
                sx={{ 
                  width: '60px', 
                  height: '2px', 
                  backgroundColor: 'rgba(255, 255, 255, 0.3)', 
                  mx: 'auto',
                  mb: 2
                }} 
              />
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  color: 'white',
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.5rem' },
                  fontFamily: 'var(--font-roboto-serif)',
                }}
              >
                Get in Touch
              </Typography>
            </Box>
            
            {/* Benefit Chips */}
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              mb: 5, 
              gap: 2,
              mx: 'auto',
              maxWidth: '90%'
            }}>
              {benefitItems.map((benefit, index) => (
                <BenefitChip key={benefit.id} benefit={benefit} index={index} />
              ))}
            </Box>
            
            {/* Buttons */}
            {(!showCalendar || !showEmail) && (
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: 2, 
                mb: 4,
                flexWrap: { xs: 'wrap', sm: 'nowrap' }
              }}>
                <Button
                  variant="contained"
                  startIcon={
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CalendarMonthIcon sx={{ fontSize: '1.1rem', mr: 0.5 }} />
                    </Box>
                  }
                  onClick={handleScheduleClick}
                  sx={{
                    backgroundColor: showCalendar ? '#FFFFFF' : 'rgba(255, 255, 255, 0.9)',
                    color: '#000000',
                    padding: '10px 12px',
                    fontSize: '0.9rem',
                    borderRadius: '4px',
                    '&:hover': {
                      backgroundColor: '#F5F5F5',
                    },
                    fontFamily: 'var(--font-roboto-serif)',
                    width: '160px',
                    textTransform: 'none',
                    fontWeight: 500,
                  }}
                >
                  Book a Call
                </Button>
                <Button
                  variant="outlined"
                  startIcon={
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <EmailIcon sx={{ fontSize: '1.1rem', mr: 0.5 }} />
                    </Box>
                  }
                  onClick={handleEmailClick}
                  sx={{
                    borderColor: showEmail ? 'white' : 'rgba(255, 255, 255, 0.5)',
                    color: 'white',
                    padding: '10px 12px',
                    fontSize: '0.9rem',
                    borderRadius: '4px',
                    backgroundColor: showEmail ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    },
                    fontFamily: 'var(--font-roboto-serif)',
                    width: '160px',
                    textTransform: 'none',
                    fontWeight: 500,
                  }}
                >
                  Email Me
                </Button>
              </Box>
            )}
          </Box>
            
          {/* Cal.com Integration */}
          {showCalendar && !showEmail && (
            <Box sx={{ height: '650px' }}>
              <Cal 
                namespace="30min"
                calLink="nabeel-rizwan-zlsz0d/30min"
                style={{width:"100%", height:"100%", overflow:"scroll"}}
                config={{"layout":"month_view"}}
              />
            </Box>
          )}

          {/* Email Section */}
          {showEmail && !showCalendar && (
            <Box sx={{ 
              height: '450px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              p: 4
            }}>
              {/* Email Icon */}
              <Box 
                sx={{ 
                  width: 80, 
                  height: 80, 
                  borderRadius: '50%', 
                  backgroundColor: '#1E1E1E', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mb: 3
                }}
              >
                <EmailIcon sx={{ fontSize: '2.5rem', color: 'white' }} />
              </Box>
              
              {/* Email Heading */}
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 2,
                  fontFamily: 'var(--font-roboto-serif)',
                  color: 'white'
                }}
              >
                Email me directly
              </Typography>
              
              {/* Email Description */}
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 5, 
                  textAlign: 'center',
                  maxWidth: '600px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: 'var(--font-roboto-serif)',
                }}
              >
                Feel free to reach out via email if you prefer. I usually respond within 24 hours.
              </Typography>
              
              {/* Email Address Field */}
              <Box 
                sx={{ 
                  display: 'flex', 
                  width: '100%', 
                  maxWidth: '600px',
                  mb: 4
                }}
              >
                <TextField
                  fullWidth
                  value={EMAIL_ADDRESS}
                  variant="outlined"
                  inputRef={emailRef}
                  InputProps={{
                    readOnly: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          onClick={handleCopyEmail}
                          sx={{ 
                            color: copySuccess ? '#4CAF50' : 'rgba(255, 255, 255, 0.7)',
                            minWidth: 'auto'
                          }}
                        >
                          <ContentCopyIcon />
                          {copySuccess && (
                            <Typography 
                              variant="caption" 
                              sx={{ ml: 1, fontFamily: 'var(--font-roboto-serif)' }}
                            >
                              Copied!
                            </Typography>
                          )}
                        </Button>
                      </InputAdornment>
                    ),
                    sx: {
                      backgroundColor: '#1E1E1E',
                      color: 'white',
                      fontFamily: 'var(--font-roboto-serif)',
                      borderRadius: '4px',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255, 255, 255, 0.1)'
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255, 255, 255, 0.2)'
                      }
                    }
                  }}
                />
              </Box>
              
              {/* Send Email Button */}
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={handleSendEmail}
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  padding: '12px 24px',
                  fontSize: '1rem',
                  borderRadius: '4px',
                  '&:hover': {
                    backgroundColor: '#F5F5F5',
                  },
                  fontFamily: 'var(--font-roboto-serif)',
                  textTransform: 'none',
                  fontWeight: 500,
                }}
              >
                Send Email
              </Button>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactSection; 