export interface Comic {
  id: number;
  title: string;
  author: string[];
  genre: string[];
  digitalAvailable: boolean;
  printAvailable: boolean | number;
  isOnHiatus?: boolean;
}
