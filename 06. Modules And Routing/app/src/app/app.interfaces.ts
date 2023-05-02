export interface Users {
    count: number;
    next: string;
    previous: string | null;
    results: Array<{
      name: string;
      height: string;
      mass: string;
      hair_color: string;
      skin_color: string;
    }>;
  }
 export interface ApiResponse {
    count: number;
    next: string;
    previous: string | null;
    results: Users[];
  }