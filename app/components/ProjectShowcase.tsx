import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage'; // Database icon
import Image from 'next/image';
import Link from 'next/link';

const ProjectShowcase: React.FC = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 8,
        px: 2,
        bgcolor: 'background.paper',
        color: 'text.primary',
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto', mb: 6 }}>
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
          UX RESEARCH ANALYSIS TOOL
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            mb: 3,
            fontSize: { xs: '2rem', md: '2.8rem' }
          }}
        >
          DesignIQ - Web App
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
          Transforming raw user research data into actionable design insights through automated analysis.
        </Typography>
      </Box>

      {/* Image Section */}
      <Box sx={{ mb: 6 }}>
        <Box 
          sx={{ 
            maxWidth: 900, 
            mx: 'auto', 
            borderRadius: 2, 
            overflow: 'hidden',
            boxShadow: 3
          }}
        >
          <Image 
            src="/scheddio.png" 
            alt="Scheddio Application" 
            width={900} 
            height={500} 
            style={{ width: '100%', height: 'auto' }} 
          />
        </Box>
      </Box>

      {/* Stats with Icons */}
      <Grid container spacing={4} sx={{ maxWidth: 800, mx: 'auto', mb: 6 }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PeopleIcon sx={{ fontSize: 48, mb: 2, color: 'primary.main' }} />
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 1 }}>60%</Typography>
          <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Reduction in manual analysis effort
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <StorageIcon sx={{ fontSize: 48, mb: 2, color: 'primary.main' }} />
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 1 }}>20+</Typography>
          <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Personas generated within minutes
          </Typography>
        </Grid>
      </Grid>

      {/* Technology Tags */}
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, mb: 6 }}>
        {['Vue.js', 'Firebase', 'Chart.js', 'Tailwind CSS'].map((tech) => (
          <Box 
            key={tech} 
            sx={{ 
              bgcolor: 'rgba(255, 255, 255, 0.1)', 
              px: 3, 
              py: 1, 
              borderRadius: 1,
              color: 'rgba(255, 255, 255, 0.8)'
            }}
          >
            {tech}
          </Box>
        ))}
      </Box>

      {/* Button */}
      <Button
        variant="outlined"
        component={Link}
        href="/source-code"
        sx={{
          borderColor: 'rgba(255, 255, 255, 0.3)',
          color: 'white',
          py: 1.5,
          px: 4,
          borderRadius: 1,
          '&:hover': {
            borderColor: 'primary.main',
            backgroundColor: 'rgba(255, 255, 255, 0.05)'
          }
        }}
        startIcon={<Box component="span" sx={{ mr: 1 }}>??</Box>}
      >
        View Source Code
      </Button>
    </Box>
  );
};

export default ProjectShowcase; 