export type FileDto = {
  _id: string;
  name: string;
  children?: FileDto[];
};
