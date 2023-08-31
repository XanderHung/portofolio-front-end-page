import { Heading, Stack, Text, useToast } from "@chakra-ui/react";
import StackItemContent from "./stack-item-content";
import Head from "next/head";
import ky from "ky";
import { useEffect, useState } from "react";
export default function StackContent() {
  const toast = useToast();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function exec() {
      try {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = {
          method: "GET",
          headers: headers,
        };
        const result = await ky(
          `${process.env.SERVER_ADDRESS}/stacks`,
          requestOptions
        );
        const json = (await result.json()) as any;
        setData(json);
      } catch (e: any) {
        const res = await e.response?.json();
        toast({
          title: "error",
          description: res?.message,
          position: "top-right",
          status: "error",
          duration: 900,
          isClosable: true,
        });
        setData([]);
      }
    }
    exec();
  }, []);
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
      {data.map((StackItem, index) => {
        return (
          <StackItemContent data={StackItem} key={`stack-item-${index}`} />
        );
      })}
    </Stack>
  );
}
