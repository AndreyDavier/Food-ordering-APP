import { FC } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import cn from 'classnames';

const Button: FC<ButtonProps> = ({ children, appearence = 'small', className, ...props }) => {
	return (
		<button className={cn(styles['button'], styles['accent'], className, { [styles['small']]: appearence === 'small', [styles['big']]: appearence === 'big' })} {...props}>{children}</button>
	);
};

export default Button;