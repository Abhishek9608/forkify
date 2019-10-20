import Search from "./models/Search";
import * as searchView from "./views/searchView";
import { elements, renderLoader, clearLoader } from "./views/base";
// import { stat } from "fs";

/* Global State of the app
 * - Search object
 * - current recipe object
 * - Shopping list object
 * - Liked recipes
 */

const state = {};
// const state = {
//   search = {
//     result:
//   }
// }

const controlSearch = async () => {
  // 1) Get query from view
  const query = searchView.getInput(); // TODO

  if (query) {
    // 2) New Search object
    state.search = new Search(query);

    // 3) New Search UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    // 4) Search for recipes
    await state.search.getResults();

    // 4) render results on UI
    clearLoader();
    searchView.renderResults(state.search.result);
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener("click", e => {
  const btn = e.target.closest(".btn-inline");
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
    console.log(goToPage);
  }
});
// c4b58f30fb4ae126cc3cce19cdeaa931
