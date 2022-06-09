import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import api from '../services/api';

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
            <label>Cep</label>
            <Field
              name="cep"
              type="text"
              onBlur={(event) =>
                handleOnBlur(event, setFieldValue)
              }
            />
          </div>
          <div className="form-control-group">
            <label>Logradouro</label>
            <Field name="logradouro" type="text" />
          </div>
          <div className="form-control-group">
            <label>Número</label>
            <Field name="numero" type="text" />
          </div>
          <div className="form-control-group">
            <label>Complemento</label>
            <Field name="complemento" type="text" />
          </div>
          <div className="form-control-group">
            <label>Bairro</label>
            <Field name="bairro" type="text" />
          </div>
          <div className="form-control-group">
            <label>Cidade</label>
            <Field name="cidade" type="text" />
          </div>
          <div className="form-control-group">
            <label>Estado</label>
            <Field name="uf" type="text" />
          </div>
          <Link to="/form-infos">
            <button type="submit" disabled={!isValid}>
              Enviar
            </button>
          </Link>
        </Form>
      )}
    />
  );
}
