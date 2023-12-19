import type { FC } from 'react';

import { clsx } from 'clsx';

import type { FileDto } from '@api/files/files-dtos.ts';

type FileItemProps = {
  data?: FileDto;
  className?: string;
  open?: boolean;
};

export const TreeItem: FC<FileItemProps> = ({ open, data, className }) => {
  if (!data) return;

  const isFolder = !!data.children?.length;

  return (
    <details open={open} className={clsx('group cursor-default px-2 py-1', isFolder && 'cursor-pointer', className)}>
      <summary className={clsx(!data.children && 'list-none')}>{data.name}</summary>
      {data?.children?.map((folder) => <TreeItem key={folder._id} data={folder} className="ml-2" />)}
    </details>
  );
};
