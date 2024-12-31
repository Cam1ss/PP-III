// frontend/src/Comments.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Comments() {
  const [comments, setComments] = useState([]);  // Armazena os comentários

  // Função para buscar os comentários
  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await axios.get('/api/comments');
        console.log('Comentários recebidos:', response.data);  // Log dos dados para verificar
        setComments(response.data);  // Atualiza o estado com os comentários
      } catch (error) {
        console.error('Erro ao carregar comentários:', error);
      }
    }

    fetchComments();  // Chama a função quando o componente for montado
  }, []);  // O array vazio faz com que a requisição seja feita apenas uma vez, quando o componente for montado

  return (
    <div>
      <h2>Comentários</h2>
      {comments.length === 0 ? (
        <p>Nenhum comentário encontrado.</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment._id}>
              <p><strong>Nome:</strong> {comment.nome}</p>
              <p><strong>Estado:</strong> {comment.estado}</p>
              <p><strong>Festival:</strong> {comment.festival}</p>
              <p><strong>Comentário:</strong> {comment.comentario}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Comments;
