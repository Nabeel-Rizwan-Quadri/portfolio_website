"use client";
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const sections = [
  { title: 'Projects', href: '#projects' },
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'Skills', href: '#skills' },
  { title: 'FAQ', href: '#faq' },
  { title: 'Contact', href: '#contact' },
];

const Header = ({ scrollToProjects }: { scrollToProjects: () => void }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href: string) => {
    if (href === '#projects') {
      scrollToProjects();
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileOpen) setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: '100vw', height: '100vh', bgcolor: '#121212', p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
        <IconButton 
          onClick={handleDrawerToggle}
          sx={{ color: '#fff' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {sections.map((section) => (
          <ListItem 
            key={section.title} 
            onClick={() => handleNavClick(section.href)}
            sx={{ 
              py: 2,
              borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <ListItemText 
              primary={section.title} 
              sx={{ 
                textAlign: 'center',
                '.MuiListItemText-primary': {
                  fontSize: '1.2rem',
                  fontWeight: 500,
                  fontFamily: 'var(--font-roboto-serif)'
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        height: '10vh',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 10
      }}
    >
      <Toolbar sx={{ 
        justifyContent: 'space-between', 
        px: { xs: 4, sm: 6, md: 3, lg: 6, xl: 8 },
        maxWidth: '1600px',
        width: '100%',
        mx: 'auto',
        minHeight: '10vh',
        padding: 0
      }}>
        {/* Left: Logo & Chip */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='h4' sx={{ 
            fontWeight: 'bold', 
            mr: 2, 
            fontFamily: 'var(--font-roboto-serif)',
            fontSize: { xs: '1.8rem', md: '2.4rem' },
            letterSpacing: '0.5px'
          }}>
            NR
          </Typography>
        </Box>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <Box>
            {sections.map((sec) => (
              <Button
                key={sec.title}
                sx={{ 
                  color: '#fff', 
                  ml: 2,
                  fontSize: '0.85rem',
                  letterSpacing: '0.5px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-roboto-serif)',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    opacity: 0.8
                  }
                }}
                onClick={() => handleNavClick(sec.href)}
              >
                {sec.title}
              </Button>
            ))}
          </Box>
        )}
        
        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box' },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header; 