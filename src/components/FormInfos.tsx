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
          <p>
            <b>CEP: </b>
            {useForm?.cep}
          </p>
          <p>
            <b>Logradouro: </b>
            {useForm?.logradouro}
          </p>
          <p>
            <b>Número: </b>
            {useForm?.numero}
          </p>
          <p>
            <b>Complemento: </b>
            {useForm?.complemento}
          </p>
          <p>
            <b>Bairro: </b>
            {useForm?.bairro}
          </p>
          <p>
            <b>Cidade: </b>
            {useForm?.cidade}
          </p>
          <p>
            <b>Estado: </b>
            {useForm?.uf}
          </p>
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
