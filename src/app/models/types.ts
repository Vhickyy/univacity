export interface Course {
    id: string;
    university: string;
    country: {
      flag: string;
      name: string;
    };
    isFav: boolean;
    official: boolean;
    courseTitle: string;
    date: string;
    learn: string;
    level: string;
    duration: {
      type: string;
      year: string;
    };
    language: {
      abbr: string;
      img: string;
      name:string;
    }[];
  }
  
export interface FilterOptions {
attendance: string[];
language: string[];
level: string[];
type: string[];
duration: string[];
}