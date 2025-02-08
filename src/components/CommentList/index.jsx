import { Comment } from "../Comment";
import { ReplyModal } from "../ModalReply";
import { Replies } from "../Replies";
import styles from "./commentlist.module.css";

export const CommentList = ({ comments = [] }) => {
  if (comments.length === 0) {
    return <p>Nenhum comentário ainda.</p>;
  }

  return (
    <section className={styles.comments}>
      <h2>Comentários</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
            <ReplyModal comment={comment} />
            <Replies />
          </li>
        ))}
      </ul>
    </section>
  );
};
