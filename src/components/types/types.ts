export interface Data {
  name: string;
  climate: string;
  terrain: string;
  population: string;
  planetData: [];
}

export interface PlanetData {
  name: string;
  climate: string;
  population: number;
  terrain: string;
}

export interface Planets {
  list: PlanetData[];
}
