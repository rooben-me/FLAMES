import { useState } from "react";
import {
  Box,
  Heading,
  Container,
  VStack,
  HStack,
  Button,
  IconButton,
  Input,
  FormLabel,
  FormControl,
  Image,
  Tooltip,
  Text,
  AspectRatio,
  useColorModeValue,
  useColorMode,
  Skeleton,
  Link,
} from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/toast";
import splitbee from "@splitbee/web";

export const Main: React.FC = () => {
  const toast = useToast();
  const { colorMode } = useColorMode();

  splitbee.init();
  splitbee.track("Click CTA");

  const [yourName, setYourName] = useState("");
  const [yourPartner, setyourPartner] = useState("");
  const [result, setResult] = useState("");
  var flames = [
    "Friends",
    "Love",
    "Affection",
    "Marriage",
    "Enemy",
    "Siblings",
  ];

  const handleSubmit = (event: any) => {
    event.preventDefault();

    var lengthInput = yourName.length + yourPartner.length;
    while (flames.length != 1) {
      flames = flames.splice(lengthInput % 6, 1);
    }
    switch (flames[0]) {
      case "Friends":
        setResult("Friends");
        break;
      case "Love":
        setResult("Love");
        break;
      case "Affection":
        setResult("Affection");
        break;
      case "Marriage":
        setResult("Marriage");
        break;
      case "Enemy":
        setResult("Enemy");
        break;
      case "Siblings":
        setResult("Siblings");
        break;
      default:
        break;
    }
  };

  // const handleReset = () => {
  //   if (yourName != "" || yourPartner != "") {
  //     setYourName("");
  //     setyourPartner("");
  //     toast({
  //       title: "Your name's have been reset",
  //       position: "bottom-right",
  //       variant: "subtle",
  //       status: "success",
  //       isClosable: true,
  //     });
  //   }
  // };

  return (
    <>
      <Container maxW={"xl"} px={4}>
        <Heading
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={["3xl", "5xl"]}
          marginTop={[8, 12]}
          fontWeight="extrabold"
          as="h1"
          size="2xl"
          textAlign="center"
        >
          Get to know about your Future
        </Heading>

        <Box fontFamily="monospace" mt={8}>
          <form onSubmit={handleSubmit}>
            <VStack spacing={6}>
              <div style={{ width: "100%" }}>
                <FormControl isRequired>
                  <FormLabel htmlFor="myName">Your Name</FormLabel>
                  <Input
                    type="text"
                    focusBorderColor="purple.500"
                    placeholder="Name like rooben"
                    aria-describedby="Your-Name"
                    size="lg"
                    onChange={(event) => setYourName(event.currentTarget.value)}
                  />
                </FormControl>
              </div>
              <div style={{ width: "100%" }}>
                <FormControl isRequired>
                  <FormLabel htmlFor="myPartner">Your Partner's Name</FormLabel>
                  <Input
                    type="text"
                    focusBorderColor="purple.500"
                    placeholder="Name like Ne"
                    aria-describedby="My-Partner"
                    size="lg"
                    onChange={(event) =>
                      setyourPartner(event.currentTarget.value)
                    }
                  />
                </FormControl>
              </div>
            </VStack>

            {/* <HStack direction="row" spacing={4} mt={8}> */}
            <Button
              type="submit"
              colorScheme="gray"
              variant="solid"
              w="100%"
              size="lg"
              mt={8}
              data-splitbee-event="Click CTA"
            >
              <HStack>
                <Box w="24px">
                  <Image src="/images/love_Icon.png" alt="rooben" />
                </Box>
                <Text>Check your Fate</Text>
              </HStack>
            </Button>
            {/* <Tooltip
                label="Restart!"
                placement="top"
                aria-label="Restart tooltip"
              >
                <IconButton
                  size="lg"
                  variant="outline"
                  aria-label="Reset"
                  onClick={() => {
                    handleReset();
                  }}
                  icon={<RepeatIcon />}
                />
              </Tooltip> */}
            {/* </HStack> */}
          </form>
        </Box>
        <Box mt={12}>
          <Heading as="h2" size="sm" fontFamily="monospace">
            Result
          </Heading>
          {result != "" ? (
            <Box borderRadius="md" mt={4} mb={12}>
              <AspectRatio ratio={1}>
                <Image
                  src={`/images/${result}.png`}
                  width="502"
                  height="502"
                  alt={`${result}`}
                />
              </AspectRatio>
            </Box>
          ) : (
            <Box
              borderRadius="md"
              border="2px"
              borderColor={useColorModeValue("gray.300", "gray.600")}
              bg={useColorModeValue("gray.200", "gray.700")}
              mt={4}
              mb={12}
            >
              <Skeleton
                borderRadius="2px"
                fadeDuration={2}
                speed={4}
                height="502px"
              />
            </Box>
          )}
        </Box>
        <Link href="https://rooben.webflow.io/" isExternal>
          <Box w="50%" mx="auto" mb={4} mt={12}>
            <Image
              src={`${
                colorMode === "light"
                  ? "/images/Signature_Black.png"
                  : "/images/Signature_White.png"
              }`}
              alt="Rooben's Signature"
            />
          </Box>
        </Link>
      </Container>
    </>
  );
};
