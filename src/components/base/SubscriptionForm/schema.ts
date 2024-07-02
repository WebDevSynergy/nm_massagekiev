import * as yup from 'yup';

export const schema = yup
  .object({
    email: yup
      .string()
      .required('Це поле обов’язкове')
      .matches(
        /^(?!.*[@.-]{2})[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        'Не вірний формат',
      ),
  })
  .required();
