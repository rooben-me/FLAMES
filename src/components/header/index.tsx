import { ReactNode } from "react";
import {
  Box,
  Flex,
  Button,
  Image,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        borderBottom="1px"
        borderColor={useColorModeValue("gray.100", "gray.900")}
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
