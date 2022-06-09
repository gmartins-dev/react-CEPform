import { Formik, Form, Field } from 'formik';
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

export default function FormCep() {
  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
  }

  function handleOnBlur(event, setFieldValue) {
    const { value } = event.target;

    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      return;
    }
    getData(cep, setFieldValue);
  }

  async function getData(cep, setFieldValue) {
    const { data } = await api.get(`${cep}/json`);
    setFieldValue('logradouro', data.logradouro);
    setFieldValue('bairro', data.bairro);
    setFieldValue('cidade', data.localidade);
    setFieldValue('uf', data.uf);
  }

  return (
    <Formik
      onSubmit={onSubmit}
      validateOnMount
      initialValues={{
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        uf: '',
      }}
      render={({ isValid, setFieldValue }) => (
        <Form>
          <div className="form-control-group">
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
            />
          </div>
          <div className="form-control-group">
            <FormLabel>Logradouro</FormLabel>
            <Field
              as={Input}
              name="logradouro"
              type="text"
              colorScheme="twitter"
              variant="filled"
            />
          </div>
          <div className="form-control-group">
            <FormLabel>Número</FormLabel>
            <Field
              as={Input}
              name="numero"
              type="text"
              colorScheme="twitter"
              variant="filled"
            />
          </div>
          <div className="form-control-group">
            <FormLabel>Complemento</FormLabel>
            <Field
              as={Input}
              name="complemento"
              type="text"
              colorScheme="twitter"
              variant="filled"
            />
          </div>
          <div className="form-control-group">
            <FormLabel>Bairro</FormLabel>
            <Field
              as={Input}
              name="bairro"
              type="text"
              colorScheme="twitter"
              variant="filled"
            />
          </div>
          <div className="form-control-group">
            <FormLabel>Cidade</FormLabel>
            <Field
              as={Input}
              name="cidade"
              type="text"
              colorScheme="twitter"
              variant="filled"
            />
          </div>
          <div className="form-control-group">
            <FormLabel>Estado</FormLabel>
            <Field
              as={Input}
              name="uf"
              type="text"
              colorScheme="twitter"
              variant="filled"
            />
          </div>
          <Link to="/form-infos">
            <Button
              colorScheme="twitter"
              type="submit"
              disabled={!isValid}
            >
              Enviar
            </Button>
          </Link>
        </Form>
      )}
    />
  );
}
