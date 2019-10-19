import Search from "./models/Search";
import * as searchView from "./views/searchView";
import { elements } from "./views/base";
// import { stat } from "fs";

/* Global State of the app
 * - Search object
 * - current recipe object
 * - Shopping list object
 * - Liked recipes
 */

const state = {};

const controlSearch = async () => {
  // 1) Get query from view
  const query = searchView.getInput(); // TODO

  if (query) {
    // 2) New Search object
    state.search = new Search(query);

    // 3) New Search UI for results

    // 4) Search for recipes
    await state.search.getResults();

    // 4) render results on UI
    searchView.renderResults(state.search.result);
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

// c4b58f30fb4ae126cc3cce19cdeaa931
