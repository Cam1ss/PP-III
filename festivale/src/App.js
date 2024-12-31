import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Comments from './Comments'; // Importe o componente de comentários

import './Form.css';
import fundo from './fundo-aboutUS.png';
import axios from 'axios';

function App() {
  const [nome, setNome] = useState('');
  const [estado, setEstado] = useState('');
  const [festival, setFestival] = useState('');
  const [comentario, setComentario] = useState('');

  // Função para enviar os dados do formulário ao backend
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const formData = {
      nome,
      estado,
      festival,
      comentario
    };

    try {
      const response = await axios.post('http://localhost:5000/api/users', formData);
      console.log('Resposta do servidor:', response.data);
      alert('Formulário enviado!');
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      alert('Erro ao enviar formulário!');
    }
  };

  return (
    <div className="App">

   <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/comments">Comentários</Link>
            </li>
          </ul>
        </nav>

       
        <Routes>
          <Route path="/" element={<h1>Bem-vindo ao site!</h1>} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </div>
    </Router>

      <img src={fundo} alt="fundo" className="fundoAboutUS"/> 

      <form onSubmit={handleSubmit}>
        <br/>
        <h2> FORMULÁRIO PARA COMENTÁRIOS </h2>
        <br></br>
        <div class="descricao"> Envie por aqui seus comentários sobre os festivais que você frequenta ou que gostaria que estivessem no site, e sobre o projeto Festivale. </div>
        <br></br> <br></br>
        <div class="container">
  
          <p class="n"> Seu Nome: </p> 
          <input 
            type="text" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            required 
          />
      
        <pre>       </pre>
        
          <p class="n"> Estado: </p>
          <input 
            type="text" 
            list="estados"
            value={estado} 
            onChange={(e) => setEstado(e.target.value)} 
            required 
          />
          <br></br>
      
        <pre>       </pre>
        
          <p class="n"> Festival: </p> 
          <input 
            type="text" 
            value={festival} 
            onChange={(e) => setFestival(e.target.value)} 
            required 
          />
       
        </div>
        <br></br> <br/>
        <div>
          <p>Sugestão/Comentário:</p>
          <textarea
            value={comentario} 
            onChange={(e) => setComentario(e.target.value)} 
            required 
          />
        </div>
        <br></br>
        <button type="submit">Enviar</button>
      </form>

      <datalist id="estados">
        <option value="Acre"/>
        <option value="Alagoas"/>
        <option value="Amapá"/>
        <option value="Amazonas"/>
        <option value="Bahia"/>
        <option value="Ceará"/>
        <option value="Distrito Federal"/>
        <option value="Espírito Santo"/>
        <option value="Goiás"/>
        <option value="Maranhão"/>
        <option value="Mato Grosso"/>
        <option value="Mato Grosso do Sul"/>
        <option value="Minas Gerais"/>
        <option value="Pará"/>
        <option value="Paraíba"/>
        <option value="Paraná"/>
        <option value="Pernambuco"/>
        <option value="Piauí"/>
        <option value="Rio de Janeiro"/>
        <option value="Rio Grande do Norte"/>
        <option value="Rio Grande do Sul"/>
        <option value="Rondônia"/>
        <option value="Roraima"/>
        <option value="Santa Catarina"/>
        <option value="São Paulo"/>
        <option value="Sergipe"/>
        <option value="Tocantins"/>
      </datalist>
    </div>
    
  );
}

export default App;


/*import logoF from './logo.png';
import React, { useState } from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Menu.css';
import './Form.css';

function App() {
  return (
    <div className="App">
      <body>
      <Navbar bg="light" expand="lg" className='menu'>
      <img src={logoF} alt="logo" className='logo'/>
        <Container>
            <Nav className="menu-list">
              <Nav.Link className="item-link" href="#home">Home</Nav.Link>
              <Nav.Link className="item-link" href="#aboutUs">Sobre Nós</Nav.Link>
              <Nav.Link className="item-link" href="#form">Formulário</Nav.Link>
            </Nav>
        </Container>
      </Navbar>

       <form id="comment-form" onSubmit={handleSubmit}>
        <br></br>
        <h2> FORMULÁRIO PARA COMENTÁRIOS </h2>
        <br></br>
        <div class="descricao"> Envie por aqui seus comentários sobre os festivais que você frequenta ou que gostaria que estivessem no site, e sobre o projeto Festivale. </div>
        <div class="container">
        <p class="n"> Seu Nome: </p> 
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        <pre>       </pre>
        <p class="n"> Estado: </p>
        <input list="estados" type="text" value={estado}  onChange={(e) => setEstado(e.target.value)} required />
        <pre>       </pre>
        <p class="n"> Festival: </p> 
        <input type="text" value={festival} onChange={(e) => setFestival(e.target.value)} required /> 
        <br/> <br/>
        </div>
        <br/>
        <p> Sugestão/Comentário </p> 
        <textarea value={comentario} onChange={(e) => setComentario(e.target.value)} required /> 
        <br/> 
        <button type="submit"> Enviar </button>
        <br/> <br/>
      </form>

      <datalist id="estados">
        <option value="Acre"/>
        <option value="Alagoas"/>
        <option value="Amapá"/>
        <option value="Amazonas"/>
        <option value="Bahia"/>
        <option value="Ceará"/>
        <option value="Distrito Federal"/>
        <option value="Espírito Santo"/>
        <option value="Goiás"/>
        <option value="Maranhão"/>
        <option value="Mato Grosso"/>
        <option value="Mato Grosso do Sul"/>
        <option value="Minas Gerais"/>
        <option value="Pará"/>
        <option value="Paraíba"/>
        <option value="Paraná"/>
        <option value="Pernambuco"/>
        <option value="Piauí"/>
        <option value="Rio de Janeiro"/>
        <option value="Rio Grande do Norte"/>
        <option value="Rio Grande do Sul"/>
        <option value="Rondônia"/>
        <option value="Roraima"/>
        <option value="Santa Catarina"/>
        <option value="São Paulo"/>
        <option value="Sergipe"/>
        <option value="Tocantins"/>
      </datalist>
      </body>
    </div>
  );
}

export default App;*/
