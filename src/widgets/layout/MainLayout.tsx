import type { FC, PropsWithChildren } from 'react';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return <main className="flex items-center justify-center">{children}</main>;
};
