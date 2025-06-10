import { Link } from 'react-router';

import { Button } from '../ui/button';

export function HeaderButton({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Button asChild size="icon" variant="ghost" className="w-12 h-12">
      <Link to={to}>{children}</Link>
    </Button>
  );
}
