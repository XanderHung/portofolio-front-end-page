import { Badge, Heading, Stack } from "@chakra-ui/react";

interface Props {
  data: {
    title: string;
    badge: badgeModel[];
  };
}

interface badgeModel {
  title: string;
  color: string;
}

export default function StackItemContent(props: Props) {
  const { data } = props;
  return (
    <Stack my={5}>
      <Heading fontSize="lg">{data.title}</Heading>
      <Stack display="flex" flexDir="row">
        {data.badge.map((badge, index) => {
          return (
            <Badge
              key={`badge-${index}`}
              rounded="md"
              fontWeight="semibold"
              colorScheme={badge.color}
              p={1}
              mx={1}
            >
              {badge.title}
            </Badge>
          );
        })}
      </Stack>
    </Stack>
  );
}
