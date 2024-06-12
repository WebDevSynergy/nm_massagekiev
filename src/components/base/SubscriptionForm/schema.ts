import * as yup from 'yup';

export const schema = yup
  .object({
    email: yup
      .string()
      .required('Це поле обов’язкове')
      .matches(
        /^(?!@|-)[A-Za-z0-9_.-]+@[A-Za-z0-9-]+(?:.[A-Za-z0-9]+)*$/,
        'Не вірний формат',
      ),
  })
  .required();
