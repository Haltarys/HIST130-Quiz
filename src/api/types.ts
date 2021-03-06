export type ID = string | number;

export class Chapter {
  id: ID;
  title: string;
  subtitle: string;
  period: string;
  pageNumber: number;
}

export class Definition {
  id: ID;
  term: string;
  htmlTerm?: string;
  pageNumber: number;
  text: string;
  regex: string;
  chapterId: ID;
}
