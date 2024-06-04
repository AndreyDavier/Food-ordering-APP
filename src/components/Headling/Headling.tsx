import { FC } from 'react';
import { HeadlingProps } from './Headling.props';
import cn from 'classnames';
import styles from './Headling.module.scss';

export const Headling: FC<HeadlingProps> = ({ children, className, ...props }) => {
	return (
		<h1 className={cn(className, styles['h1'])} {...props}>{children}</h1>
	);
};