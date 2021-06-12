import "./styles.css";

const Pokemon = ({ img, name, type, height, weight, onClick }) => {
  let color = { backgroundColor: "#419651" };
  let fontColor = { color: "white" };

  const handleColor = () => {
    switch (type[0]) {
      case "Normal":
        color = { backgroundColor: "white" };
        fontColor = { color: "black" };
        break;

      case "Fighting":
        color = { backgroundColor: "#b64d1c" };
        break;

      case "Flying":
        color = { backgroundColor: "#277ba1" };
        break;

      case "Poison":
        color = { backgroundColor: "#8456c3" };
        break;

      case "Ground":
        color = { backgroundColor: "#8a8331" };
        break;

      case "Rock":
        color = { backgroundColor: "#715c3d" };
        break;

      case "Bug":
        color = { backgroundColor: "#419651" };
        break;

      case "Ghost":
        color = { backgroundColor: "#83417a" };
        break;

      case "Steel":
        color = { backgroundColor: "#6c6c6c" };
        break;

      case "Fire":
        color = { backgroundColor: "#a9302b" };
        break;

      case "Water":
        color = { backgroundColor: "#135eab" };
        break;

      case "Grass":
        color = { backgroundColor: "#7d8545" };
        break;

      case "Electric":
        color = { backgroundColor: "#ba9a22" };
        break;

      case "Psychic":
        color = { backgroundColor: "#473a8d" };
        break;

      case "Ice":
        color = { backgroundColor: "#659dba" };
        break;

      case "Dragon":
        color = { backgroundColor: "#d57931" };
        break;

      case "Dark":
        color = { backgroundColor: "#232424" };
        break;

      case "Fairy":
        color = { backgroundColor: "#ba65a0" };
        break;

      case "Shadow":
        color = { backgroundColor: "#414141" };
        break;

      case "Unknown":
        color = { backgroundColor: "#9a9a9a" };
        break;

      default:
        return "#419651";
    }
  };

  handleColor();

  return (
    <div style={color} className="card" onClick={onClick}>
      <div className="image-container">
        <img src={img} alt="Pokemon" />
      </div>
      <h3 style={fontColor} className="name">
        {name}
      </h3>
      <h5 style={fontColor} className="type">
        {type.toString()}
      </h5>
      <h5 style={fontColor} className="height">
        {height}
      </h5>
      <h5 style={fontColor} className="weight">
        {weight}
      </h5>
    </div>
  );
};

export default Pokemon;
