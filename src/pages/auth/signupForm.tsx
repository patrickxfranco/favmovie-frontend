import { FilePenLine } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';

const minUsernameCharactersLenght: number = 2;
const minPasswordCharactersLenght: number = 6;
const minFirstNameCharactersLenght: number = 4;
const minLastNameCharactersLenght: number = 4;

export function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <FormItem>Dados Pessoais</FormItem>
        <div className="flex flex-row gap-2 w-full">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                {/* <FormLabel>Usuário</FormLabel> */}
                <FormControl>
                  <Input className="h-11" placeholder="Primeiro nome" {...field} />
                </FormControl>
                {/* <FormDescription>Este é seu nome público</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                {/* <FormLabel>Usuário</FormLabel> */}
                <FormControl>
                  <Input className="h-11" placeholder="Último nome" {...field} />
                </FormControl>
                {/* <FormDescription>Este é seu nome público</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormItem className="mt-8">Acesso</FormItem>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Usuário</FormLabel> */}
              <FormControl>
                <Input className="h-11" placeholder="Usuário" {...field} />
              </FormControl>
              {/* <FormDescription>Este é seu nome público</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Usuário</FormLabel> */}
              <FormControl>
                <Input className="h-11" placeholder="Email" {...field} />
              </FormControl>
              {/* <FormDescription>Este é seu nome público</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormItem className="mt-8">Senhas</FormItem>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Senha</FormLabel> */}
              <FormControl>
                <Input className="h-11" placeholder="Senha de acesso" type="password" {...field} />
              </FormControl>
              {/* <FormDescription>Este é seu nome público</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Senha</FormLabel> */}
              <FormControl>
                <Input className="h-11" placeholder="Confirmação da senha" type="password" {...field} />
              </FormControl>
              {/* <FormDescription>Este é seu nome público</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="acceptTerms"
          render={({ field }) => (
            <FormItem className="mt-8">
              {/* <FormLabel>Senha</FormLabel> */}
              <div className="flex flex-row items-center gap-2">
                <FormControl>
                  <Checkbox id="remember" checked={field.value} onCheckedChange={field.onChange} ref={field.ref} />
                </FormControl>
                <FormDescription className="hover:brightness-85">
                  Ao cadastrar, aceito os{' '}
                  <Link
                    className="text-amber-300 dark:text-amber-400 hover:underline underline-offset-4"
                    target="_blank"
                    to="/terms-of-use"
                  >
                    termos de uso
                  </Link>
                </FormDescription>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-4 w-full h-11" type="submit">
          <FilePenLine />
          Cadastrar
        </Button>
      </form>
    </Form>
  );
}

const formSchema = z
  .object({
    firstName: z.string().min(minFirstNameCharactersLenght, `O nome deve conter ao menos ${minFirstNameCharactersLenght} caracteres`),
    lastName: z.string().min(minLastNameCharactersLenght, `O sobrenome deve conter ao menos ${minLastNameCharactersLenght} caracteres`),
    username: z
      .string()
      .min(minUsernameCharactersLenght, `O usuário deve conter no mínimo ${minUsernameCharactersLenght} caracteres`)
      .max(50),
    email: z.string().email('Este email não é válido'),
    password: z
      .string()
      .min(minPasswordCharactersLenght, `A senha deve conter no mínimo ${minPasswordCharactersLenght} caracteres`)
      .max(50),
    confirmPassword: z.string(),
    acceptTerms: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}
