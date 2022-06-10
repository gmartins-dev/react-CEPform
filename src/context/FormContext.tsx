import React, {
  createContext,
  ReactNode,
  useState,
} from 'react';

interface IFormProps {
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

interface IContextProps {
  useForm: IFormProps;
  setUseForm: (useForm: IFormProps) => void;
}

export const FormContext = createContext<IContextProps>(
  {} as IContextProps,
);

export function FormContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [useForm, setUseForm] = useState<IFormProps>(
    {} as IFormProps,
  );

  return (
    <FormContext.Provider value={{ useForm, setUseForm }}>
      {children}
    </FormContext.Provider>
  );
}
