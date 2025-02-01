import styles from "./iconbutton.module.css";

export const IconButton = ({ children, ...rest }) => {
  return (
    // Usar o rest dentro do botão permite que seja mais fácil receber eventos como onClick, onChange e qualquer atributo
    <button {...rest} className={styles.btn}>
      {children}
    </button>
  );
};
