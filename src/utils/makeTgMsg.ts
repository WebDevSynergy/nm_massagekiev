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
  return `<b>Запит на консультацію!</b>\n\n<b>Клієнт: ${userName}</b>\n<b>Телефон: ${phoneNumber}</b>${userMessage && `\n\n<b>Повідомлення: ${userMessage}`}</b>`;
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

  return `<b>Замовлення сертифікату!</b>\n
  <b>Послуга:</b> ${massageType}
  <b>Кількість:</b> ${massageQuantity}
  ${totalCost && `<b>Сума(без знижки):</b> ${totalCost}грн`}
  ${promoCost && `<b>Ціна сертифікату(зі знижкою):</b> ${promoCost}грн`}\n
  <b>Клієнт:</b> ${userName}
  <b>Телефон:</b> ${phoneNumber}\n 
  ${userMessage && `<b>Повідомлення:</b> ${userMessage}`}`;
};

export const makeTgBuyMsg = (data: TContact & TMassage) => {
  const {
    userName,
    phoneNumber,
    userMessage,
    massageQuantity,
    massageType,
    promoCost,
    totalCost,
  } = data;

  console.log('massageQuantity', massageQuantity);

  return `<b>Замовлення ${massageQuantity > 1 ? 'абонементу' : 'послуги'}!</b>\n
  <b>Послуга:</b> ${massageType}
  <b>Кількість:</b> ${massageQuantity}
  ${totalCost && `<b>Сума(без знижки):</b> ${totalCost}грн`}
  ${promoCost && `<b>Сума замовлення (зі знижкою):</b> ${promoCost}грн`}\n
  <b>Клієнт:</b> ${userName}
  <b>Телефон:</b> ${phoneNumber}\n 
  ${userMessage && `<b>Повідомлення:</b> ${userMessage}`}`;
};

export const makeTgOrderMsg = (
  data: TContact & {
    certificateCost: number;
  },
) => {
  const { userName, phoneNumber, userMessage, certificateCost } = data;

  return `<b>Замовлення сертифікату!</b>\n
  <b>Сертифікат на суму:</b> ${certificateCost}грн\n
  <b>Клієнт:</b> ${userName}
  <b>Телефон:</b> ${phoneNumber}\n 
  ${userMessage && `<b>Повідомлення:</b> ${userMessage}`}`;
};

export const makeTgSubscriptionMsg = (data: SubscriptionFormData) => {
  const { email } = data;

  return `<b>Нова підписка на розсилку:</b> ${email}`;
};
