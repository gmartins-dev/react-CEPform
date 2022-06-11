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
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../utils/schema';
import { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import InputError from '../utils/InputError';

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
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IFormModel>({
    resolver: yupResolver(schema),
  });
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
    const {
      bairro,
      logradouro,
      uf,
      localidade,
    }: IRecivedProps = data;

    reset({ uf, bairro, logradouro, cidade: localidade });
  }

  function onError(error: any) {
    console.log('erro: ', error);
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
            <form
              onSubmit={handleSubmit(onSubmit, onError)}
            >
              <FormControl>
                <FormLabel>Cep</FormLabel>
                <Input
                  {...register('cep')}
                  onBlur={() => {
                    handleOnBlur(watch('cep'));
                  }}
                />
                {errors?.cep?.type && (
                  <InputError
                    type={errors.cep.type}
                    field="cep"
                  />
                )}
              </FormControl>
              <FormControl>
                <FormLabel>Logradouro</FormLabel>
                <Input {...register('logradouro')} />
                {errors?.logradouro?.type && (
                  <InputError
                    type={errors.logradouro.type}
                    field="logradouro"
                  />
                )}
              </FormControl>
              <FormControl>
                <FormLabel>Número</FormLabel>
                <Input {...register('numero')} />
                {errors?.numero?.type && (
                  <InputError
                    type={errors.numero.type}
                    field="numero"
                  />
                )}
              </FormControl>
              <FormControl>
                <FormLabel>Complemento</FormLabel>
                <Input {...register('complemento')} />
                {errors?.complemento?.type && (
                  <InputError
                    type={errors.complemento.type}
                    field="complemento"
                  />
                )}
              </FormControl>
              <FormControl>
                <FormLabel>Bairro</FormLabel>
                <Input {...register('bairro')} />
                {errors?.bairro?.type && (
                  <InputError
                    type={errors.bairro.type}
                    field="bairro"
                  />
                )}
              </FormControl>
              <FormControl>
                <FormLabel>Cidade</FormLabel>
                <Input {...register('cidade')} />
                {errors?.cidade?.type && (
                  <InputError
                    type={errors.cidade.type}
                    field="cidade"
                  />
                )}
              </FormControl>
              <FormControl>
                <FormLabel>Estado</FormLabel>
                <Input {...register('uf')} />
                {errors?.uf?.type && (
                  <InputError
                    type={errors.uf.type}
                    field="uf"
                  />
                )}
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
    </>
  );
}
