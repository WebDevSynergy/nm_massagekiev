import { Logo } from '@/components/ui';

export const Header: React.FC = () => {
  return (
    <header className="bg-emerald-400">
      <div className="container">
        <Logo variant="brown" />
        Header
      </div>
    </header>
  );
};
