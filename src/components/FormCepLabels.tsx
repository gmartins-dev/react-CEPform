import { Field } from 'formik';
import { useFormCep } from './FormCepContext';

/* interface Props {
  handleOnBlur: () => void;
} */

const FormCepLabels: React.FC = () => {
  const { cep, setCep } = useFormCep;

  console.log('sdsadashdkjashd', { cep });

  return (
    <>
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
    </>
  );
};

export default FormCepLabels;
