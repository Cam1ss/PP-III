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

    fetchComments(); 
  }, []); 

  if (loading) {
    return <div className='loading'> 
    <div className="spinner"></div>
    <h1>Carregando comentários...</h1>
    </div>; 
  }

  return (
    <div className='main-container'>
      <h1>Comentários dos Usuários</h1>
      <p className="comment-contador">Total de comentários: {comments.length}</p> 
      {/* contador de comentarios*/}

      <div id="comments-list">
        {comments.length === 0 ? (
          <div className='erro'>
            <p>Nenhum comentário encontrado =(</p>
            </div>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="comment">

              <div className='user'>
              <i class="bi bi-person-fill"></i>
                <h3>{comment.nome}, {comment.estado}</h3>
              </div>

                  <div className='fundo-info'>
                      <div className='festival'>
                      <h3>Sugestão de Festival :</h3> <p>{comment.festival}</p>
                      </div>

                      <div className='comentario'>
                      <h3>Cometário :</h3> <p>{comment.comentario}</p>
                      </div>
                  </div>
                  
            </div>
          ))
        )}
      </div>

      <a className='voltar' href="/">
      <i class="bi bi-arrow-left-square"></i>
      <p>Voltar para Home</p>
      </a>

    </div>
  );
};

export default Comments;
