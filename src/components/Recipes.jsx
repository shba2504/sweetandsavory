import Images from "../images/images";

const Recipes = (props) => {
  console.log(props);

  return (
    <>
      <div>
        <li
          style={{
            display: "flex",
            gap: "1.5em",
            alignItems: "flex-start",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <img
            src={props.recipeObj.photoName}
            alt="images for menu"
            style={{
              width: "15rem",
              aspectRatio: "1",
              alignSelf: "start",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "400" }}>
              {props.recipeObj.name}
            </h3>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "300",
                fontStyle: "1.6rem",
              }}
            >
              {props.recipeObj.description}
            </p>
            <span style={{ display: "block", fontSize: "1.2rem" }}>
              {props.recipeObj.price}
            </span>

            <button
              style={{
                width: "200px",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              {props.recipeObj.button}
            </button>
          </div>
        </li>
      </div>
    </>
  );
};

export default Recipes;
