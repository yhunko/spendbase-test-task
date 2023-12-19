import type { FileDto } from '../../files-dtos.ts';

export function withTreeSearch(initialData: FileDto[], search: string): FileDto[] {
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
