import React from "react"
import { FiSearch } from "react-icons/fi";

function App() {
  return (
    <div className="container">
      <h1 className="title">
        Buscador
      </h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite seu cep..."/>

        <button>
          <FiSearch size={25} color="#FFF"/>
        </button>

        <main className="main">
          <h2>CEP: 79003222</h2>
          <span>Rua Teste algum</span>
          <span>Complemento: Algum Complemento</span>
        </main>
      </div>
    </div>
  );
}

export default App;
