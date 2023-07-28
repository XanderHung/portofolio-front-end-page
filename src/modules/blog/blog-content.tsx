import { Center, Heading } from "@chakra-ui/react";
import Head from "next/head";

export default function BlogContent() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Heading fontSize="5xl">Blog</Heading>
      <Center as={"b"} fontSize={"4xl"}>
        Coming Soon
      </Center>
    </>
  );
}
