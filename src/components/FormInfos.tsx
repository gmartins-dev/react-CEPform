import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  VStack,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { FormContext } from '../context/FormContext';

export const FormInfos = () => {
  const { useForm } = useContext(FormContext);

  return (
    <Flex
      bg="gray.100"
      align="center"
      justify="center"
      h="100vh"
    >
      <Box
        bg="white"
        p={6}
        rounded="md"
        w={64}
        overflow="auto"
      >
        <VStack spacing={4} align="flex-start">
          <main>testeeeeeeeeeeboxxxxxxxxxx</main>
          <div>{useForm?.logradouro}</div>
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
      </Box>
    </Flex>
  );
};
