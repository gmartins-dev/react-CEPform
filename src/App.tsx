import { useState } from 'react';
import './App.css';
import api from './services/api';

function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === '') {
      alert('Preencha algum cep!');
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput('');
    } catch {
      alert('Erro ao buscar cep');
      setInput('');
    }
  }

  return (
    <>
      <section>
        <div>
          <label>Buscador de Cep</label>
          <br />
          <input
            type="text"
            placeholder="Digite seu cep..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button onClick={handleSearch}>BUSCAR!</button>
      </section>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>

          <span>{cep.logradouro} </span>
          <span>{cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>
            {cep.localidade} - {cep.uf}
          </span>
        </main>
      )}
    </>
  );
}

export default App;
