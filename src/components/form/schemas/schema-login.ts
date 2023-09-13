import { z } from 'zod';


export const schemaLogin = z.object({
  email: z.string({ required_error: 'Укажите почту' }).min(1, { message: 'Укажите почту' }).email('Не правильный формат почты'),
  password: z.string({ required_error: 'Необходимо ввести пароль' }).min(1, { message: 'Необходимо ввести пароль' }),
});

export type TSchemaLogin = z.infer<typeof schemaLogin>;
