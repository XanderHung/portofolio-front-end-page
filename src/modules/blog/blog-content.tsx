import { Box, Center, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { motion } from "framer-motion";

export default function BlogContent() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Heading fontSize="5xl">Blog</Heading>
      <Center as={"b"}>
        <Box
          as={motion.div}
          fontSize={"4xl"}
          drag="y"
          dragConstraints={{ top: -100, bottom: 100 }}
          transition="5s linear"
        >
          Coming Soon
        </Box>
      </Center>
    </>
  );
}
