import { TContact } from '@/components/base/ContactUsForm/schema';
import { TReview } from '@/components/base/ReviewForm/schema';

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
