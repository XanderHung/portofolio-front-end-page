import {
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import ky from "ky";
import { useMemo } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const toast = useToast();
  function SuccessToast() {
    toast({
      title: "Success",
      description: "Your Contact Have Been Sent",
      position: "top-right",
      status: "success",
      duration: 900,
      isClosable: true,
    });
  }

  function ErrorToast(text: string) {
    toast({
      title: "Error",
      description: text,
      position: "top-right",
      status: "error",
      duration: 900,
      isClosable: true,
    });
  }

  const defaultValues = useMemo(
    () => ({ name: "", email: "", message: "" }),
    []
  );

  const {
    formState: { errors, submitCount, isSubmitting },
    ...methods
  } = useForm({ defaultValues });

  async function onSubmit(values: any) {
    try {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      const requestOptions = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(values, null, 2),
      };
      await ky(`${process.env.SERVER_ADDRESS}/contact`, requestOptions);
      SuccessToast();
      methods.reset();
    } catch (e: any) {
      const res = await e.response?.json();
      ErrorToast(res?.message);
    }
  }

  return (
    <Stack mt={10}>
      <Heading fontWeight="extrabold" fontSize="3xl">
        Contact Me 👋
      </Heading>
      <Stack border={"1px"} borderColor="gray.200" rounded="xl" p={7}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <HStack mb={5}>
            <VStack flex={1}>
              <FormControl isInvalid={!errors.name}>
                <HStack>
                  <FormLabel
                    mb={2}
                    mr={0}
                    htmlFor="name"
                    color={!!errors.name ? "red.300" : ""}
                  >
                    Name
                  </FormLabel>
                  <Text color={"red.300"} fontSize={20}>
                    *
                  </Text>
                </HStack>
                <Input
                  isInvalid={submitCount > 0 && !!errors.name}
                  id="name"
                  placeholder="Name"
                  {...methods.register("name", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />
              </FormControl>
            </VStack>
            <VStack flex={1}>
              <FormControl isInvalid={!!errors.email}>
                <HStack width="100%">
                  <FormLabel htmlFor="email" mr={0}>
                    Email
                  </FormLabel>
                  <Text color={"red.300"} fontSize={20}>
                    *
                  </Text>
                </HStack>
                <Input
                  id="email"
                  placeholder="Email"
                  {...methods.register("email", {
                    required: "This is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </FormControl>
            </VStack>
          </HStack>
          <FormLabel htmlFor="message">Message:</FormLabel>
          <Textarea
            id="message"
            placeholder="Email"
            {...methods.register("message", {
              required: "This is required",
            })}
          />
          {errors.message && (
            <FormErrorMessage>
              {errors.message?.message as any}
            </FormErrorMessage>
          )}
          <ButtonGroup variant="outline">
            <Button
              colorScheme="linkedin"
              mt={5}
              type="submit"
              isLoading={isSubmitting}
            >
              Submit
            </Button>
          </ButtonGroup>
        </form>
      </Stack>
    </Stack>
  );
}
