import { Link } from 'react-router-dom';
import { Button, Flex, VStack } from '@chakra-ui/react';

export const FormInfos = () => {
  return (
    <VStack bgColor="gray.100" height="100vh">
      <Flex
        direction="column"
        maxW="450px"
        maxH="500px"
        borderRadius="8px"
        bgColor="white"
        margin="auto"
        marginTop="30px"
      >
        <VStack
          p="16px"
          gap="16px"
          marginY="64px"
          align="flex-start"
          maxW="450px"
          minW="200px"
          h="100%"
          w="100%"
          overflow="auto"
        >
          <main>testeeeeeeeeeeboxxxxxxxxxx</main>
        </VStack>
        <Link to="/">
          <Button
            colorScheme="twitter"
            type="submit"
            width="full"
            marginTop="15px"
          >
            Voltar
          </Button>
        </Link>
      </Flex>
    </VStack>
  );
};
