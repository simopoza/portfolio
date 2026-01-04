import { Link as RouterLink, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  HStack,
  Image,
  Badge,
  VStack,
  Stack,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react';
import { FaGithub, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import projects from '../../data/projects';
import detailsBySlug from '../../data/projectDetails';

const slugFrom = (title) => title.toLowerCase().replace(/\s+/g, '-');

// moved detailsBySlug to src/data/projectDetails.js

function InfoCard({ title, children, variant = 'light' }) {
  const isHighlight = variant === 'highlight';

  return (
    <Box
      bg={isHighlight ? 'blue.50' : 'white'}
      rounded="2xl"
      p={{ base: 6, md: 8 }}
      border="1px solid"
      borderColor={isHighlight ? 'blue.100' : 'gray.100'}
      boxShadow="sm"
    >
      <Heading as="h3" fontSize="20px" mb={3} color={isHighlight ? 'blue.800' : 'gray.900'}>
        {title}
      </Heading>

      <Text fontSize="15px" lineHeight="1.7" color="gray.700">
        {children}
      </Text>
    </Box>
  );
}

function FeatureItem({ text }) {
  return (
    <HStack
      align="center"
      spacing={3}
      bg="white"
      rounded="xl"
      p={{ base: 4, md: 5 }}
      boxShadow="sm"
      border="1px solid"
      borderColor="gray.100"
    >
      <Icon as={FaCheckCircle} boxSize={5} color="green.500" />
      <Text color="gray.700" fontSize="15px">
        {text}
      </Text>
    </HStack>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => slugFrom(p.title) === slug);

  const details = detailsBySlug[slug] || {};
  const features = details.features ?? project.features ?? [];
  const tech = details.techStack ?? project.techStack ?? [];

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <Box minH="100vh" pt={24} pb={{ base: 12, md: 16 }} px={{ base: 4, sm: 6, lg: 8 }} bg="gray.50">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Container maxW="5xl">
          <Box mb={8}>
            <Button as={RouterLink} to="/projects" variant="ghost" size="sm" mb={6} _focus={{ boxShadow: 'none' }}>
              <Icon as={FaArrowLeft} mr={3} boxSize={4} />
              Back to Projects
            </Button>

            <HStack spacing={{ base: 4, md: 6 }} align="center" mb={6}>
              <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} fontWeight="700">
                {project.title}
              </Heading>
              <Badge px={3} py={1} bg="blue.50" color="blue.600" borderRadius="full" fontSize="xs">
                Front-end Project
              </Badge>
            </HStack>

            <Text color="gray.600" mb={8}>{details.summary ?? project.description}</Text>

            <HStack spacing={{ base: 3, md: 5 }} mb={10}>
              {project.github && (
                <Button as="a" href={project.github} isExternal target="_blank" rel="noopener noreferrer" variant="solid" colorScheme="gray" size="lg" borderRadius="md" _focus={{ boxShadow: 'none' }} onClick={(e) => e.stopPropagation()}>
                  <Icon as={FaGithub} mr={3} boxSize={5} />
                  View Code
                </Button>
              )}

              {project.live && (
                <Button as="a" href={project.live} isExternal target="_blank" rel="noopener noreferrer" variant="outline" colorScheme="blue" size="lg" borderRadius="md" _focus={{ boxShadow: 'none' }} onClick={(e) => e.stopPropagation()}>
                  <Icon as={FiExternalLink} mr={3} boxSize={5} />
                  Live Demo
                </Button>
              )}
            </HStack>
          </Box>

          <Box mb={12} rounded="xl" overflow="hidden" boxShadow="sm">
            <Image src={project.image} alt={project.title} objectFit="cover" w="full" h={{ base: '220px', md: '420px' }} />
          </Box>
          {/* Problem & Solution */}
          <Box mb={16}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }}>
              <InfoCard title="Problem">{details.problem ?? project.problem ?? project.description}</InfoCard>

              <InfoCard variant="highlight" title="Solution">{details.solution ?? project.solution ?? 'Implemented a clean, responsive UI with modern tooling and best practices.'}</InfoCard>
            </SimpleGrid>
          </Box>

          {/* Main Features */}
          <Box mb={16}>
            <Heading as="h3" fontSize="20px" mb={6}>Main Features</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
              {features.map((f) => (
                <FeatureItem key={f} text={f} />
              ))}
            </SimpleGrid>
          </Box>

          {/* Tech Stack */}
          <Box>
            <Heading as="h3" fontSize="20px" mb={4}>Tech Stack</Heading>
            <Stack direction="row" spacing={3} wrap="wrap">
              {((detailsBySlug[slug] || {}).techStack || project.techStack || []).map((tech) => (
                  <Badge key={tech} px={5} py={2} bg="gray.100" color="gray.700" borderRadius="lg" fontSize="15px">{tech}</Badge>
                ))}
            </Stack>
          </Box>
        </Container>
      </motion.div>
    </Box>
  );
}
