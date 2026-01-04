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

// Page-level container - fade & slide
const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.18, delayChildren: 0.12 },
    },
};

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

// We'll use motion.div wrappers around Chakra components to avoid wrapping Chakra's
// components directly with framer-motion's motion() which can trigger Chakra internals.

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const contactInfo = [
        { icon: FaEnvelope, label: 'Email', value: 'annahrimohammed@gmail.com', href: 'mailto:annahrimohammed@gmail.com' },
        { icon: FaLinkedin, label: 'LinkedIn', value: 'mohammed-annahri', href: 'https://www.linkedin.com/in/mohammed-annahri/' },
        { icon: FaGithub, label: 'GitHub', value: 'simopoza', href: 'https://github.com/simopoza' },
        { icon: FaPhone, label: 'Phone', value: '+212 653492047', href: 'tel:+212653492047' },
        { icon: FaMapMarkerAlt, label: 'Location', value: 'Morocco', href: null },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((s) => ({ ...s, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        setLoading(true);

        const payload = { ...formData };
        // optimistic UX: clear form immediately
        setFormData({ name: '', email: '', subject: '', message: '' });

        // send in background (fire-and-forget)
        try {
            await fetch('https://formsubmit.co/ajax/5ab425bedc2fd0b3db12155b97f4976b', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(payload),
            });
        } catch (err) {
            console.error('Error submitting form:', err);
        } finally {
            setLoading(false);
        }

        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <Box minH="100vh" pt={24} pb={20} px={{ base: 4, sm: 6, lg: 8 }}>
            <motion.div variants={pageVariants} initial="hidden" animate="show">
                <Container maxW="5xl">
                    <motion.div variants={sectionVariants}>
                        <Box textAlign="center" mb={16}>
                            <Heading mb={6} color="gray.900">Get In Touch</Heading>
                            <Text color="gray.600" maxW="2xl" mx="auto">
                                Have a project in mind or want to collaborate? I'd love to hear from you. Fill out the form below or reach out through any of the contact methods.
                            </Text>
                        </Box>
                    </motion.div>

                    <motion.div variants={sectionVariants}>
                        <SimpleGrid columns={{ base: 1, lg: 5 }} gap={12}>
                            <Box gridColumn={{ base: 'auto', lg: 'span 2' }}>
                                <Heading as="h2" size="lg" mb={6} color="gray.900">Contact Information</Heading>
                                <Stack spacing={4}>
                                    {contactInfo.map((info, i) => {
                                        const IconComp = info.icon;
                                        return (
                                            <motion.div key={info.label} initial="hidden" animate="show" variants={itemVariants} transition={{ delay: 0.08 * i }}>
                                                <Box bg="white" rounded="lg" p={4} boxShadow="sm" display="flex" alignItems="flex-start" _hover={{ boxShadow: 'md', transform: 'translateY(-2px)' }} style={{ transition: 'all 0.18s' }}>
                                                    <Box w={10} h={10} bg="blue.50" rounded="lg" display="flex" alignItems="center" justifyContent="center" mr={4} flexShrink={0}>
                                                        <Icon as={IconComp} color="#2563EB" boxSize={5} />
                                                    </Box>

                                                    <Box minW={0}>
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
                                                                maxW="100%"
                                                                overflowWrap="anywhere"
                                                                wordBreak="break-word"
                                                                whiteSpace="normal"
                                                            >
                                                                {info.value}
                                                            </Text>
                                                        ) : (
                                                            <Text color="gray.900" maxW="100%" overflowWrap="anywhere" wordBreak="break-word" whiteSpace="normal">{info.value}</Text>
                                                        )}
                                                    </Box>
                                                </Box>
                                            </motion.div>
                                        );
                                    })}
                                </Stack>
                            </Box>

                            <Box gridColumn={{ base: 'auto', lg: 'span 3' }}>
                                <motion.div>
                                    <Box bg="white" rounded="xl" p={8} boxShadow="sm">
                                        <Heading as="h2" size="lg" mb={6} color="gray.900">Send a Message</Heading>

                                        {submitted && (
                                            <motion.div initial={{ opacity: 0, scale: 0.98, y: -6 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.28 }}>
                                                <Box mb={6} p={4} bg="green.50" borderWidth={1} borderColor="green.200" color="green.700" rounded="lg">
                                                    <Text>Thank you for your message! I'll get back to you soon.</Text>
                                                </Box>
                                            </motion.div>
                                        )}

                                        <Box as="form" onSubmit={handleSubmit}>
                                            <Stack spacing={6}>
                                                {[
                                                    { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name', Component: Input },
                                                    { id: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com', Component: Input },
                                                    { id: 'subject', label: 'Subject', type: 'text', placeholder: "What's this about?", Component: Input },
                                                    { id: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell me about your project...', Component: Textarea },
                                                ].map((field, idx) => {
                                                    const FieldComponent = field.Component;
                                                    return (
                                                        <motion.div key={field.id} initial="hidden" animate="show" variants={itemVariants} transition={{ delay: 0.08 * idx }}>
                                                            <Box>
                                                                <Text as="label" htmlFor={field.id} mb={2} display="block" color="gray.700">{field.label}</Text>

                                                                <FieldComponent
                                                                    id={field.id}
                                                                    name={field.id}
                                                                    type={field.type !== 'textarea' ? field.type : undefined}
                                                                    rows={field.type === 'textarea' ? 6 : undefined}
                                                                    value={formData[field.id]}
                                                                    onChange={handleChange}
                                                                    required
                                                                    placeholder={field.placeholder}
                                                                    borderColor="gray.300"
                                                                    _focus={{ ring: 2, ringColor: 'blue.500', borderColor: 'transparent' }}
                                                                    _hover={{ borderColor: 'gray.400' }}
                                                                    resize={field.type === 'textarea' ? 'none' : undefined}
                                                                    px={4}
                                                                    py={3}
                                                                    disabled={loading}
                                                                />
                                                            </Box>
                                                        </motion.div>
                                                    );
                                                })}

                                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.3 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                                    <Button type="submit" width="full" size="lg" py={3} bg="blue.600" color="white" _hover={{ bg: 'blue.700' }} display="flex" alignItems="center" gap={3} isLoading={loading} loadingText="Sending..." spinnerPlacement="start">
                                                        {!loading && <FaPaperPlane />}
                                                        Send Message
                                                    </Button>
                                                </motion.div>
                                            </Stack>
                                        </Box>
                                    </Box>
                                </motion.div>
                            </Box>
                        </SimpleGrid>
                    </motion.div>
                </Container>
            </motion.div>
        </Box>
    );
}

