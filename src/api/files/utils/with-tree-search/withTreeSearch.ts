import type { FileDto } from '../../files-dtos.ts';

export function withTreeSearch(initialData: FileDto[], search: string): FileDto[] {
  return initialData.filter((child) => {
    // Check if the name contains search string
    // here it can either be folder or a file, since we search for both
    if (child.name.includes(search)) return true;

    if (child.children) {
      const foundInChildren = withTreeSearch(child.children, search);

      // If children have some of the matches,
      // change the children for whole structure
      // and accept item with truthy filter
      if (foundInChildren?.length) {
        child.children = foundInChildren;
        return true;
      }
    }

    return false;
  });
}
