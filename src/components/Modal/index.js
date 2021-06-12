import "./styles.css";

const Modal = ({ pokemon, setPokemon }) => {
  let color = [];

  const handleColor = () => {
    // eslint-disable-next-line array-callback-return
    pokemon.type?.map((t) => {
      switch (t) {
        case "Normal":
          color.push({ backgroundColor: "white", color: "black" });
          break;

        case "Fighting":
          color.push({ backgroundColor: "#b64d1c" });
          break;

        case "Flying":
          color.push({ backgroundColor: "#277ba1" });
          break;

        case "Poison":
          color.push({ backgroundColor: "#8456c3" });
          break;

        case "Ground":
          color.push({ backgroundColor: "#8a8331" });
          break;

        case "Rock":
          color.push({ backgroundColor: "#715c3d" });
          break;

        case "Bug":
          color.push({ backgroundColor: "#419651" });
          break;

        case "Ghost":
          color.push({ backgroundColor: "#83417a" });
          break;

        case "Steel":
          color.push({ backgroundColor: "#6c6c6c" });
          break;

        case "Fire":
          color.push({ backgroundColor: "#a9302b" });
          break;

        case "Water":
          color.push({ backgroundColor: "#135eab" });
          break;

        case "Grass":
          color.push({ backgroundColor: "#7d8545" });
          break;

        case "Electric":
          color.push({ backgroundColor: "#ba9a22" });
          break;

        case "Psychic":
          color.push({ backgroundColor: "#473a8d" });
          break;

        case "Ice":
          color.push({ backgroundColor: "#659dba" });
          break;

        case "Dragon":
          color.push({ backgroundColor: "#d57931" });
          break;

        case "Dark":
          color.push({ backgroundColor: "#232424" });
          break;

        case "Fairy":
          color.push({ backgroundColor: "#ba65a0" });
          break;

        case "Shadow":
          color.push({ backgroundColor: "#414141" });
          break;

        case "Unknown":
          color.push({ backgroundColor: "#9a9a9a" });
          break;

        default:
          return "#419651";
      }
    });
  };

  handleColor();

  return (
    pokemon && (
      <div className="modal-container" onClick={() => setPokemon("")}>
        <div
          className="modal"
          onClick={(e) => {
            return e.stopPropagation();
          }}
        >
          <div className="card-modal">
            <div className="image-container">
              <img src={pokemon.img} alt="Pokemon" />
            </div>
            <h3>{pokemon.name}</h3>
            <h5>{pokemon.height}</h5>
            <h5>{pokemon.weight}</h5>
          </div>
          <div className="card-modal card-info">
            <div className="atributes candy">
              <b>Candy</b>
              <h5>{pokemon.candy}</h5>
              <h5 className="subtitle">Quantity</h5>
              <h5>{pokemon.candy_count ? pokemon.candy_count : "No Candy"}</h5>
            </div>
            <div className="atributes egg">
              <b>Egg</b>
              <h5>{pokemon.egg}</h5>
            </div>
            <div className="atributes spawn">
              <b>Spawn</b>
              <h5 className="subtitle">Spawn Chance </h5>
              <h5>{pokemon.spawn_chance}</h5>
              <h5 className="subtitle">Average Spawns </h5>
              <h5>{pokemon.avg_spawns}</h5>
              <h5 className="subtitle">Spawn Time </h5>
              <h5>{pokemon.spawn_time}</h5>
            </div>
            <div className="atributes multipliers">
              <b>Multipliers</b>
              <h5>
                {pokemon.multipliers?.map((t, index) => {
                  return `${t}${
                    index !== pokemon.multipliers.length - 1 ? ", " : ""
                  }`;
                })
                  ? pokemon.multipliers?.map((t, index) => {
                      return `${t}${
                        index !== pokemon.multipliers.length - 1 ? ", " : ""
                      }`;
                    })
                  : "No multipliers"}
              </h5>
            </div>
            <div className="atributes weaknessess">
              <b>Weaknesses</b>
              <h5>
                {pokemon.weaknesses?.map((t, index) => {
                  return `${t}${
                    index !== pokemon.weaknesses.length - 1 ? ", " : ""
                  }`;
                })}
              </h5>
            </div>
          </div>
          <div className="card-modal card-type">
            <div className="atributes type">
              <b>Type</b>
              <div className="type-card">
                {color.map((c, indexa) => {
                  // eslint-disable-next-line array-callback-return
                  return pokemon.type.map((t, indexb) => {
                    if (indexa === indexb) {
                      return (
                        <h5 className="types" style={c}>
                          {t}
                        </h5>
                      );
                    }
                  });
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
