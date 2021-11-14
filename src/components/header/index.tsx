import {
  Box,
  Flex,
  Button,
  Image,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        borderBottom="1px"
        borderColor={useColorModeValue("gray.100", "gray.600")}
        px={4}
        py={2}
      >
        <Flex
          maxW={"2xl"}
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          marginX={"auto"}
        >
          <Box w={["80px", "120px"]}>
            <Image src="/images/logo.png" alt="FLAMES Logo" />
          </Box>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Box>
    </>
  );
};
