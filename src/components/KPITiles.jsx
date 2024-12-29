import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const KPITiles = ({ tiles }) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={2}
      justifyContent="space-between"
    >
      {tiles.map((tile, index) => (
        <Box
          key={index}
          width={{ xs: '100%', sm: '48%', md: '23%' }}
        >
          <Paper
            style={{
              padding: '20px',
              textAlign: 'center',
              backgroundColor: '#E0F7FA',
              cursor: 'pointer',
            }}
            elevation={3}
          >
            <Typography variant="h6">{tile.title}</Typography>
            <Typography variant="h4">{tile.value}</Typography>
          </Paper>
        </Box>
      ))}
    </Box>
  );
};

export default KPITiles;
