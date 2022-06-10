import { Formik, Form, Field, useFormik } from 'formik';
import { Link } from 'react-router-dom';
import api from '../services/api';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

import { useContext } from 'react';
import { FormContext } from '../context/FormContext';

interface IFormModel {
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export default function FormCep() {
  const { setUseForm, useForm } = useContext(FormContext);
  const formik = useFormik({
    initialValues: {
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    },
    onSubmit: (values) => {},
  });

  function onSubmit({
    logradouro,
    bairro,
    cep,
    cidade,
    complemento,
    numero,
    uf,
  }: IFormModel) {
    setUseForm({
      logradouro: 'asssd',
      bairro: 'asssd',
      cep: 'asssd',
      cidade: 'asssd',
      complemento: 'asssd',
      numero: 'asssd',
      uf: 'asssd',
    });
    console.log('SUBMIT', useForm);
  }

  // function handleOnBlur(event, setFieldValue) {
  //   const { value } = event.target;

  //   const cep = value?.replace(/[^0-9]/g, '');

  //   if (cep?.length !== 8) {
  //     return;
  //   }
  //   getData(cep, setFieldValue);
  // }

  // async function getData(cep, setFieldValue) {
  //   const { data } = await api.get(`${cep}/json`);
  //   setFieldValue('logradouro', data.logradouro);
  //   setFieldValue('bairro', data.bairro);
  //   setFieldValue('cidade', data.localidade);
  //   setFieldValue('uf', data.uf);
  // }

  return (
    <>
      <Flex
        bg="gray.100"
        align="center"
        justify="center"
        h="100vh"
      >
        <Box bg="white" p={6} rounded="md" w={64}>
          <VStack spacing={4} align="flex-start">
            <Form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>Cep</FormLabel>
                <Field
                  as={Input}
                  colorScheme="twitter"
                  variant="filled"
                  name="cep"
                  type="text"
                  onBlur={(event) =>
                    handleOnBlur(event, setFieldValue)
                  }
                  onChange={formik.handleChange}
                  value={formik.values.cep}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Logradouro</FormLabel>
                <Field
                  as={Input}
                  name="logradouro"
                  type="text"
                  colorScheme="twitter"
                  variant="filled"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Número</FormLabel>
                <Field
                  as={Input}
                  name="numero"
                  type="text"
                  colorScheme="twitter"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.numero}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Complemento</FormLabel>
                <Field
                  as={Input}
                  name="complemento"
                  type="text"
                  colorScheme="twitter"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.complemento}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Bairro</FormLabel>
                <Field
                  as={Input}
                  name="bairro"
                  type="text"
                  colorScheme="twitter"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.bairro}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Cidade</FormLabel>
                <Field
                  as={Input}
                  name="cidade"
                  type="text"
                  colorScheme="twitter"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.cidade}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Estado</FormLabel>
                <Field
                  as={Input}
                  name="uf"
                  type="text"
                  colorScheme="twitter"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.uf}
                />
              </FormControl>

              <Button
                disabled={!formik.isValid}
                colorScheme="twitter"
                type="submit"
                width="full"
                marginTop="15px"
              >
                Enviar
              </Button>
            </Form>
          </VStack>
        </Box>
      </Flex>
      {/* <FormInfos data={formInfos} /> */}
    </>
  );
}
