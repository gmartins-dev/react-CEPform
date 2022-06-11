import * as yup from 'yup';

//https://github.com/jquense/yup
//https://blog.betrybe.com/desenvolvimento-web/yup/

export default yup.object().shape({
  cep: yup.number().positive().integer().required(),
  logradouro: yup.string().min(5).required(),
  numero: yup.string().min(1).required(),
  complemento: yup.string(),
  bairro: yup.string().min(2).required(),
  cidade: yup.string().min(4).required(),
  uf: yup.string().min(2).required(),
});
