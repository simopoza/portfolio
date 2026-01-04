import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Badge,
  HStack,
  Link,
  Icon,
  Image,
  Stack,
  Button,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import projects from '../../data/projects';

const makePlaceholder = (title) => {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='800' height='420'>
      <rect width='100%' height='100%' fill='%23E5E7EB' />
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%236B7280' font-family='Arial, Helvetica, sans-serif' font-size='28'>${title}</text>
    </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export default function Projects() {
  const navigate = useNavigate();
  return (
    <Box minH="100vh" pt={24} pb={20} px={{ base: 4, sm: 6, lg: 8 }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Container maxW="6xl">
          <Box textAlign="center" mb={12}>
            <Heading mb={4} color="gray.900">My Projects</Heading>
            <Text color="gray.600" maxW="3xl" mx="auto">A collection of recent work showcasing full-stack development, modern design, and practical problem solving.</Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={{ base: 8, md: 10 }}>
            {projects.map((project, idx) => {
              const slug = project.title.toLowerCase().replace(/\s+/g, '-');
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                >
                  <Box p={{ base: 3, md: 4 }}>
                    <Box>
                      <Box
                        display="block"
                        bg="white"
                        borderRadius="16px"
                        overflow="hidden"
                        boxShadow="lg"
                        borderWidth="1px"
                        borderColor="gray.200"
                        _hover={{ boxShadow: 'xl', transform: 'translateY(-6px)' }}
                        onClick={() => navigate(`/projects/${slug}`)}
                        cursor="pointer"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            navigate(`/projects/${slug}`);
                          }
                        }}
                      >
                        <Box h={{ base: '260px', md: '320px' }} bg="gray.200" position="relative" overflow="hidden">
                          <Image
                            src={project.image ? project.image : makePlaceholder(project.title)}
                            alt={project.title}
                            objectFit="cover"
                            w="full"
                            h="full"
                            transition="transform 0.3s"
                            _hover={{ transform: 'scale(1.05)' }}
                          />
                        </Box>

                        <Box p={{ base: 6, md: 8 }}>
                          <Badge px={3} py={1} bg="blue.50" color="blue.600" borderRadius="full" fontSize="xs" mb={3}>
                            Project
                          </Badge>

                          <Heading as="h3" fontSize="18px" mb={2} fontWeight="medium">
                            {project.title}
                          </Heading>

                          <Text fontSize="14px" color="gray.600" mb={4}>
                            {project.description}
                          </Text>

                          <HStack spacing={2} flexWrap="wrap">
                            {project.techStack.slice(0, 3).map((tech, i) => (
                              <Badge key={i} px={2} py={1} bg="gray.100" color="gray.700" borderRadius="md" fontSize="xs">
                                {tech}
                              </Badge>
                            ))}
                          </HStack>

                          <HStack spacing={3} mt={4}>
                            {project.github && (
                              <Button
                                as={Link}
                                href={project.github}
                                isExternal
                                target="_blank"
                                rel="noopener noreferrer"
                                size="sm"
                                variant="outline"
                                _focus={{ boxShadow: 'none', outline: 'none', textDecoration: 'none' }}
                                _active={{ boxShadow: 'none', outline: 'none' }}
                                _focusVisible={{ boxShadow: 'none', outline: 'none' }}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Icon as={FaGithub} mr={2} boxSize={4} />
                                Code
                              </Button>
                            )}

                            {project.live && (
                              <Button
                                as={Link}
                                href={project.live}
                                isExternal
                                target="_blank"
                                rel="noopener noreferrer"
                                size="sm"
                                variant="outline"
                                _focus={{ boxShadow: 'none', outline: 'none', textDecoration: 'none' }}
                                _active={{ boxShadow: 'none', outline: 'none' }}
                                _focusVisible={{ boxShadow: 'none', outline: 'none' }}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Icon as={FiExternalLink} mr={2} boxSize={4} />
                                Demo
                              </Button>
                            )}
                          </HStack>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              );
            })}
          </SimpleGrid>
        </Container>
      </motion.div>
    </Box>
  );
}
