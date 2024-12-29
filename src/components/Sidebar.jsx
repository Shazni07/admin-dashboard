import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
  Box,
} from '@mui/material';
import { Home, Category, Store, ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/system';

const SidebarContainer = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 240,
    boxSizing: 'border-box',
    backgroundColor: '#003459',
    color: '#FFFFFF',
  },
}));

const Sidebar = () => {
  const location = useLocation();
  const [openCategories, setOpenCategories] = useState(false);

  const handleToggle = () => {
    setOpenCategories(!openCategories);
  };

  const menuItems = [
    { text: 'Home', icon: <Home />, link: '/' },
    {
      text: 'Categories',
      icon: <Category />,
      link: '/categories',
      subItems: [
        { text: 'Electronics', link: '/categories/electronics' },
        { text: 'Fashion', link: '/categories/fashion' },
      ],
    },
    { text: 'Shops', icon: <Store />, link: '/shops' },
  ];

  return (
    <SidebarContainer variant="permanent">
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" sx={{ textAlign: 'center', color: '#00C6FF' }}>
          Admin Panel
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem
              button
              component={Link}
              to={item.link}
              sx={{
                backgroundColor: location.pathname === item.link ? '#0072FF' : 'inherit',
                color: location.pathname === item.link ? '#FFFFFF' : 'inherit',
                '&:hover': {
                  backgroundColor: '#0056A3',
                },
              }}
              onClick={item.subItems ? handleToggle : undefined}
            >
              <ListItemIcon sx={{ color: '#FFFFFF' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
              {item.subItems && (openCategories ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            {item.subItems && (
              <Collapse in={openCategories} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItem
                      button
                      component={Link}
                      to={subItem.link}
                      key={subItem.text}
                      sx={{
                        pl: 4,
                        backgroundColor:
                          location.pathname === subItem.link ? '#0072FF' : 'inherit',
                        color: location.pathname === subItem.link ? '#FFFFFF' : 'inherit',
                        '&:hover': {
                          backgroundColor: '#0056A3',
                        },
                      }}
                    >
                      <ListItemText primary={subItem.text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
