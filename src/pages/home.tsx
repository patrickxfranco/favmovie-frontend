import type React from 'react';

import { Button } from '@/components/ui/button';

export function Home(): React.ReactElement {
  return (
    <div className="p-4">
      <Button variant="default" className="w-50">
        Botão de Teste
      </Button>
    </div>
  );
}
