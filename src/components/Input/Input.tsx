import { forwardRef } from 'react';
import styles from './Input.module.scss';
import cn from 'classnames';
import { InputProps } from './Input.props';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ classNames, isValid = true, ...props }, ref) {
	return (
		<>
			<input {...props} ref={ref} className={cn(styles['input'], classNames, {
				[styles['invalid']]: !isValid
			})} />
		</>
	);
});

export default Input;