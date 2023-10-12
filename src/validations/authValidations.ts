import { z } from 'zod'

const userNameMinLength: number = 2
const passwordMinLength: number = 6

export const CreateUserSchema = z.object({
  email:  z.string().email().trim().toLowerCase(),
  name:  z.string().trim().min(userNameMinLength, { message: `Name must be ${userNameMinLength} or more characters long` }),
  password: z.string().trim().min(passwordMinLength, { message: `Password must be ${passwordMinLength} or longer` }),
  confirmPassword: z.string().trim().min(passwordMinLength, { message: `Password must be ${passwordMinLength} or longer` }),
}).refine((schema) => schema.password === schema.confirmPassword, {
  message: 'The passwords did not match',
  path: ['confirmPassword'],
})

export type CreateUserType = z.infer<typeof CreateUserSchema>
