export interface IGame {
  title: string;
  poster: string;
  id: number;
  info: IInfo;
  images: string[];
}

export interface IInfo {
  developer: string;
  released: string;
  genres: string[];
  description: string;
  shortPlot: string;
}

export interface IState {
  games: IGame[];
  genres: string[];
}
