import { ChevronRightIcon } from "@chakra-ui/icons";
import { Button, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Profile() {
  return (
    <Stack
      display="flex"
      flexDir={{ base: "column-reverse", md: "row" }}
      alignItems={{ base: "center", md: "default" }}
      justifyContent="space-between"
    >
      <Stack maxWidth="xl" flex={1}>
        <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }}>
          Hello, I Am Alexander Hung.
        </Heading>
        <Text mt="5" mb="3" justifyItems="center" textAlign="justify">
          I&#39;m a Graduate Of Bina Nusantara University CS in 2022 🎓. I&#39;m
          passionate about Web Development, with a particular focus on Backend
          Engineering. Feel free to reach out.
        </Text>
        <HStack>
          <Button
            as="a"
            target="_blank"
            mr="2"
            href="Profile.pdf"
            rightIcon={<ChevronRightIcon />}
          >
            CV
          </Button>
          <Button
            as="a"
            rightIcon={<ChevronRightIcon />}
            target="_blank"
            href="https://gitlab.com/Hunga453"
          >
            Gitlab
          </Button>
        </HStack>
      </Stack>
      <Stack
        maxW="230px"
        mb={{ base: "10", md: "0" }}
        ml={{ base: "0", md: "10" }}
      >
        <Image src="asset/alex.jpg" borderRadius="full"></Image>
      </Stack>
    </Stack>
  );
}
