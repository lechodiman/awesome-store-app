import { Box, Flex, Heading } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type HeaderProps = {
  children: ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <Box as="header" bgColor="white" boxShadow="md">
      <Box maxWidth="6xl" mx="auto" py="6" px="4">
        <Flex justify="space-between">{children}</Flex>
      </Box>
    </Box>
  );
};

type HeaderTitleProps = {
  children: ReactNode;
};
const HeaderTitle = ({ children }: HeaderTitleProps) => {
  return (
    <Heading fontWeight="bold" letterSpacing="tight" color="gray.900" size="lg">
      {children}
    </Heading>
  );
};

Header.Title = HeaderTitle;

export default Header;
