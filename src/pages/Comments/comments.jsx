import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../style/Comments/comments.css';

const Comments = () => {
  const [comments, setComments] = useState([]); // Para armazenar os comentários
  const [loading, setLoading] = useState(true);  // Para controlar o carregamento

  // Função que faz a requisição para o backend
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/comments'); // URL da API no seu servidor
        setComments(response.data);
        setLoading(false); 
      } catch (error) {
        console.error('Erro ao buscar os comentários:', error);
        setLoading(false); 
      }
    };

    fetchComments(); // Chama a função que faz a requisição
  }, []); // O array vazio faz a requisição rodar uma única vez ao montar o componente

  if (loading) {
    return <div>Carregando comentários...</div>; // Exibe uma mensagem enquanto os dados são carregados
  }

  return (
    <div>
      <h1>Comentários dos Usuários</h1>

      <div id="comments-list">
        {comments.length === 0 ? (
          <p>Nenhum comentário encontrado.</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="comment">
              <h3>
                <pre>{comment.nome}, {comment.estado}</pre>
              </h3>
              <pre><strong>Festival:</strong> {comment.festival}</pre>
              <pre>{comment.comentario}</pre>
            </div>
          ))
        )}
      </div>

      <a href="/">Voltar para Home</a>
    </div>
  );
};

export default Comments;
