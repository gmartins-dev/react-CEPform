import { useNavigate } from 'react-router-dom';
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
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../services/schema';
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

interface IRecivedProps {
  cep: string;
  bairro: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
}

export default function FormCep() {
  const { setUseForm } = useContext(FormContext);
  const { register, handleSubmit, watch, reset } =
    useForm<IFormModel>({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormModel> = (data) => {
    setUseForm(data);
    navigate('/form-infos');
  };

  function handleOnBlur(handleUserCep: string) {
    const cep = handleUserCep?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      return;
    }
    getData(cep);
  }

  async function getData(cep: string) {
    const { data } = await api.get(`${cep}/json`);
    console.log(data);
    const {
      bairro,
      logradouro,
      uf,
      localidade,
    }: IRecivedProps = data;

    reset({ uf, bairro, logradouro, cidade: localidade });
  }

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <FormLabel>Cep</FormLabel>
                <Input
                  {...register('cep')}
                  onBlur={() => {
                    handleOnBlur(watch('cep'));
                    console.log(watch('cep'));
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Logradouro</FormLabel>
                <Input {...register('logradouro')} />
              </FormControl>
              <FormControl>
                <FormLabel>Número</FormLabel>
                <Input {...register('numero')} />
              </FormControl>
              <FormControl>
                <FormLabel>Complemento</FormLabel>
                <Input {...register('complemento')} />
              </FormControl>
              <FormControl>
                <FormLabel>Bairro</FormLabel>
                <Input {...register('bairro')} />
              </FormControl>
              <FormControl>
                <FormLabel>Cidade</FormLabel>
                <Input {...register('cidade')} />
              </FormControl>
              <FormControl>
                <FormLabel>Estado</FormLabel>
                <Input {...register('uf')} />
              </FormControl>

              <Button
                colorScheme="twitter"
                type="submit"
                width="full"
                marginTop="15px"
              >
                Enviar
              </Button>
            </form>
          </VStack>
        </Box>
      </Flex>
      {/* <FormInfos data={formInfos} /> */}
    </>
  );
}
