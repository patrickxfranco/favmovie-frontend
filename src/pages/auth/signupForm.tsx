import { FilePenLine } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { signUpSettings } from '@/settings.json';
import { zodResolver } from '@hookform/resolvers/zod';

const minUsernameCharactersLenght: number = signUpSettings.usernameRequired ? signUpSettings.minUsernameCharactersLenght : 0;
const minPasswordCharactersLenght: number = signUpSettings.passwordRequired ? signUpSettings.minPasswordCharactersLenght : 0;
const minFirstNameCharactersLenght: number = signUpSettings.firstNameRequired ? signUpSettings.minFirstNameCharactersLenght : 0;
const minLastNameCharactersLenght: number = signUpSettings.lastNameRequired ? signUpSettings.minLastNameCharactersLenght : 0;

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
        {signUpSettings.firstNameRequired === false && signUpSettings.lastNameRequired === false ? null : (
          <FormItem>Dados Pessoais</FormItem>
        )}
        <div className="flex flex-row gap-2 w-full">
          {signUpSettings.firstNameRequired ? (
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  {/* <FormLabel>Usuário</FormLabel> */}
                  <FormControl>
                    <Input className="h-11" disabled={!signUpSettings.firstNameRequired} placeholder="Primeiro nome" {...field} />
                  </FormControl>
                  {/* <FormDescription>Este é seu nome público</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          ) : null}
          {signUpSettings.lastNameRequired ? (
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full">
                  {/* <FormLabel>Usuário</FormLabel> */}
                  <FormControl>
                    <Input className="h-11" disabled={!signUpSettings.lastNameRequired} placeholder="Último nome" {...field} />
                  </FormControl>
                  {/* <FormDescription>Este é seu nome público</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          ) : null}
        </div>
        {signUpSettings.usernameRequired === false && signUpSettings.emailRequired === false ? null : (
          <FormItem className="mt-8">Acesso</FormItem>
        )}
        {signUpSettings.usernameRequired ? (
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Usuário</FormLabel> */}
                <FormControl>
                  <Input className="h-11" disabled={!signUpSettings.usernameRequired} placeholder="Usuário" {...field} />
                </FormControl>
                {/* <FormDescription>Este é seu nome público</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        ) : null}
        {signUpSettings.emailRequired ? (
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Usuário</FormLabel> */}
                <FormControl>
                  <Input className="h-11" disabled={!signUpSettings.emailRequired} placeholder="Email" {...field} />
                </FormControl>
                {/* <FormDescription>Este é seu nome público</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        ) : null}
        {signUpSettings.passwordRequired ? <FormItem className="mt-8">Senhas</FormItem> : null}
        {signUpSettings.passwordRequired ? (
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Senha</FormLabel> */}
                <FormControl>
                  <Input
                    className="h-11"
                    disabled={!signUpSettings.passwordRequired}
                    placeholder="Senha de acesso"
                    type="password"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>Este é seu nome público</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        ) : null}
        {signUpSettings.passwordRequired ? (
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Senha</FormLabel> */}
                <FormControl>
                  <Input
                    className="h-11"
                    disabled={!signUpSettings.passwordRequired}
                    placeholder="Confirmação da senha"
                    type="password"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>Este é seu nome público</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        ) : null}
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
                    className="text-amber-600 dark:text-amber-400 hover:underline underline-offset-4"
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
        <Button className="mt-4 w-full h-11" type="submit" disabled={!signUpSettings.signUpEnabled}>
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
    email: signUpSettings.emailRequired ? z.string().email('Este email não é válido') : undefined,
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
