import { CiTimer } from "react-icons/ci";
import { FaPlateWheat } from "react-icons/fa6";
import { CiPizza } from "react-icons/ci";
import { RecipeInfo } from "./RecipeInfo";
import { RecipeInfoNew } from "./RecipeInfoNew";
export const RecipeItem = ({ recipe }) => {
  const icons = {
    time: <CiTimer />,
    servings: <CiPizza />,
    calories: <FaPlateWheat />,
  };
  return (
    <article className="recipe">
      <img src={recipe.image} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <RecipeInfoNew text={`time: ${recipe.time}`} icon={<CiTimer />} />
      <RecipeInfoNew text={`servings: ${recipe.servings}`} icon={<CiPizza />} />
      <RecipeInfoNew
        text={`calories: ${recipe.calories}`}
        icon={<FaPlateWheat />}
      />
    </article>
  );
};
