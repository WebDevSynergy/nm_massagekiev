import { ReviewMsgData, ContactMsgData } from './types';

export const makeTgReviewMsg = ({ author, contact, review }: ReviewMsgData) => {
  return `<b>На сайті опубліковано новий відгук!</b>\n\n<b>Автор: ${author}</b>\n<b>Контакт: ${contact}</b>\n\n<b>Відгук: ${review}</b>`;
};

export const makeTgContactMsg = ({
  userName,
  phoneNumber,
  userMessage,
}: ContactMsgData) => {
  return `<b>Новий запис клієнта на сайті!</b>\n\n<b>Автор: ${userName}</b>\n<b>Контакт: ${phoneNumber}</b>${userMessage && `\n\n<b>Повідомлення: ${userMessage}`}</b>`;
};
