import {
  Button,
  Heading,
  Stack,
  createIcon,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import Profile from "./profile-content";
import ProjectContent from "../project/project-content";
import ExperienceContent from "./expreience-content";
import Head from "next/head";
import { useEffect, useState } from "react";
import ContactForm from "./contact-form";
import ky from "ky";

export const ChakraIcon = createIcon({
  path: (
    <path d="M 12 0 C 5.352 0 0 5.352 0 12 s 5.352 12 12 12 s 12 -5.352 12 -12 S 18.648 0 12 0 Z m 2.8 4.333 c 0.13 -0.004 0.248 0.136 0.171 0.278 l -3.044 5.58 a 0.187 0.187 0 0 0 0.164 0.276 h 5.26 c 0.17 0 0.252 0.207 0.128 0.323 l -9.22 8.605 c -0.165 0.154 -0.41 -0.063 -0.278 -0.246 l 4.364 -6.021 a 0.187 0.187 0 0 0 -0.151 -0.296 H 6.627 a 0.187 0.187 0 0 1 -0.131 -0.32 l 8.18 -8.123 a 0.182 0.182 0 0 1 0.125 -0.056 Z" />
  ),
});

export const NextJsIcon = createIcon({
  path: (
    <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z" />
  ),
});

export const LaravelIcon = createIcon({
  viewBox: "0 0 510 510",
  path: (
    <path d="M504.4,115.83a5.72,5.72,0,0,0-.28-.68,8.52,8.52,0,0,0-.53-1.25,6,6,0,0,0-.54-.71,9.36,9.36,0,0,0-.72-.94c-.23-.22-.52-.4-.77-.6a8.84,8.84,0,0,0-.9-.68L404.4,55.55a8,8,0,0,0-8,0L300.12,111h0a8.07,8.07,0,0,0-.88.69,7.68,7.68,0,0,0-.78.6,8.23,8.23,0,0,0-.72.93c-.17.24-.39.45-.54.71a9.7,9.7,0,0,0-.52,1.25c-.08.23-.21.44-.28.68a8.08,8.08,0,0,0-.28,2.08V223.18l-80.22,46.19V63.44a7.8,7.8,0,0,0-.28-2.09c-.06-.24-.2-.45-.28-.68a8.35,8.35,0,0,0-.52-1.24c-.14-.26-.37-.47-.54-.72a9.36,9.36,0,0,0-.72-.94,9.46,9.46,0,0,0-.78-.6,9.8,9.8,0,0,0-.88-.68h0L115.61,1.07a8,8,0,0,0-8,0L11.34,56.49h0a6.52,6.52,0,0,0-.88.69,7.81,7.81,0,0,0-.79.6,8.15,8.15,0,0,0-.71.93c-.18.25-.4.46-.55.72a7.88,7.88,0,0,0-.51,1.24,6.46,6.46,0,0,0-.29.67,8.18,8.18,0,0,0-.28,2.1v329.7a8,8,0,0,0,4,6.95l192.5,110.84a8.83,8.83,0,0,0,1.33.54c.21.08.41.2.63.26a7.92,7.92,0,0,0,4.1,0c.2-.05.37-.16.55-.22a8.6,8.6,0,0,0,1.4-.58L404.4,400.09a8,8,0,0,0,4-6.95V287.88l92.24-53.11a8,8,0,0,0,4-7V117.92A8.63,8.63,0,0,0,504.4,115.83ZM111.6,17.28h0l80.19,46.15-80.2,46.18L31.41,63.44Zm88.25,60V278.6l-46.53,26.79-33.69,19.4V123.5l46.53-26.79Zm0,412.78L23.37,388.5V77.32L57.06,96.7l46.52,26.8V338.68a6.94,6.94,0,0,0,.12.9,8,8,0,0,0,.16,1.18h0a5.92,5.92,0,0,0,.38.9,6.38,6.38,0,0,0,.42,1v0a8.54,8.54,0,0,0,.6.78,7.62,7.62,0,0,0,.66.84l0,0c.23.22.52.38.77.58a8.93,8.93,0,0,0,.86.66l0,0,0,0,92.19,52.18Zm8-106.17-80.06-45.32,84.09-48.41,92.26-53.11,80.13,46.13-58.8,33.56Zm184.52,4.57L215.88,490.11V397.8L346.6,323.2l45.77-26.15Zm0-119.13L358.68,250l-46.53-26.79V131.79l33.69,19.4L392.37,178Zm8-105.28-80.2-46.17,80.2-46.16,80.18,46.15Zm8,105.28V178L455,151.19l33.68-19.4v91.39h0Z" />
  ),
});

export const PostgersIcon = createIcon({
  path: (
    <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z" />
  ),
});

export const GolangIcon = createIcon({
  viewBox: "0 0 650 510",
  path: (
    <path d="M400.1 194.8C389.2 197.6 380.2 199.1 371 202.4C363.7 204.3 356.3 206.3 347.8 208.5L347.2 208.6C343 209.8 342.6 209.9 338.7 205.4C334 200.1 330.6 196.7 324.1 193.5C304.4 183.9 285.4 186.7 267.7 198.2C246.5 211.9 235.6 232.2 235.9 257.4C236.2 282.4 253.3 302.9 277.1 306.3C299.1 309.1 316.9 301.7 330.9 285.8C333 283.2 334.9 280.5 337 277.5V277.5L337 277.5C337.8 276.5 338.5 275.4 339.3 274.2H279.2C272.7 274.2 271.1 270.2 273.3 264.9C277.3 255.2 284.8 239 289.2 230.9C290.1 229.1 292.3 225.1 296.1 225.1H397.2C401.7 211.7 409 198.2 418.8 185.4C441.5 155.5 468.1 139.9 506 133.4C537.8 127.8 567.7 130.9 594.9 149.3C619.5 166.1 634.7 188.9 638.8 218.8C644.1 260.9 631.9 295.1 602.1 324.4C582.4 345.3 557.2 358.4 528.2 364.3C522.6 365.3 517.1 365.8 511.7 366.3C508.8 366.5 506 366.8 503.2 367.1C474.9 366.5 449 358.4 427.2 339.7C411.9 326.4 401.3 310.1 396.1 291.2C392.4 298.5 388.1 305.6 382.1 312.3C360.5 341.9 331.2 360.3 294.2 365.2C263.6 369.3 235.3 363.4 210.3 344.7C187.3 327.2 174.2 304.2 170.8 275.5C166.7 241.5 176.7 210.1 197.2 184.2C219.4 155.2 248.7 136.8 284.5 130.3C313.8 124.1 341.8 128.4 367.1 145.6C383.6 156.5 395.4 171.4 403.2 189.5C405.1 192.3 403.8 193.9 400.1 194.8zM48.3 200.4C47.05 200.4 46.74 199.8 47.36 198.8L53.91 190.4C54.53 189.5 56.09 188.9 57.34 188.9H168.6C169.8 188.9 170.1 189.8 169.5 190.7L164.2 198.8C163.6 199.8 162 200.7 161.1 200.7L48.3 200.4zM1.246 229.1C0 229.1-.3116 228.4 .3116 227.5L6.855 219.1C7.479 218.2 9.037 217.5 10.28 217.5H152.4C153.6 217.5 154.2 218.5 153.9 219.4L151.4 226.9C151.1 228.1 149.9 228.8 148.6 228.8L1.246 229.1zM75.72 255.9C75.1 256.8 75.41 257.7 76.65 257.7L144.6 258C145.5 258 146.8 257.1 146.8 255.9L147.4 248.4C147.4 247.1 146.8 246.2 145.5 246.2H83.2C81.95 246.2 80.71 247.1 80.08 248.1L75.72 255.9zM577.2 237.9C577 235.3 576.9 233.1 576.5 230.9C570.9 200.1 542.5 182.6 512.9 189.5C483.9 196 465.2 214.4 458.4 243.7C452.8 268 464.6 292.6 487 302.6C504.2 310.1 521.3 309.2 537.8 300.7C562.4 287.1 575.8 268 577.4 241.2C577.3 240 577.3 238.9 577.2 237.9z" />
  ),
});

interface Model {
  title: string;
  description: string;
  start: string;
  end: string;
  status: string;
  color: string;
}

export default function HomeContent() {
  const toast = useToast();
  const [study, setStudy] = useState<Model[]>([
    { title: "", description: "", start: "", end: "", status: "", color: "" },
  ]);
  useEffect(() => {
    async function exec() {
      try {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const result = await ky.get(
          `${process.env.SERVER_ADDRESS}/experiences`
        );
        const json = (await result.json()) as Model[];
        setStudy(json);
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
        setStudy([]);
      }
    }
    exec();
  }, []);
  const fill = useColorModeValue("black", "white");
  return (
    <Stack>
      <Head>
        <title>Home</title>
      </Head>
      <Profile />
      <Stack mt="16" alignItems="center">
        <Heading as="h2" fontSize="3xl">
          My Current Tech Stack:
        </Heading>
        <Stack display="flex" flexDir="row" mt={5}>
          <ChakraIcon
            fill={fill}
            w={{ base: 8, md: 14 }}
            h={{ base: 8, md: 14 }}
            m={2}
            _hover={{ fill: "teal.400" }}
          />
          <NextJsIcon
            fill={fill}
            w={{ base: 8, md: 14 }}
            h={{ base: 8, md: 14 }}
            m={2}
          />
          <LaravelIcon
            fill={fill}
            w={{ base: 8, md: 14 }}
            h={{ base: 8, md: 14 }}
            m={2}
            _hover={{ fill: "red" }}
          />
          <PostgersIcon
            fill={fill}
            w={{ base: 8, md: 14 }}
            h={{ base: 8, md: 14 }}
            m={2}
          />
          <GolangIcon
            fill={fill}
            w={{ base: 10, md: 16 }}
            h={{ base: 8, md: 14 }}
            m={2}
            _hover={{ fill: "cyan.300" }}
          />
        </Stack>
      </Stack>
      <Button
        mx="auto"
        as="a"
        w="fit-content"
        mb={16}
        p={0}
        mt={16}
        color="blue.400"
        href="#project"
      >
        <ArrowDownIcon w={8} h={8} />
      </Button>
      <Stack id="project">
        <ProjectContent slice={4} />
      </Stack>
      {study.length > 0 ? <ExperienceContent data={study} /> : <></>}
      <ContactForm />
    </Stack>
  );
}
