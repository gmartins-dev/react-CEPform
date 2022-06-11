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
  return (
    <Text as="mark" color="tomato" fontWeight="bold">
      // @ts-expect-error
      {errors[field][type]}
    </Text>
  );
}
