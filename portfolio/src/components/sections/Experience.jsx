import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
  Icon,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import experience from '../../data/experience';

export default function Experience() {
  return (
    <Box minH="100vh" pt={24} pb={20} px={{ base: 4, sm: 6, lg: 8 }}>
      <Container maxW="5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box textAlign="center" mb={16}>
            <Heading as="h1" fontSize={{ base: '3xl', md: '5xl' }} mb={8} color="gray.900">
              Experience
            </Heading>
            <Text color="gray.600" maxW="2xl" mx="auto" fontSize={{ base: 'md', md: 'lg' }}>
              My professional journey and hands-on experience in software development,
              working with real-world systems and production environments.
            </Text>
          </Box>
        </motion.div>

        {/* Experience Timeline */}
        <VStack spacing={8} align="stretch">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Box bg="white" rounded="xl" shadow="sm" overflow="hidden">
                <Box p={8}>
                  {/* Header */}
                  <Flex
                    direction={{ base: 'column', md: 'row' }}
                    align={{ base: 'flex-start', md: 'flex-start' }}
                    justify={{ base: 'flex-start', md: 'space-between' }}
                    mb={6}
                  >
                    <Box mb={{ base: 4, md: 0 }}>
                      <Heading as="h2" fontSize="2xl" color="gray.900" mb={2}>
                        {exp.role}
                      </Heading>
                      <HStack color="blue.600" mb={2}>
                        <Icon as={FaBriefcase} boxSize={4} />
                        <Text fontWeight="medium">{exp.company}</Text>
                      </HStack>
                    </Box>
                    <VStack align="flex-start" spacing={2}>
                      <HStack color="gray.600">
                        <Icon as={FaCalendarAlt} boxSize={4} />
                        <Text>{exp.duration}</Text>
                      </HStack>
                      <HStack color="gray.600">
                        <Icon as={FaMapMarkerAlt} boxSize={4} />
                        <Text>{exp.location}</Text>
                      </HStack>
                    </VStack>
                  </Flex>

                  {/* Description */}
                  <VStack spacing={3} align="stretch">
                    {exp.description.map((item, idx) => (
                      <HStack key={idx} align="start">
                        <Icon as={FaCheckCircle} color="green.500" mt={1} boxSize={4} flexShrink={0} />
                        <Text color="gray.600">{item}</Text>
                      </HStack>
                    ))}
                  </VStack>

                  {/* Highlight Banner */}
                  <Box mt={6} p={4} bg="blue.50" rounded="lg">
                    <Text color="blue.900">
                      <Text as="strong">Key Achievement:</Text> Successfully contributed to critical banking and payment
                      systems, working with production-level code in the C programming language and MySQL databases.
                    </Text>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </VStack>

        {/* Additional Info Section */}
        <Box mt={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Box
              backgroundImage="linear-gradient(to right, #6366F1, #8B5CF6)"
              color="white"
              p={8}
              borderRadius="xl"
            >
              <Heading as="h3" fontSize="2xl" mb={4} color="white">
                Looking for New Opportunities
              </Heading>

              <Text mb={6} color="blue.50">
                I'm currently seeking new challenges in full-stack development where I can leverage
                my experience in backend systems, modern web technologies, and contribute to
                impactful projects.
              </Text>

              <ChakraLink
                as={RouterLink}
                to="/contact"
                display="inline-flex"
                alignItems="center"
                px={6}
                py={3}
                bg="white"
                color="blue.600"
                rounded="lg"
                _hover={{ bg: 'gray.100' }}
                transition="all 0.2s"
              >
                Get In Touch
              </ChakraLink>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
