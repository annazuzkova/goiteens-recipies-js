export const RecipeInfoNew = ({ text, icon }) => {
  return (
    <div className="recipe-info">
      <p className="info">
        <span>{icon}</span>
        {text}
      </p>
    </div>
  );
};
