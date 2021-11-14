import React from "react";
import { Flex } from "@chakra-ui/react";
import { Header, Main } from "@components";

const Home: React.FC = () => {
  return (
    <>
      <Flex direction="column" minH="100vh">
        <Header />
        <Main />
      </Flex>
    </>
  );
};

export default Home;
