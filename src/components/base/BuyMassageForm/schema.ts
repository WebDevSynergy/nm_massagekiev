import * as z from 'zod';

import data from '@/data/certificate-form.json';

const { validation } = data.form;
const { userName, phoneNumber, userMessage, common } = validation;

const commonMsg = {
  required_error: common.required,
  invalid_type_error: common.required,
};

export const buyCertificateSchema = z.object({
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
    .regex(RegExp(userMessage.format.reg), userMessage.format.message)
    .optional(),
});

export type TBuyCertificate = z.infer<typeof buyCertificateSchema>;
