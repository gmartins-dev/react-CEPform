import * as Yup from 'yup';

//https://github.com/jquense/yup
//https://blog.betrybe.com/desenvolvimento-web/yup/

export default Yup.object().shape({
  name: Yup.string().min(2).required(),
  email: Yup.string().email().required(),
});
