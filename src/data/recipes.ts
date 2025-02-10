export interface Recipe {
  title: string;
  isVegetarian?: boolean;
  ingredients: string[];
  instructions: string[];
}

export const recipes: Recipe[] = [
  {
    title: "Farinata",
    isVegetarian: true,
    ingredients: [],
    instructions: ["To come"]
  },
  {
    title: "Cake",
    isVegetarian: true,
    ingredients: [
      "Flour: 200g",
      "Instant yeast: 1 sachet",
      "Eggs: 1 or 2",
      "Rice milk: 100ml",
      "Salt",
      "Olives",
      "Dried tomatoes (or fresh tomatoes if in season)",
      "Fresh basil (or other herbs you have on hand)",
      "Onion and garlic (pre-cooked)"
    ],
    instructions: [
      "Mix flour, yeast, eggs, rice milk, and salt to form a dough",
      "Prepare the filling with olives, tomatoes, basil, and pre-cooked onion and garlic",
      "Add the filling to the dough and mix",
      "Place the dough in a greased pan",
      "Bake at 200°C for about 30-40 minutes"
    ]
  },
  {
    title: "Veggie Lasagna",
    isVegetarian: true,
    ingredients: [
      "Lasagna sheets",
      "Onions",
      "Garlic",
      "Potimarron",
      "Spinach",
      "Vegetable broth cube",
      "For bechamel:",
      "- Flour",
      "- Butter",
      "- Rice milk",
      "- Salt",
      "- Garlic (optional)"
    ],
    instructions: [
      "Layer onions, garlic, and potimarron in a casserole dish",
      "Wash and dry spinach, cook for 5-10 minutes with oil and salt",
      "Add spinach and vegetable broth to the vegetables when almost cooked",
      "Prepare bechamel sauce with flour, butter, rice milk, salt, and garlic if desired",
      "Layer lasagna sheets with vegetables and bechamel",
      "Bake at 200°C for about 40-50 minutes"
    ]
  },
  {
    title: "Bread",
    isVegetarian: true,
    ingredients: [
      "Flour: 500g",
      "Salt: 5g",
      "Fresh yeast: 25g",
      "Water: 300ml (25°C)",
      "For brushing:",
      "- Nut oil",
      "- Hot water",
      "- Salt"
    ],
    instructions: [
      "Mix flour, salt, and yeast (keep yeast and salt separate initially)",
      "Add water and knead to form a dough",
      "Let rest for 3 hours at ~25°C",
      "Remove dough and knead again, adding flour if needed",
      "Shape into bread",
      "Mix nut oil, hot water, and salt; brush on bread",
      "Bake until done"
    ]
  },
  {
    title: "Tuna Mustard Cupcakes",
    ingredients: [
      "Tuna: 150g",
      "Eggs: 3",
      "Salt and pepper",
      "Mustard: 2 tablespoons",
      "Cream cheese: 2 tablespoons"
    ],
    instructions: [
      "Mix all ingredients thoroughly in a bowl",
      "Pour mixture into cupcake molds",
      "Bake at 180°C for around 30 minutes"
    ]
  },
  {
    title: "Blesoto with Mushroom, Broccoli, and Feta",
    ingredients: [
      "Barley",
      "Mushrooms",
      "Broccoli",
      "Onions",
      "Shallots",
      "Garlic",
      "Feta cheese",
      "Vegetable bouillon cubes",
      "Oil",
      "Salt and pepper"
    ],
    instructions: [
      "Heat oil and sauté onions, shallots, and garlic until golden",
      "Briefly boil broccoli for 1 minute",
      "Add mushrooms to the onion mixture, then add broccoli",
      "Transfer vegetables to a casserole dish",
      "Cook barley in the same pan with water and vegetable bouillon",
      "Combine cooked barley with vegetables",
      "Crumble feta cheese and stir gently",
      "Serve hot"
    ]
  },
  {
    title: "Japanese Curry",
    isVegetarian: true,
    ingredients: [
      "Carrots",
      "Potatoes",
      "Onions",
      "Garlic",
      "Leeks",
      "Mushrooms",
      "Rice",
      "Japanese golden curry blocks",
      "Soy sauce",
      "Water"
    ],
    instructions: [
      "Cut all vegetables into small pieces",
      "Place vegetables in a casserole with water and soy sauce",
      "Cook until vegetables are tender",
      "Start cooking rice 7 minutes before vegetables are done",
      "Turn off heat for 2 minutes after vegetables are cooked",
      "Add Japanese golden curry blocks",
      "Serve with rice"
    ]
  },
  {
    title: "Vegetarian Couscous",
    isVegetarian: true,
    ingredients: [
      "Carrots",
      "Potatoes",
      "Onions",
      "Garlic",
      "Assorted vegetables",
      "Tomato sauce",
      "Chickpeas",
      "Seitan",
      "Couscous"
    ],
    instructions: [
      "Cut vegetables into small pieces and place in casserole",
      "Cook until potatoes and carrots are almost done",
      "Add chickpeas and sliced seitan",
      "Prepare couscous separately",
      "Serve vegetables and sauce over couscous"
    ]
  },
  {
    title: "Cheese and Ham Soufflé",
    ingredients: [
      "Eggs: 5",
      "Ham: 140g",
      "Cheese",
      "Salt and pepper",
      "Ingredients for béchamel sauce"
    ],
    instructions: [
      "Separate egg whites and yolks",
      "Beat egg whites until stiff peaks form",
      "Mix egg yolks with pepper, salt, ham, and cheese",
      "Prepare a small béchamel sauce",
      "Gently fold egg yolk mixture into beaten egg whites",
      "Place in oven-safe dish",
      "Bake at 200°C for about 30 minutes"
    ]
  }
];
