import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const key = "c4b58f30fb4ae126cc3cce19cdeaa931";
    try {
      const res = await axios(
        `${proxy}https://food2fork.com/api/search?key=${key}&q=${this.query}`
      );
      this.result = res.data.recipes;
    } catch (error) {
      alert(error);
    }
  }
}
