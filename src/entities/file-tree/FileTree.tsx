import type { FC, ChangeEventHandler } from 'react';
import { useState, useCallback } from 'react';

import { useGetFiles } from '@api/files/hooks/files-hooks.ts';

import { TreeItem } from './TreeItem.tsx';

export const FileTree: FC = () => {
  const [search, setSearch] = useState('');

  const filesQuery = useGetFiles({
    search,
  });

  const handleSearch: ChangeEventHandler<HTMLInputElement> = useCallback(({ target: { value } }) => {
    setSearch(value);
  }, []);

  return (
    <div className="h-96 max-h-full w-96 max-w-full">
      <input value={search} onChange={handleSearch} className="w-1/2 rounded-md border-2" placeholder="Search..." />

      <div className="flex flex-col overflow-auto">
        {filesQuery.data?.map((folder) => <TreeItem open={!!search} key={folder._id} data={folder} />)}
      </div>
    </div>
  );
};
