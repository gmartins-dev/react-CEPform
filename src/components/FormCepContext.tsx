import { useContext, createContext, useState } from 'react';

interface OutputContext {
  children: React.ReactNode;
}

const FormCepContext = createContext();

const FormCepProvider: React.FC<OutputContext> = ({
  children,
}) => {
  const [cep, setCep] = useState<string>(
    'Eu sou o cep do contexto',
  );

  return (
    <FormCepContext.Provider value={{ cep, setCep }}>
      {children}
    </FormCepContext.Provider>
  );
};

export const useFormCep = () => {
  const context = useContext(FormCepContext);
  if (!context)
    throw new Error(
      'useFormCep must be used within a FormCepProvider',
    );
  const { cep, setCep } = context;
  return { cep, setCep };
};

export default FormCepProvider;
