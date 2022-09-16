import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import './styles.css'
function App() {

  const [input, setInput] = useState('')

  function handleSearch() {
    alert(input)
  }

  return (
    <div className="container">
      <h1 className="title">Buscador Cep</h1>

      <div
        className="containerInput">
        <input type="text"
          placeholder="Digite seu CEP..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch  size={25} color="#fff"/>
        </button>
</div>
        <main className='main'>
          <h2>CEP: 29292929</h2>
          <span>Rua keuwe ojo</span>
          <span>complemento primeiro keuwe</span>
          <span>vila rosa</span>
          <span>São Paulo - SP</span>
        </main>
      
    </div>
  );
}

export default App;
