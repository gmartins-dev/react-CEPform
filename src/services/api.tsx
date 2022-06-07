import axios from 'axios';

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export default api;

// const res = await API.get(`${cep}/json`)
//   .then((res) => res.json())
//   .then((data) => {
//     setFieldValue('logradouro', data.logradouro);
//     setFieldValue('bairro', data.bairro);
//     setFieldValue('cidade', data.localidade);
//     setFieldValue('uf', data.uf);
//   });
