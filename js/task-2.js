const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//Напиши скрипт, который для каждого элемента массива ingredients
//создаст отдельный li, после чего вставит все li за одну операцию
//в список ul.ingredients.Для создания DOM - узлов используй
//document.createElement().

const ingredientsContainerEl = document.querySelector('#ingredients');

const createListIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = ingredient;
    return ingredientEl;
  });
}

const listIngredients = createListIngredients(ingredients);
ingredientsContainerEl.append(...listIngredients);