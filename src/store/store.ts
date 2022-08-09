import type { IGame, IState } from "@/types";
import { getSoureseData } from "@/api/gamesAPI";
import { defineStore } from "pinia";
import { capitalizeFirstLetter, alphabeticalSort } from "@/utility/utility";

export const useGamesStore = defineStore({
  id: "games",
  state: (): IState => ({
    games: [],
    genres: ["Action", "Racing", "RPG", "FPS"],
  }),
  getters: {
    // getGenre(state) {
    //   const genres = state.games.reduce((allGenres: any, game: IGame) => {
    //     return allGenres.concat(game.info.genres);
    //   }, []);
    //   return genres;
    // },
  },
  actions: {
    async fetchGames() {
      try {
        this.games = await getSoureseData();
      } catch (err) {
        if (err instanceof Error) console.log(err.message);
      }
    },
  },
});
