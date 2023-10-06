import { z } from 'zod';


export const schemaSignIn = z.object({
  username: z.string({ required_error: 'Введите имя пользователя' }).regex(/^[\w.@+-]+$/, { message: 'Только буквы, цифры и символы: @/./+/-/_/.' }).min(1, { message: 'Введите имя пользователя' }).max(255, 'Слишком большое имя пользователя'),
  email: z.string({ required_error: 'Введите почту' }).min(1, { message: 'Введите почту' }).email('Не правильный формат почты'),
  password: z.string({ required_error: 'Укажите пароль' }).min(1, { message: 'Укажите пароль' }),
  confirm: z.string({ required_error: 'Укажите пароль' }).min(1, { message: 'Укажите пароль' }),
}).refine((data) => data.password === data.confirm, {
  message: 'Пароли не совпадают',
  path: ['confirm'],
});

export type TSchemaSignIn = z.infer<typeof schemaSignIn>;
