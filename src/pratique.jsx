import "./pratique.css";

function Pratique() {
  const handerClick = () => {
    const input = document.querySelector(".input");
    const add = document.querySelector(".add");
    const p = document.createElement("p");
    p.textContent = `Votre nom et pre  nom est: ${input.value}`;
    add.appendChild(p);
  };

  return (
    <div className="pratique">
      <h1>Pratique</h1>
      <p>Donner votre nom et prénom</p>
      <form action="#">
      <input type="text" className="input" />
      <button onClick={handerClick}>Envoyer</button>
      </form>
      <div className="add">
      </div>
      
    </div>
  );
}

export default Pratique;
