import recipies from "./data.js";

console.log(recipies);

const hidden = (class1, class2, class3) => {
  const divClass1 = document.querySelector(`.${class1}`);
  if (!divClass1.classList.contains("hidden")) {
    divClass1.classList.add("hidden");
  }
  const divClass2 = document.querySelector(`.${class2}`);
  if (divClass2.classList.contains("hidden")) {
    divClass2.classList.remove("hidden");
  }
  const divClass3 = document.querySelector(`.${class3}`);
  if (!divClass3.classList.contains("hidden")) {
    divClass3.classList.add("hidden");
  }
};

const home = () => {
  hidden("reciepe", "welcome-page", "recipe-list");
  const body = document.querySelector("body");
  body.style.backgroundImage = `url("./images/ethiopia_food_beyaynet.jpg")`;
};

const imageClicked = (recipe, div) => {
  hidden("welcome-page", "reciepe", "recipe-list");
  const recipelistDiv = document.querySelector(".recipe-list");
  recipelistDiv.innerHTML = "";
  const recipeDiv = document.querySelector(".reciepe");
  if (recipeDiv.innerHTML == "") {
    //changing the background image of the body
    const body = document.querySelector("body");
    body.style.backgroundImage = `url("${recipe.backdrop_img}")`;

    //creating a header tag for setting the difficulty
    const difficulty = document.createElement("h4");
    difficulty.textContent = `Difficulty: ${recipe.difficulty}`;
    //div for ingredients and steps
    const div1 = document.createElement("div");
    div1.classList.add("ingred-steps");
    //ordered list for the ingredients
    const ingredientList = document.createElement("ul");
    ingredientList.innerHTML = `<h2 style="color: #515932; background-color: #f2cea2; margin-bottom: 20px; box-shadow: -2px 5px 5px 0px rgba(0, 0, 0, 0.75); padding-left: 5px">Ingredients</h2>`;
    for (let ingredient of recipe.ingredients) {
      const list = document.createElement("li");
      list.textContent = ingredient;
      ingredientList.appendChild(list);
    }
    //oredered list for the steps
    const steps = document.createElement("ol");
    steps.innerHTML = `<h2 style="color: #515932; background-color: #f2cea2; margin-bottom: 20px; box-shadow: -2px 5px 5px 0px rgba(0, 0, 0, 0.75); padding-left: 5px">Directions</h2>`;
    for (let step of recipe.directions) {
      const list = document.createElement("li");
      list.textContent = step;
      steps.appendChild(list);
    }
    //appending to the div we created
    div1.appendChild(ingredientList);
    div1.appendChild(steps);
    //appending everything to the container div
    div.appendChild(difficulty);
    recipeDiv.appendChild(div);
    return div1;
  }
};

const ingredDirection = (recipe, div) => {
  const div1 = imageClicked(recipe, div);
  const recipeDiv = document.querySelector(".reciepe");

  recipeDiv.appendChild(div1);
};

const recipeListName = () => {
  hidden("welcome-page", "recipe-list", "reciepe");
  const recipeDiv = document.querySelector(".reciepe");
  recipeDiv.innerHTML = "";

  const recipelistDiv = document.querySelector(".recipe-list");
  if (recipelistDiv.innerHTML == "") {
    for (let recipe of recipies) {
      // creating a header for the name of the recipe
      const name = document.createElement("h4");
      name.textContent = recipe.name;

      // creating an img for the image of the recipe
      const img = document.createElement("img");
      img.setAttribute("src", recipe.img);
      img.classList.add("recipe-img");

      // creating a div to hold the name and image
      const div = document.createElement("div");
      div.classList.add("name-img");
      div.appendChild(img);
      div.appendChild(name);
      console.log(recipe);

      img.addEventListener("click", () => {
        ingredDirection(recipe, div);
      });
      console.log(div);
      // adding the div to the container div

      recipelistDiv.appendChild(div);
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const recipesButton = document.querySelector(".recipes");
  recipesButton.addEventListener("click", () => {
    recipeListName();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const homeButton = document.querySelector(".home");
  homeButton.addEventListener("click", () => {
    home();
  });
});
