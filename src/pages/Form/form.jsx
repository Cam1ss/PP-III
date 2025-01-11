import React, { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import '../../style/header.css';
import '../../style/footer.css';
import '../../style/Forms/Form.css';

import Header from '../../components/header.js';
import fundo from './fundo.png';
import axios from 'axios';
import Footer from '../../components/footer.js';

function App() {
  const [nome, setNome] = useState('');
  const [estado, setEstado] = useState('');
  const [festival, setFestival] = useState('');
  const [comentario, setComentario] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Para evitar envios múltiplos

  // Função para enviar os dados do formulário ao backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dados do formulário
    const formData = {
      nome,
      estado,
      festival,
      comentario,
    };

    try {
      setIsSubmitting(true); // Bloqueia múltiplos envios
      const response = await axios.post('http://localhost:5000/api/users', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Resposta do servidor:', response.data);
      alert('Formulário enviado com sucesso!');

      // Limpar os campos do formulário
      setNome('');
      setEstado('');
      setFestival('');
      setComentario('');
    } catch (error) {
      console.error('Erro ao enviar os dados:', error.response || error.message);
      alert('Erro ao enviar o formulário. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false); // Libera o botão de envio
    }
  };

  return (
    <>
      <HelmetProvider>
        <div className="App">
          <Helmet>
            <title>Formulário</title>
          </Helmet>
          <Header />

          <div className="section-form">
            <img src={fundo} alt="fundo" className="fundoAboutUS" />

            <h2> FORMULÁRIO PARA COMENTÁRIOS </h2>
            <div className="descricao">
              Envie por aqui seus comentários sobre os festivais que você frequenta ou que gostaria que estivessem no site, e sobre o projeto Festivale.
            </div>

            <form onSubmit={handleSubmit} className="form">
              <div className="container">
                <div className="caixa">
                  <p className="n">Nome:</p>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>

                <div className="caixa">
                  <p className="n">Estado:</p>
                  <input
                    type="text"
                    list="estados"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    required
                  />
                </div>

                <div className="caixa">
                  <p className="n">Festival:</p>
                  <input
                    type="text"
                    value={festival}
                    onChange={(e) => setFestival(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="coment">
                <p>Sugestão/Comentário:</p>
                <div className="area">
                  <textarea
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                    placeholder="Comente aqui..."
                    required
                  />
                </div>
              </div>
              <button className="btn-enviar" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          </div>

          <datalist id="estados">
            <option value="Acre" />
            <option value="Alagoas" />
            <option value="Amapá" />
            <option value="Amazonas" />
            <option value="Bahia" />
            <option value="Ceará" />
            <option value="Distrito Federal" />
            <option value="Espírito Santo" />
            <option value="Goiás" />
            <option value="Maranhão" />
            <option value="Mato Grosso" />
            <option value="Mato Grosso do Sul" />
            <option value="Minas Gerais" />
            <option value="Pará" />
            <option value="Paraíba" />
            <option value="Paraná" />
            <option value="Pernambuco" />
            <option value="Piauí" />
            <option value="Rio de Janeiro" />
            <option value="Rio Grande do Norte" />
            <option value="Rio Grande do Sul" />
            <option value="Rondônia" />
            <option value="Roraima" />
            <option value="Santa Catarina" />
            <option value="São Paulo" />
            <option value="Sergipe" />
            <option value="Tocantins" />
          </datalist>
          <Footer />
        </div>
      </HelmetProvider>
    </>
  );
}

export default App;



