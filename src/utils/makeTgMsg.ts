import { TContact } from '@/components/base/ContactUsForm/schema';
import { TReview } from '@/components/base/ReviewForm/schema';
import { TMassage } from '@/types';
import { SubscriptionFormData } from '@/components/base/SubscriptionForm/types';

export const makeTgReviewMsg = ({
  userName,
  phoneNumber,
  userMessage,
}: TReview) => {
  return `<b>На сайті опубліковано новий відгук!</b>\n\n<b>Автор: ${userName}</b>\n<b>Контакт: ${phoneNumber}</b>\n\n<b>Відгук: ${userMessage}</b>`;
};

export const makeTgContactMsg = ({
  userName,
  phoneNumber,
  userMessage,
}: TContact) => {
  return `<b>Новий запис клієнта на сайті!</b>\n\n<b>Автор: ${userName}</b>\n<b>Контакт: ${phoneNumber}</b>${userMessage && `\n\n<b>Повідомлення: ${userMessage}`}</b>`;
};

export const makeTgCertificateMsg = (data: TContact & TMassage) => {
  const {
    userName,
    phoneNumber,
    userMessage,
    massageQuantity,
    massageType,
    promoCost,
    totalCost,
  } = data;

  return `<b>Нове замовлення послуги на сайті!</b>\n
  <b>Тип масажу:</b> ${massageType}\n
  <b>Тип кількість:</b> ${massageQuantity}\n
  ${totalCost && `<b>Вартістьь замовлення:</b> ${totalCost}`}\n
  ${promoCost && `<b>Акційна ціна:</b> ${promoCost}`}\n
  <b>Автор:</b> ${userName}\n
  <b>Контакт:</b> ${phoneNumber}\n 
  ${userMessage && `<b>Повідомлення:</b> ${userMessage}`}`;
};

export const makeTgOrderMsg = (
  data: TContact & {
    certificateCost: number;
  },
) => {
  const { userName, phoneNumber, userMessage, certificateCost } = data;

  return `<b>Нове замовлення сертифікату на сайті!</b>\n\n
  <b>Вартість сертифікату:</b> ${certificateCost}\n
  <b>Автор:</b> ${userName}\n
  <b>Контакт:</b> ${phoneNumber}\n 
  ${userMessage && `<b>Повідомлення:</b> ${userMessage}`}`;
};

export const makeTgSubscriptionMsg = (data: SubscriptionFormData) => {
  const { email } = data;

  return `<b>Нова підписка на розсилку:</b> ${email}\n}`;
};
