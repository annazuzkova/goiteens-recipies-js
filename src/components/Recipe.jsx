import { RecipeItem } from "./Recipeitem";
export const Recipe = ({ recipes }) => {
  return (
    <ul className="recipes">
      {recipes.map((recipeItem, index) => {
        return (
          <li key={index} className="recipe__item">
            <RecipeItem recipe={recipeItem} />
          </li>
        );
      })}
    </ul>
  );
};
