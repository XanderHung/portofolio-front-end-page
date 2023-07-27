import { Badge, Box, Heading, Stack, Text } from "@chakra-ui/react";
import exp from "constants";

interface Props {
  data: Model[];
}

interface Model {
  title: string;
  description: string;
  start: string;
  end: string;
  status: string;
  color: string;
}

export default function ExperienceContent(props: Props) {
  const { data } = props;
  return (
    <Stack>
      <Heading>Experience 🎓</Heading>
      {data.map((experience, index) => {
        return (
          <Box borderWidth="1px" borderRadius="lg" key={`experience-${index}`}>
            <Box p={4}>
              <Box
                pt={2}
                display="flex"
                flexDir={{ base: "column", sm: "row" }}
              >
                <Text fontWeight="bold" mr={2}>
                  {experience.title}
                </Text>
                <Stack display="flex" flexDir="row" mt={{ base: "2", sm: "0" }}>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    py={1}
                  >
                    {experience.start} - {experience.end}
                  </Box>
                  <Badge
                    borderRadius="full"
                    px={2}
                    py={1}
                    colorScheme={experience.color}
                  >
                    {experience.status}
                  </Badge>
                </Stack>
              </Box>
            </Box>
            <Box px={4} pb={4} lineHeight="tight" textAlign="justify">
              <Text>{experience.description}</Text>
            </Box>
          </Box>
        );
      })}
    </Stack>
  );
}
