import { ReviewMsgData } from './types';

export const makeTgReviewMsg = ({ author, contact, review }: ReviewMsgData) => {
  return `<b>На сайті залишили новий відгук!</b>\n\n<b>Автор: ${author}</b>\n<b>Контакт: ${contact}</b>\n\n<b>Відгук: ${review}</b>\n\n<b>*Потрібно підтвердити публікацію в адмінпанелі</b>`;
};
