import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './AuthLoyout.module.scss';

export const AuthLayout: FC = () => {
	return (
		<div className={styles['layout']}>
			<div className={styles['logo']}>
				<img src="/logo.svg" alt="Logo" />
			</div>
			<div className={styles['content']}>
				<Outlet />
			</div>
		</div>
	);
};
