import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';

import { LogIn } from 'lucide-react';

import { signInSettings } from '@/settings.json';

export function SignInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      remember: false,
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        {signInSettings.usernameRequired ? (
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Usuário</FormLabel> */}
                <FormControl>
                  <Input className="h-11" disabled={!signInSettings.usernameRequired} placeholder="Usuário" {...field} />
                </FormControl>
                {/* <FormDescription>Este é seu nome público</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        ) : null}
        {signInSettings.passwordRequired ? (
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Senha</FormLabel> */}
                <FormControl>
                  <Input className="h-11" disabled={!signInSettings.passwordRequired} placeholder="Senha" type="password" {...field} />
                </FormControl>
                {/* <FormDescription>Este é seu nome público</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        ) : null}
        {signInSettings.signInEnabled ? (
          <div className="flex flex-row justify-between">
            <FormField
              control={form.control}
              name="remember"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Senha</FormLabel> */}
                  <div className="flex flex-row items-center gap-2">
                    <FormControl>
                      <Checkbox id="remember" checked={field.value} onCheckedChange={field.onChange} ref={field.ref} />
                    </FormControl>
                    <FormDescription>
                      <label htmlFor="remember" className="hover:brightness-85 cursor-pointer">
                        Lembrar usuário
                      </label>
                    </FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormDescription>
              <Link to="#" className="hover:brightness-85">
                Esqueci minha senha
              </Link>
            </FormDescription>
          </div>
        ) : null}
        <Link to="/home">
          <Button className="mt-4 w-full h-11" disabled={!signInSettings.signInEnabled} type="submit">
            <LogIn />
            Acessar
          </Button>
        </Link>
      </form>
    </Form>
  );
}

const formSchema = z.object({
  username: z.string(),
  password: z.string(),
  remember: z.boolean().optional(),
});

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}
