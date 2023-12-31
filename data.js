const recipies = [
  {
    name: "Shiro Recipe",
    img: "./images/Shiro-Wat-Featured-Image-1.jpg",
    backdrop_img: "./images/fa00aa_ff265a3c4b1f4baf880ea8a5f92d66ca~mv2.jpg",
    difficulty: "Intermediate",
    ingredients: [
      "3 cups Shiro mitten",
      "10 cups water",
      "1 cup vegetable oil",
      "1 tbsp berbere",
      "1 tbsp niter kibbeh",
      "3 large finely chopped onion",
      "5 tsp garlic powder",
    ],
    directions: [
      "Begin by simmering the garlic, onions, and vegetable oil in a mid-sized pot.",
      "Next, add berbere to the mix and continue simmering for around 10 minutes while also adding a small amount of water to keep the mix from sticking.",
      "Add the remainder of the water; then add the Shiro mitten flour slowly (in small portions) while stirring continuously.",
      "Then continue cooking for around 25 minutes until the Shiro becomes thicker but also a bit runny.",
      "Finally, add niter kibbeh and stir for a bit, then remove from heat. Serve your Shiro hot with injera and enjoy!",
    ],
  },
  {
    name: "Doro Wot Recipe",
    img: "./images/EFC-doro-wat-hero-1280x720.jpg",
    backdrop_img: "./images/1370452369090.jpg",
    difficulty: "Advanced",
    ingredients: [
      "7 lbs skinned and cleaned chicken thighs and drumsticks",
      "3 pre-boiled eggs",
      "8 finely chopped onions",
      "2 cups vegetable oil",
      "2 cups water",
      "5 tsp garlic powder",
      "2 tsp ginger powder",
      "½ cup berbere",
      "2 tsp korerima",
      "¼ cup paprika",
      "2 tsp wot kimem (mekelesha)",
      "2 tsp salt",
    ],
    directions: [
      "Begin by adding the garlic powder, ginger powder, onions, and vegetable oil to a large-sized pot; and let the mix simmer at low heat.",
      "Add paprika and berbere and continue to simmer at the same low heat for up to 20 min. Stir every now and then. Avoid the mix from sticking by adding a little water.",
      "Add the chicken thighs and drumsticks and simmer some more while also slowly adding the remainder of the water.",
      "Add the pre-boiled eggs, and finish simmering by adding salt, korerima, and wot kimem (mekelesha).",
      "Serve your Doro Wot hot",
    ],
  },
  {
    name: "Quanta Firfir Recipe",
    img: "./images/download-1.jpg",
    backdrop_img: "./images/sddefault.jpg",
    difficulty: "Intermediate",
    ingredients: [
      "2 injera",
      "14 oz dried beef",
      "⅓ cup of vegetable oil",
      "4 ripe chopped tomatoes",
      "2 chopped red onions",
      "1 tbsp minced garlic",
      "½ cup niter kibbeh",
      "2 tbsp berbere",
      "2 tsp salt",
      "3 cups water",
    ],
    directions: [
      "Begin by cooking the onions in a large-sized saucepan at medium-high heat; until the onions start to turn brown for approx. 5 min – with the lid covered.",
      "Then add the garlic and vegetable oil and continue cooking for around 5 more minutes until you get a fragrant smell.",
      "Add the tomatoes while stirring and continue cooking for around 6 minutes until they get soft.",
      "Next, add half a cup of water and the dried beef, along with some berbere. Then lower the heat to medium and continue cooking for around 10 minutes.",
      "After that, continue to cook adding a third of a cup every now and then for around 20 minutes until the sauce thickens, and the dried beef softens.",
      "Then add the nitter kibbeh and some salt and stir the mix.",
      "Finally, take 1 injera and shred it into smaller pieces and add them to the sauce. Then mix the Quantata Firfir thoroughly but very gently until the injera soaks in the sauce properly.",
    ],
  },
  {
    name: "Kitfo Recipe",
    img: "./images/kitfo1.jpg",
    backdrop_img: "./images/Special-Kitfo.jpg",
    difficulty: "Intermediate",
    ingredients: [
      "3 lbs beef, freshly grounded (without fat)",
      "¼ cup niter kibbeh (Ethiopian clarified butter)",
      "1 tsp korerima",
      "1 tsp mitmita",
      "1 tsp salt",
    ],
    directions: [
      "Begin by thoroughly mixing the ground beef with the korerima, mitmita, and some salt; then top it all off with the niter kibbeh.",
      "Then add the mix onto a pan or skillet and heat until the meat is cooked as your liking.",
      "Serve your Kitfo hot with Injera.",
    ],
  },
  {
    name: "Tibs Recipe",
    img: "./images/Awaze-Tibe-Egyptian-Beef-Tibs-Recipe-IG-1.jpg",
    backdrop_img: "./images/Ethiopian-Tibs.jpg",
    difficulty: "Advanced",
    ingredients: [
      "1 lb sirloin beef (cut into 1-inch cubes and trimmed of excess fat & connective tissue)",
      "2 chopped medium-sized onions",
      "2 tbsp minced ginger",
      "2 tbsp minced garlic",
      "1 tsp lemon juice",
      "1 tsp vegetable oil",
      "5 tbsp niter kibbeh (Ethiopian clarified butter)",
      "2 tbsp berbere",
      "1 tbsp salt",
    ],
    directions: [
      "Start by melting the niter kibbeh in a large-sized saucepan with your stove set to medium heat. Then, add the garlic, ginger, and onions along with some berbere.",
      "Lower the heat of the stove to medium-low and continue cooking for around 30 minutes until the onions start to darken, while occasionally stirring.",
      "When the onions get to a low sizzle, move them to a food processor and blend them well, but don’t let them turn into a purée.",
      "Then return them to the saucepan, add some salt, and keep them warm",
      "Next, bring your sirloin beef, trim it of excess fat & connective tissues, cut it into small 1-ich cubes, and add some salt to all sides of the beef cubes.",
      "Heat a large-sized cast-iron skillet or pan at high heat with some oil, until it gets lightly smoky",
      "Add the beef cubes to the pan in a single layer and plenty of space in the pan itself. If there is not enough space to add the beef cubes this way, feel free to do so in batches.",
      "Then cook without moving the beef cubes so that they are seared well on one side. Do this for 3 minutes and flip the beef cubes over and cook the other side the same way.",
      "Continue cooking the beef cubes, occasionally flipping and stirring them until the beef cubes are cooked to your liking.",
      "Finally, move the beef cubes to the saucepan you were keeping warm with the onion sauce in it, add the lemon juice, and mix together gently but also thoroughly. Serve your Tibs while still hot.",
    ],
  },
  {
    name: "Genfo Recipe",
    img: "./images/d64fe1f3c3754340bfbc7e20510110ef-1.jpg",
    backdrop_img:
      "./images/fromandroid-60673a0bb2954dd3b158631f42f1a4ad_600x400.jpg",
    difficulty: "Intermediate",
    ingredients: [
      "1 cup of wheat flour",
      "3 tbsp niter kibbeh (Ethiopian clarified butter)",
      "1 tbsp berbere",
      "½ tsp cardamom",
      "2 cups water",
    ],
    directions: [
      "Start by adding the cardamom to the flour and mix.",
      "Boil the water then start adding the flour mix slowly while reducing the heat, stirring thoroghly so as to avoid any lumps from forming and until the mix moistenes well enough.",
      "Then transfer the Genfo to a mid-sized bowl, and create a hole right in the middle.",
      "Melt the Niter Kibbeh, and mix with the berbere, then pour the mix into the hole you created in the middle of the Genfo.",
      "Finally, pour the spicy liquid into the hole you’ve hollowed out in the Genfo and serve while still hot.",
    ],
  },
];

export default recipies;
