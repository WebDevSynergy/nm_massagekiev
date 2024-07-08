import * as z from 'zod';

import data from '@/data/review-form.json';

const { validation } = data.form;
const { userName, phoneNumber, userMessage, common } = validation;

const commonMsg = {
  required_error: common.required,
  invalid_type_error: common.required,
};

export const reviewSchema = z.object({
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
    .min(userMessage.minLength.value, userMessage.minLength.message)
    .max(userMessage.maxLength.value, userMessage.maxLength.message),
});

export type TReview = z.infer<typeof reviewSchema>;
