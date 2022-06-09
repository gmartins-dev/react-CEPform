import { Formik, Form } from 'formik';
import api from '../services/api';
import FormCepLabels from './FormCepLabels';

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
          <FormCepLabels />
          <button type="submit" disabled={!isValid}>
            Enviar
          </button>
        </Form>
      )}
    />
  );
}
