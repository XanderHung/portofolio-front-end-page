"use client";
import {
  Button,
  HStack,
  Icon,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import HeaderButton from "./header-button";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Head from "next/head";

export const navLinks = [
  {
    title: "Project",
    url: "/project",
  },
  {
    title: "Stack",
    url: "/stack",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack alignItems="center" mt={5} maxW="4xl">
      <Head>
        <link rel="icon" type="image/png" href="name.png" />
      </Head>
      <Stack flex={1}>
        <Stack width={"fit-content"}>
          <Link href="/">
            <Button
              bgColor="inherit"
              fontSize="md"
              _hover={{
                textDecoration: "underline",
                backgroundColor: "whiteAlpha.200",
              }}
            >
              <Text>Hung</Text>
            </Button>
          </Link>
        </Stack>
      </Stack>
      <HStack>
        {navLinks.map((navLink, index) => {
          return (
            <HeaderButton
              key={`navbar-${index}`}
              title={navLink.title}
              link={navLink.url}
            />
          );
        })}
        <Button bgColor="inherit" onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </HStack>
    </HStack>
  );
}
