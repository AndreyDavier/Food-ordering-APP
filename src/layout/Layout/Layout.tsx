import { FC } from 'react';
import styles from './Layout.module.scss';
import { Link, Outlet } from 'react-router-dom';
import Button from '../../components/Button/Button';

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
					<Link to="/" className={styles['link']}>
						<img src="/menuIcon.svg" alt="Menu" />
						Menu
					</Link>
					<Link to="/cart" className={styles['link']}>
						<img src="/cartIcon.svg" alt="Cart" />
						Корзина
					</Link>
				</div>

				<Button className={styles['exit']}>
					<img src="/exit-icon.svg" alt="exit" />
				</Button>
			</div>
			<div>
				<Outlet />
			</div>
		</div >
	);
};