import Images from "../images/images";

const Recipes = (props) => {
  console.log(props);

  return (
    <>
      <div className="food">
        <img src={Images} alt="" />
        <div>
          <h3>{props.recipeObj.name}</h3>
          <p>{props.recipeObj.description}</p>
          <span>{props.recipeObj.price}</span>
        </div>
      </div>
    </>
  );
};

export default Recipes;
