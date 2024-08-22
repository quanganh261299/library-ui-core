import { FC } from "react";
import styles from './button.module.css';

interface StyledButtonProps {
  primary?: boolean;
  size?: 'small' | 'large';
  children?: React.ReactNode;
}

export const Button: FC<StyledButtonProps> = (props) => {
  const { primary, size, children, ...rest } = props;

  const buttonClassName = `${styles.button} ${primary ? styles.primary : styles.secondary} ${size ? styles[size] : ''}`;

  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  );
};