import { FC } from 'react';
import styles from './Layout.module.scss';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { userActions } from '../../store/user.slice';

export const Layout: FC = () => {
	const navigare = useNavigate();
	const dispatch = useDispatch<AppDispatch>()

	const logout = () => {
		dispatch(userActions.logout())
		navigare('/auth/login');
	};

	return (
		<div className={styles['layout']}>
			<div className={styles['sidebar']}>
				<div className={styles['user']}>
					<img src="/avatar.png" alt="Avatar" />
					<div className={styles['name']}>Андрей Русланович</div>
					<div className={styles['email']}>newemail@mail.com</div>
				</div>
				<div className={styles['menu']}>
					<NavLink
						to="/"
						className={({ isActive }) =>
							cn(styles['link'], {
								[styles.active]: isActive
							})
						}
					>
						<img src="/menuIcon.svg" alt="Menu" />
						Menu
					</NavLink>
					<NavLink
						to="/cart"
						className={({ isActive }) =>
							cn(styles['link'], {
								[styles.active]: isActive
							})
						}
					>
						<img src="/cartIcon.svg" alt="Cart" />
						Корзина
					</NavLink>
				</div>

				<Button className={styles['exit']} onClick={logout}>
					<img src="/exit-icon.svg" alt="exit" />
					Выход
				</Button>
			</div>
			<div className={styles['contents']}>
				<Outlet />
			</div>
		</div>
	);
};
