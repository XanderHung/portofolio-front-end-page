import { Footer, Header } from "../components";
import { ChakraProvider, Container, Stack } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

export const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="4xl">
        <Stack flexDir="column" minH="99vh" alignItems="stretch">
          <Header />
          <Stack as="section" width="full" mt="16" flex={1}>
            <Component {...pageProps} />
          </Stack>
          <Footer />
        </Stack>
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
