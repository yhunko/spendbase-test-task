import { faker } from '@faker-js/faker';

import type { FileDto } from './files-dtos.ts';
import type { GetFilesParams } from './files-params-types.ts';

faker.seed(0);

function generateChild(): FileDto {
  return {
    _id: faker.string.uuid(),
    name: faker.system.filePath(),
    children: faker.helpers.maybe(() =>
      faker.helpers.multiple(() => ({
        _id: faker.string.uuid(),
        name: faker.system.fileName(),
      })),
    ),
  };
}

function generateChildren(): FileDto[] | undefined {
  return faker.helpers.multiple(
    () => ({
      _id: faker.string.uuid(),
      name: faker.system.filePath(),
      children: faker.helpers.maybe(() => faker.helpers.multiple(generateChild)),
    }),
    {
      count: faker.number.int({
        min: 1,
        max: 20,
      }),
    },
  );
}

function withTreeSearch(initialData: FileDto[], search: string): FileDto[] {
  return initialData.filter((child) => {
    if (child.name.includes(search)) return true;

    if (child.children) {
      const foundInChildren = withTreeSearch(child.children, search);

      if (foundInChildren?.length) {
        child.children = foundInChildren;
        return true;
      }
    }

    return false;
  });
}

const filesData = Array.from({ length: 10 })
  .fill({})
  .map(() => {
    return {
      _id: faker.string.uuid(),
      name: faker.system.directoryPath(),
      children: faker.helpers.maybe(generateChildren),
    };
  });

export abstract class FilesApi {
  public static async getFiles(params: GetFilesParams): Promise<FileDto[]> {
    const initialData = filesData; // Mock for apiClient.get('/BE/v1/files')...

    if (params.search) return withTreeSearch(initialData, params.search ?? '');

    return initialData;
  }
}
