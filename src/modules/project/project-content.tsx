import Card from "@/components/card-project";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  slice?: number;
}

export const data = [
  {
    title: "Portofolio",
    start: "2022",
    color: "gray",
    end: "Current",
    status: "Ongoing",
    description:
      "In this project, I'm learning about how to make a front end, build a UI/UX, design my own website, and for the next feature, I'll add API integration with the backend, a contact form, and make a blog. FYI, this is my first React and NextJS project, and I have loved React even though my knowledge of React is still superficial. But one day, I know I will master this and become a React expert.",
    picture: "/asset/project1.png",
    gitlab: "https://gitlab.com/Hunga453/portofolio-front-end",
  },
  {
    title: "PT. Bahtera Inti Indonesia",
    start: "2022",
    end: "Current",
    status: "Ongoing",
    color: "gray",
    description:
      "This is my project when I am working in Springkraf, managing and developing the Bahtera website. This company is a service provider for exports that is based in Medan. We helped them make a data warehouse so they could track their invoices and customer containers whereabouts. Here, I become a backend engineer and make a restful API for my front end. solving a problem and searching for a better solution. refactoring and refining the code that I have coded.",
    picture: "/asset/bii-logo-login.png",
  },
  {
    title: "Flower",
    start: "2020",
    end: "2020",
    color: "green",
    status: "Complete",
    description:
      "I have learned Laravel and implemented it since 2020. That time I took a course in web programming. In the laboratory project, I was required to make a flower shop, and here's the result. Maybe my github commit and code can still be refactored and refined. It's my first time using Github, so yeah.",
    picture: "/asset/laravel-2.svg",
    gitlab: "https://github.com/XanderHung/Flower",
  },
  {
    title: "Megamas Valutindo",
    start: "2023",
    end: "2023",
    status: "Completed",
    color: "green",
    description:
      "I got my first project from a friend. That time I got so happy because one of my dreams is to make my knowledge useful for my life or even get me some money. In this project, I make it with my friend Ritchie. He's one of the front-end engineers from my workplace, Springkraf, but currently he's quit. On this project, I learned a lot about React and NextJS, which inspired me to make my portfolio a much better version.",
    picture: "/asset/megamasweb.png",
    link: "https://www.megamasvalutindo.com",
  },
  {
    title: "Caroline Website",
    start: "2018",
    end: "2018",
    status: "Completed",
    color: "green",
    description:
      "This is a project for which I have made a requirement to be an IT developer in BINUS. This was also my first HTML project when I entered BINUS. I learned how to use CSS for styling and even make a Java script to add a check-in form for login or registration.",
    picture: "/asset/caronline.png",
  },
];

export default function ProjectContent(props: Props) {
  const { slice = data.length } = props;
  return (
    <>
      {slice == data.length ? (
        <Heading fontSize="5xl" mb={3}>
          Project
        </Heading>
      ) : (
        <Heading>Favorite Project 💻</Heading>
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
  );
}
