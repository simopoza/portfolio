import React from 'react';
import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box as="section" pt={{ base: 28, md: 32 }} pb={16} minH="60vh">
      <Container maxW="4xl">
        <VStack spacing={6} align="center" textAlign="center">
          <Heading as="h1" size="2xl">
            404
          </Heading>
          <Heading as="h2" size="lg" fontWeight="semibold">
            Page not found
          </Heading>
          <Text color="gray.600" maxW="3xl">
            The page you're looking for doesn't exist or has been moved. Try going back to the homepage or check out my projects.
          </Text>

          <VStack spacing={3} direction={{ base: 'column', sm: 'row' }}>
            <Button
              as={RouterLink}
              to="/"
              colorScheme="blue"
              size="md"
            >
              Go to Home
            </Button>

            <Button
              as={RouterLink}
              to="/projects"
              variant="outline"
              size="md"
            >
              View Projects
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default NotFound;
