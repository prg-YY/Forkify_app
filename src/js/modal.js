import { async } from 'regenerator-runtime';
import { getJSON } from './helpers.js';
import { API_URL } from './config.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};

export const loadRecipe = async id => {
  try {
    const data = await getJSON(`${API_URL}/${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      sourcesUrl: recipe.sourse_url,
      cookingTime: recipe.cooking_time,
      title: recipe.title,
    };
    // console.log(state.recipe);
  } catch (err) {
    console.error(`${err}💣💣💣💣 `);
    throw err;
  }
};

export const loadSearchResults = async query => {
  try {
    state.search.results = query;

    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(data);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
  } catch (err) {
    console.error(`${err}💣💣💣💣 `);
    throw err;
  }
};
