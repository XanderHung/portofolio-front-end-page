import { Heading, Stack, Text } from "@chakra-ui/react";
import StackItemContent from "./stack-item-content";
import Head from "next/head";

const stack = [
  {
    title: "Programming Languages",
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
    title: "Frontend",
    badge: [
      {
        title: "HTML",
        color: "red",
      },
      {
        title: "Next.js",
        color: "green",
      },
      {
        title: "CSS",
        color: "blue",
      },
      {
        title: "Js",
        color: "yellow",
      },
      {
        title: "React",
        color: "blue",
      },
      {
        title: "Bootstrap",
        color: "purple",
      },
      {
        title: "Chakra UI",
        color: "teal",
      },
    ],
  },
  {
    title: "Backend",
    badge: [
      {
        title: "Laravel",
        color: "red",
      },
      {
        title: "Gin",
        color: "blue",
      },
      {
        title: "nodejs",
        color: "green",
      },
      {
        title: "Firebase",
        color: "orange",
      },
      {
        title: "Mongo DB",
        color: "green",
      },
      {
        title: "Postgresql",
        color: "blue",
      },
      {
        title: "mysql",
        color: "blue",
      },
    ],
  },
  {
    title: "Design",
    badge: [
      {
        title: "Figma",
        color: "pink",
      },
      {
        title: "adobe XD",
        color: "purple",
      },
      {
        title: "visualPradigm",
        color: "red",
      },
      {
        title: "PhotoShop",
        color: "blue",
      },
    ],
  },
  {
    title: "Languages",
    badge: [
      {
        title: "Bahasa Indonesia",
        color: "gray",
      },
      {
        title: "English",
        color: "cyan",
      },
      {
        title: "Mandarin",
        color: "orange",
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
