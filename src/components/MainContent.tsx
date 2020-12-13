import { Box } from '@chakra-ui/react';
import React from 'react';

const MainContent: React.FC = ({ children }) => {
  return (
    <Box as="main" px="4">
      <Box maxWidth="6xl" mx="auto" py="6">
        {children}
      </Box>
    </Box>
  );
};

export default MainContent;
