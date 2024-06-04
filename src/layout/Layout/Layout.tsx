import { FC } from 'react';
import styles from './Layout.module.scss';
import { NavLink, Outlet } from 'react-router-dom';
import Button from '../../components/Button/Button';
import cn from 'classnames';

export const Layout: FC = () => {
	return (
		<div className={styles['layout']}>
			<div className={styles['sidebar']}>
				<div className={styles['user']}>
					<img src="/avatar.png" alt="Avatar" />
					<div className={styles['name']}>
						Андрей Русланович
					</div>
					<div className={styles['email']}>newemail@mail.com</div>
				</div>
				<div className={styles['menu']}>
					<NavLink to="/" className={({ isActive }) => cn(styles['link'], {
						[styles.active]: isActive
					})}>
						<img src="/menuIcon.svg" alt="Menu" />
						Menu
					</NavLink>
					<NavLink to="/cart" className={({ isActive }) => cn(styles['link'], {
						[styles.active]: isActive
					})}>
						<img src="/cartIcon.svg" alt="Cart" />
						Корзина
					</NavLink>
				</div>

				<Button className={styles['exit']}>
					<img src="/exit-icon.svg" alt="exit" />
				</Button>
			</div>
			<div className={styles['contents']}>
				<Outlet />
			</div>
		</div >
	);
};