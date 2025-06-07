import type React from 'react';
import { Link } from 'react-router';

import { Button } from '@/components/ui/button';
import { SignInForm } from '@/pages/auth/signinForm';

export function SignIn(): React.ReactElement {
  return (
    <div>
      <Link to="/sign-up">
        <Button variant="secondary" className="top-12 right-12 absolute">
          Cadastrar-se
        </Button>
      </Link>
      <div className="flex flex-col mb-10 w-100">
        <h1 className="font-black text-[32px] uppercase">Entrar</h1>
        <span className="font-light text-muted-foreground">para começar a gerenciar seus filmes e séries favoritos.</span>
      </div>
      <SignInForm />
    </div>
  );
}
