import * as yup from 'yup';

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required()
    .max(10),
  lastName: yup
    .string()
    .required()
    .max(10),
  email: yup
    .string()
    .required()
    .email(),
  pets: yup.array().of(
    yup.object({
      name: yup.string().required()
    })
  )
})

export default validationSchema;