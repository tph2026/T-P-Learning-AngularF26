export interface Comic {
  id: number;
  title: string;
  author: string[];
  artist: string[];
  genre: string[];
  theme: string[];
  digitalAvailable: boolean | number; /* number to show specific stock count */
  paperbackAvailable?: boolean | number; /* number to show specific stock count */
  isOnHiatus?: boolean;
}
