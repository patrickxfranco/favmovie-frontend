import type React from 'react';
import { LogIn } from 'lucide-react';
import { Link } from 'react-router';

import { Button } from '@/components/ui/button';
import { SignUpForm } from '@/pages/auth/signupForm';

export function SignUp(): React.ReactElement {
  return (
    <div>
      <Link to="/sign-in">
        <Button variant="secondary" className="top-12 right-12 absolute">
          <LogIn />
          Login
        </Button>
      </Link>
      <div className="flex flex-col mb-10 w-100">
        <h1 className="font-black text-[32px] uppercase">Cadastrar-se</h1>
        <span className="font-light text-muted-foreground">para começar a gerenciar seus filmes e séries favoritos.</span>
      </div>
      <SignUpForm />
    </div>
  );
}
