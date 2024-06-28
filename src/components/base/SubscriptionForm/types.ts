import * as yup from 'yup';

import { schema } from './schema';

export type SubscriptionFormData = yup.InferType<typeof schema>;
