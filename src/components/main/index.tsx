import Head from "next/head";
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
  FormHelperText,
} from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";

export const Main: React.FC = () => {
  return (
    <>
      <Container maxW={"xl"} px={4}>
        <Heading
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={["3xl", "4xl"]}
          marginTop={[8, 12]}
          fontWeight="extrabold"
          as="h1"
          size="2xl"
          textAlign="center"
        >
          Get to know about your Future
        </Heading>
        <Box fontFamily="monospace" mt={8}>
          <FormControl>
            <VStack spacing={6}>
              <div style={{ width: "100%" }}>
                <FormLabel htmlFor="myName">Your Name</FormLabel>
                <Input
                  type="text"
                  id="myName"
                  focusBorderColor="purple.500"
                  placeholder="Name like rooben"
                  aria-describedby="My-Name"
                  size="lg"
                />
              </div>
              <div style={{ width: "100%" }}>
                <FormLabel htmlFor="yourPartner">Your Partner's Name</FormLabel>
                <Input
                  type="text"
                  id="yourPartner"
                  focusBorderColor="purple.500"
                  placeholder="Name like NE"
                  aria-describedby="Your-Partner"
                  size="lg"
                />
              </div>
            </VStack>
            <HStack direction="row" spacing={4} mt={8}>
              <Button colorScheme="gray" variant="solid" w="100%" size="lg">
                <HStack>
                  <Box w="24px">
                    <Image src="/images/love_Icon.png" alt="rooben" />
                  </Box>
                  <Text>Check your Fate</Text>
                </HStack>
              </Button>
              <Tooltip
                label="Restart!"
                placement="top"
                aria-label="Restart tooltip"
              >
                <IconButton
                  size="lg"
                  variant="outline"
                  aria-label="Reset"
                  icon={<RepeatIcon />}
                />
              </Tooltip>
            </HStack>
          </FormControl>

          <Box mt={12}>
            <Heading as="h2" size="sm" fontFamily="monospace">
              Result
            </Heading>
            <Box borderRadius="md" mt={4} mb={12}>
              <AspectRatio ratio={1}>
                <Image
                  src="/images/Friends.png"
                  width="502"
                  height="502"
                  alt=""
                />
              </AspectRatio>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};
