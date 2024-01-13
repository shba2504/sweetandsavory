const Recipes = (props) => {
  console.log(props);

  return (
    <>
      <div className="food">
        <img src={Images} alt="" />
        <div>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <span>{props.price}</span>
        </div>
      </div>
    </>
  );
};

export default Recipes;
