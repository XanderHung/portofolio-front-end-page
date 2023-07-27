interface Props {
  title: string;
  link: string;
}

import { Box, Button, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function HeaderButton(props: Props) {
  const { title } = props;
  return (
    <Link href={props.link}>
      <Button
        bgColor="inherit"
        p={{ base: 1, md: 4 }}
        fontSize="md"
        _hover={{
          textDecoration: "underline",
          backgroundColor: "whiteAlpha.200",
        }}
      >
        {title}
      </Button>
    </Link>
  );
}
