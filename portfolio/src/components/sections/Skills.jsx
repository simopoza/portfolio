import { Heading, SimpleGrid, VStack, Text } from "@chakra-ui/react";
import MotionBox from "../ui/MotionBox";
import { sectionAnimation } from "../ui/sectionAnimation";
import skills from "../../data/skills";

const Skills = () => {
  return (
    <MotionBox
      as="section"
      id="skills"
      py={20}
      px={6}
      maxW="1000px"
      mx="auto"
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Heading as="h2" size="xl" mb={10} textAlign="center" color="brand.500">
        Skills
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <SkillBlock title="Frontend" items={skills.frontend} />
        <SkillBlock title="Backend" items={skills.backend} />
        <SkillBlock title="Databases" items={skills.databases} />
        <SkillBlock title="Tools & Environment" items={skills.tools} />
      </SimpleGrid>
    </MotionBox>
  );
};

const SkillBlock = ({ title, items }) => (
  <VStack
    align="start"
    p={6}
    borderWidth="1px"
    borderRadius="lg"
    spacing={3}
  >
    <Heading as="h3" size="md" color="brand.500">
      {title}
    </Heading>
    {items.map((skill, index) => (
      <Text key={index}>• {skill}</Text>
    ))}
  </VStack>
);

export default Skills;
