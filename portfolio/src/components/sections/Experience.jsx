import { Heading, Text, VStack, HStack } from "@chakra-ui/react";
import MotionBox from "../ui/MotionBox";
import { sectionAnimation } from "../ui/sectionAnimation";
import experience from "../../data/experience";

const Experience = () => {
  return (
    <MotionBox
      as="section"
      id="experience"
      py={20}
      px={6}
      maxW="900px"
      mx="auto"
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Heading as="h2" size="xl" mb={10} textAlign="center" color="brand.500">
        Experience
      </Heading>

      <VStack spacing={8} align="stretch">
        {experience.map((item, index) => (
          <MotionBox
            key={index}
            p={6}
            borderWidth="1px"
            borderRadius="lg"
            whileHover={{ y: -4 }}
          >
            <HStack justify="space-between" mb={2} flexWrap="wrap">
              <Heading as="h3" size="md" color="brand.500">
                {item.role}
              </Heading>
              <Text fontSize="sm" color="gray.500">
                {item.duration}
              </Text>
            </HStack>

            <Text fontWeight="bold" mb={2}>
              {item.company} · {item.location}
            </Text>

            <VStack align="start" spacing={2}>
              {item.description.map((line, idx) => (
                <Text key={idx}>• {line}</Text>
              ))}
            </VStack>
          </MotionBox>
        ))}
      </VStack>
    </MotionBox>
  );
};

export default Experience;
