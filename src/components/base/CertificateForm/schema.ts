import * as z from 'zod';

import data from '@/data/certificate-form.json';

const { validation } = data.form;
const {
  userName,
  phoneNumber,
  userMessage,
  common,
  certificateCost,
  massageType,
  massageQuantity,
} = validation;

const commonMsg = {
  required_error: common.required,
  invalid_type_error: common.required,
};

export const certificateSchema = z
  .object({
    userName: z
      .string(commonMsg)
      .trim()
      .min(userName.minLength.value, userName.minLength.message)
      .max(userName.maxLength.value, userName.maxLength.message)
      .regex(RegExp(userName.format.reg), userName.format.message),

    phoneNumber: z
      .string(commonMsg)
      .min(phoneNumber.required.value, phoneNumber.required.message)
      .trim()
      .min(phoneNumber.minLength.value, phoneNumber.minLength.message)
      .max(phoneNumber.maxLength.value, phoneNumber.maxLength.message),

    userMessage: z
      .string(commonMsg)
      .trim()
      .max(userMessage.maxLength.value, userMessage.maxLength.message)
      .regex(RegExp(userMessage.format.reg), userMessage.format.message),
  })
  .and(
    z.union([
      z.object({
        certificateCost: z.coerce
          .number(commonMsg)
          .int()
          .positive()
          .min(certificateCost.min.value, certificateCost.min.message),
        massageType: z.undefined(),
        massageQuantity: z.undefined(),
      }),
      z.object({
        massageType: z
          .string(commonMsg)
          .min(massageType.minLength.value, massageType.minLength.message)
          .max(massageType.maxLength.value, massageType.maxLength.message),
        massageQuantity: z.coerce
          .number(commonMsg)
          .int()
          .positive()
          .min(massageQuantity.min.value, massageQuantity.min.message)
          .max(massageQuantity.max.value, massageQuantity.max.message),
        certificateCost: z.undefined(),
      }),
    ]),
  );

export type TCertificate = z.infer<typeof certificateSchema>;
