import * as yup from 'yup';

import { schema } from './schema';

export type FormData = yup.InferType<typeof schema>;
