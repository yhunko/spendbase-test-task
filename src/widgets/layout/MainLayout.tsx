import type { FC, PropsWithChildren } from 'react';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return <main className="flex min-h-screen items-center justify-center">{children}</main>;
};
