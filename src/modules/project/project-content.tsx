import Card from "../../components/card-project";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import ky from "ky";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  slice?: number;
}

export default function ProjectContent(props: Props) {
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
          `${process.env.SERVER_ADDRESS}/projects`,
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

  const { slice = data.length } = props;
  return (
    <>
      {data.length > 0 ? (
        <>
          {slice == data.length ? (
            <Stack>
              <Head>
                <title>Project</title>
              </Head>
              <Heading fontSize="5xl" mb={3}>
                Project
              </Heading>
            </Stack>
          ) : (
            <Heading>My Project 💻</Heading>
          )}
          <Box
            display="flex"
            flexFlow={"row wrap"}
            justifyContent={"space-between"}
          >
            {data.slice(0, slice).map((value, index) => {
              return <Card key={`card-${index}`} data={value} />;
            })}
          </Box>
          {slice < data.length && (
            <Center>
              <Link href="/project">
                <Button fontSize="lg" rightIcon={<ChevronRightIcon />}>
                  See More
                </Button>
              </Link>
            </Center>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
