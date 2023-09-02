import { z } from 'zod';


export const schemaAuth = z.object({
  email: z.string({ required_error: 'Укажите почту' }).min(1, { message: 'Укажите почту' }).email('Не правильный формат почты'),
  password: z.string({ required_error: 'Необходимо ввести пароль' }).min(1, { message: 'Необходимо ввести пароль' }),
});

export type TSchemaAuth = z.infer<typeof schemaAuth>;
