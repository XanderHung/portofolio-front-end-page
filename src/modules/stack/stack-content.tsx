import { Heading, Stack, Text } from "@chakra-ui/react";
import StackItemContent from "./stack-item-content";
import Head from "next/head";

const stack = [
  {
    title: "Languages",
    badge: [
      {
        title: "C",
        color: "green",
      },
      {
        title: "C++",
        color: "blue",
      },
      {
        title: "GO",
        color: "red",
      },
      {
        title: "PHP",
        color: "yellow",
      },
      {
        title: "R",
        color: "cyan",
      },
      {
        title: "Java",
        color: "purple",
      },
      {
        title: "Javascript",
        color: "gray",
      },
    ],
  },
  {
    title: "Languages",
    badge: [
      {
        title: "C",
        color: "green",
      },
      {
        title: "C++",
        color: "blue",
      },
      {
        title: "GO",
        color: "red",
      },
      {
        title: "PHP",
        color: "yellow",
      },
      {
        title: "R",
        color: "cyan",
      },
      {
        title: "Java",
        color: "purple",
      },
      {
        title: "Javascript",
        color: "gray",
      },
    ],
  },
  {
    title: "Languages",
    badge: [
      {
        title: "C",
        color: "green",
      },
      {
        title: "C++",
        color: "blue",
      },
      {
        title: "GO",
        color: "red",
      },
      {
        title: "PHP",
        color: "yellow",
      },
      {
        title: "R",
        color: "cyan",
      },
      {
        title: "Java",
        color: "purple",
      },
      {
        title: "Javascript",
        color: "gray",
      },
    ],
  },
  {
    title: "Languages",
    badge: [
      {
        title: "C",
        color: "green",
      },
      {
        title: "C++",
        color: "blue",
      },
      {
        title: "GO",
        color: "red",
      },
      {
        title: "PHP",
        color: "yellow",
      },
      {
        title: "R",
        color: "cyan",
      },
      {
        title: "Java",
        color: "purple",
      },
      {
        title: "Javascript",
        color: "gray",
      },
    ],
  },
  {
    title: "Languages",
    badge: [
      {
        title: "C",
        color: "green",
      },
      {
        title: "C++",
        color: "blue",
      },
      {
        title: "GO",
        color: "red",
      },
      {
        title: "PHP",
        color: "yellow",
      },
      {
        title: "R",
        color: "cyan",
      },
      {
        title: "Java",
        color: "purple",
      },
      {
        title: "Javascript",
        color: "gray",
      },
    ],
  },
];

export default function StackContent() {
  return (
    <Stack>
      <Head>
        <title>Stack</title>
      </Head>
      <Heading fontSize="5xl" mb={3}>
        Stack
      </Heading>
      ;
      <Stack>
        <Text textAlign="justify">
          Before we talk about stacks, I want to make sure that we have the same
          mind. A stack is a technology or language that you use to build a
          website or mobile application. Below is a list of stacks that I have
          been practicing since I learned about programming in high school.
        </Text>
      </Stack>
      {stack.map((StackItem, index) => {
        return (
          <StackItemContent data={StackItem} key={`stack-item-${index}`} />
        );
      })}
    </Stack>
  );
}
