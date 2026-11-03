export interface Comic {
  id: number;
  title: string;
  author: string[];
  genre: string[];
  digitalAvailable: boolean;
  printAvailable: boolean;
  // printAvailable: boolean | number; // remove union type due to error in comic-form.ts FormBuilder object
  isOnHiatus?: boolean;
  image?: string; // optional path to image. relative to "src/"
}
