import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Input,
  Textarea,
  Button,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'annahrimohammed@gmail.com', href: 'mailto:annahrimohammed@gmail.com' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'https://www.linkedin.com', href: 'https://www.linkedin.com/in/mohammed-annahri/' },
    { icon: FaGithub, label: 'GitHub', value: 'github.com', href: 'https://github.com/simopoza' },
    { icon: FaPhone, label: 'Phone', value: '+212 653492047', href: 'tel:+212653492047' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Morocco', href: null },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optimistic UX: show success immediately and clear the form
    setSubmitted(true);
    const payload = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Send in background (fire-and-forget). Log errors but don't block UX.
    fetch('https://formsubmit.co/ajax/5ab425bedc2fd0b3db12155b97f4976b', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) console.error('Form submission failed', res.status);
      })
      .catch((err) => console.error('Error submitting form:', err));

    // Keep the success message visible for a few seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <Box minH="100vh" pt={24} pb={20} px={{ base: 4, sm: 6, lg: 8 }}>
      <Container maxW="5xl">
        {/* Header */}
        <Box as={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} textAlign="center" mb={16}>
          <Heading mb={6} color="gray.900">Get In Touch</Heading>
          <Text color="gray.600" maxW="2xl" mx="auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Fill out the form below or reach out through any of the contact methods.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 5 }} gap={12}>
          {/* Contact Info */}
          <Box as={motion.div} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} gridColumn={{ base: 'auto', lg: 'span 2' }}>
            <Heading as="h2" size="lg" mb={6} color="gray.900">Contact Information</Heading>
            <Stack spacing={4}>
              {contactInfo.map((info, index) => {
                const IconComp = info.icon;
                return (
                  <Box 
                    key={info.label} 
                    as={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    bg="white" 
                    rounded="lg" 
                    p={4} 
                    boxShadow="sm" 
                    display="flex" 
                    alignItems="flex-start"
                  >
                    <Box w={10} h={10} bg="blue.50" rounded="lg" display="flex" alignItems="center" justifyContent="center" mr={4} flexShrink={0}>
                      <Icon as={IconComp} color="#2563EB" boxSize={5} />
                    </Box>
                    <Box>
                      <Text color="gray.500" mb={1} fontSize="sm">{info.label}</Text>
                      {info.href ? (
                        <Text 
                          as="a" 
                          href={info.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          color="gray.900"
                          _hover={{ color: 'blue.600' }}
                          transition="colors 0.2s"
                        >
                          {info.value}
                        </Text>
                      ) : (
                        <Text color="gray.900">{info.value}</Text>
                      )}
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Box>

          {/* Contact Form */}
          <Box as={motion.div} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} gridColumn={{ base: 'auto', lg: 'span 3' }}>
            <Box bg="white" rounded="xl" p={8} boxShadow="sm">
              <Heading as="h2" size="lg" mb={6} color="gray.900">Send a Message</Heading>

              {submitted && (
                <Box
                  as={motion.div}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  mb={6}
                  p={4}
                  bg="green.50"
                  borderWidth={1}
                  borderColor="green.200"
                  color="green.700"
                  rounded="lg"
                >
                  <Text>Thank you for your message! I'll get back to you soon.</Text>
                </Box>
              )}

              <Box as="form" onSubmit={handleSubmit}>
                <Stack spacing={6}>
                  <Box>
                    <Text as="label" htmlFor="name" mb={2} display="block" color="gray.700">
                      Name
                    </Text>
                    <Input 
                      id="name"
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      placeholder="Your name"
                      borderColor="gray.300"
                      _focus={{ ring: 2, ringColor: 'blue.500', borderColor: 'transparent' }}
                      _hover={{ borderColor: 'gray.400' }}
                      px={4}
                      py={3}
                      isDisabled={loading}
                    />
                  </Box>

                  <Box>
                    <Text as="label" htmlFor="email" mb={2} display="block" color="gray.700">
                      Email
                    </Text>
                    <Input 
                      id="email"
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      placeholder="your.email@example.com"
                      borderColor="gray.300"
                      _focus={{ ring: 2, ringColor: 'blue.500', borderColor: 'transparent' }}
                      _hover={{ borderColor: 'gray.400' }}
                      px={4}
                      py={3}
                      isDisabled={loading}
                    />
                  </Box>

                  <Box>
                    <Text as="label" htmlFor="subject" mb={2} display="block" color="gray.700">
                      Subject
                    </Text>
                    <Input 
                      id="subject"
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required 
                      placeholder="What's this about?"
                      borderColor="gray.300"
                      _focus={{ ring: 2, ringColor: 'blue.500', borderColor: 'transparent' }}
                      _hover={{ borderColor: 'gray.400' }}
                      px={4}
                      py={3}
                      isDisabled={loading}
                    />
                  </Box>

                  <Box>
                    <Text as="label" htmlFor="message" mb={2} display="block" color="gray.700">
                      Message
                    </Text>
                    <Textarea 
                      id="message"
                      name="message" 
                      rows={6} 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      placeholder="Tell me about your project..."
                      borderColor="gray.300"
                      _focus={{ ring: 2, ringColor: 'blue.500', borderColor: 'transparent' }}
                      _hover={{ borderColor: 'gray.400' }}
                      resize="none"
                      px={4}
                      py={3}
                      isDisabled={loading}
                    />
                  </Box>

                  <Button
                    type="submit"
                    width="full"
                    size="lg"
                    py={3}
                    bg="blue.600"
                    color="white"
                    _hover={{ bg: 'blue.700' }}
                    display="flex"
                    alignItems="center"
                    gap={2}
                    isLoading={loading}
                    loadingText="Sending..."
                    spinnerPlacement="start"
                  >
                    {!loading && <FaPaperPlane />}
                    Send Message
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
