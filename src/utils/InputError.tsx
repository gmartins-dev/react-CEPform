import errors from '../utils/errors.json';

interface IInputErrorProps {
  type: string;
  field: string;
}

export default function InputError({
  type,
  field,
}: IInputErrorProps) {
  // @ts-expect-error
  return <span>{errors[field][type]}</span>;
}
