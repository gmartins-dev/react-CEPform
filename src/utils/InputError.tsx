import errors from '../utils/errors.json';
import { Text } from '@chakra-ui/react';

interface IInputErrorProps {
  type: string;
  field: string;
}

export default function InputError({
  type,
  field,
}: IInputErrorProps) {
  // @ts-expect-error
  return (
    <Text as="mark" color="tomato" fontWeight="bold">
      {errors[field][type]}
    </Text>
  );
}
