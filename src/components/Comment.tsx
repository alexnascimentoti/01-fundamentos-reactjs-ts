import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  OnDeleteComment: (comment: string) => void;
}

export function Comment({ content, OnDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  //closures -> acessa o valor anterior do state como parametro da arrow function
  function handleLikeCount(){
    setLikeCount((state) => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/diego3g.png'/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title='11 de Maio às 08:13h'dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
            </div>

            <button onClick={() => OnDeleteComment(content)} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}