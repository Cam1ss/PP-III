import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    nome: '',
    estado: '',
    festival: '',
    comentario: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setError('');
        setFormData({ nome: '', estado: '', festival: '', comentario: '' }); // Limpar o formulário após sucesso
      } else {
        setError(data.error || 'Erro desconhecido');
        setMessage('');
      }
    } catch (err) {
      setError('Erro ao enviar formulário');
      setMessage('');
    }
  };

  return (
    <div>
      <h2>Formulário para Comentários</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Seu Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Estado:</label>
          <input
            list="estados"
            name="estado"
            value={formData.estado}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Festival:</label>
          <input
            type="text"
            name="festival"
            value={formData.festival}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Sugestão/Comentário:</label>
          <textarea
            name="comentario"
            value={formData.comentario}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <datalist id="estados">
        <option value="Acre" />
        <option value="Alagoas" />
        <option value="Amazonas" />
        <option value="Bahia" />
        {/* Adicione os outros estados aqui */}
      </datalist>
    </div>
  );
}

export default Form;