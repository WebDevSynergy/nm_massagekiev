'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { createReviewSanity, sendMsgTelegram } from '@/actions';
import { makeTgReviewMsg } from '@/utils';

import { ReviewFormInputs } from './types';

export const ReviewForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ReviewFormInputs>();

  useFormPersist('contactForm', { watch, setValue });

  const onSubmit: SubmitHandler<ReviewFormInputs> = async ({
    author,
    review,
    contact,
  }) => {
    const newReview = {
      _type: 'review',
      author,
      review,
      contact,
    };

    const msg = makeTgReviewMsg({ author, review, contact });

    try {
      Promise.all([
        await sendMsgTelegram(msg),
        await createReviewSanity(newReview),
      ]);

      console.log('SUCCESS');

      reset();
      window.sessionStorage.removeItem('contactForm');
    } catch (error) {
      console.log('FAIL');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-5"
    >
      <input
        {...register('author', { required: true })}
        className="w-[300px]"
      />
      {errors.author && <span>This field is required</span>}

      <textarea
        {...register('review', { required: true })}
        className="w-[300px]"
      />
      {errors.review && <span>This field is required</span>}

      <input {...register('contact')} className="w-[300px]" />

      <button type="submit" className="block bg-blue-100 p-5">
        Залишити відгук
      </button>
    </form>
  );
};
