import { async } from 'regenerator-runtime';
import { getJSON } from './helpers.js';
import { API_URL } from './config.js';

export const state = {
  recipe: {},
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
    console.log(state.recipe);
  } catch (err) {
    console.error(`${err}💣💣💣💣 `);
  }
};
