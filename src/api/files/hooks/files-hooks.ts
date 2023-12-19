import { useQuery } from '@tanstack/react-query';

import { FilesApi } from '../files-api.ts';
import type { GetFilesParams } from '../files-params-types.ts';

export const useGetFiles = (params: GetFilesParams) =>
  useQuery({
    queryKey: ['files', params],
    queryFn: () => FilesApi.getFiles(params),
  });
