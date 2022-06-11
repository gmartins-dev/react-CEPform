import { Text } from '@chakra-ui/react';

const errors = {
  cep: { required: 'Informe o seu CEP.' },
  logradouro: { required: 'Informe o logradouro.' },
  numero: { required: 'Informe o número.' },
  complemento: { required: 'Informe o número.' },
  bairro: { required: 'Informe o bairro.' },
  cidade: { required: 'Informe a cidade.' },
  uf: { required: 'Informe o estado.' },
};

type ErrorsType =
  | 'cep'
  | 'logradouro'
  | 'numero'
  | 'complemento'
  | 'bairro'
  | 'cidade'
  | 'uf';

interface IInputErrorProps {
  field: ErrorsType;
}

export default function InputError({
  field,
}: IInputErrorProps) {
  return (
    <Text as="mark" color="tomato" fontWeight="bold">
      {errors[field].required}
    </Text>
  );
}
