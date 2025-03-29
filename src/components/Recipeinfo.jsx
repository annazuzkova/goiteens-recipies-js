export const RecipeInfo = ({ time, servings, calories, icons }) => (
  <div>
    <p>
      <span>{icons.time}</span> {time}
    </p>
    <p>
      <span>{icons.calories}</span>
      {calories}
    </p>
    <p>
      <span>{icons.servings}</span>
      {servings}
    </p>
  </div>
);
