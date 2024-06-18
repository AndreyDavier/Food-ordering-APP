import { FC, useEffect } from 'react';
import styles from './Layout.module.scss';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '../../store/store';
import { profile, userActions } from '../../store/user.slice';

export const Layout: FC = () => {
	const navigare = useNavigate();
	const dispatch = useDispatch<AppDispath>()
	const useProfile = useSelector((s: RootState) => s.user.progile)
	useEffect(() => {
		dispatch(profile())
	}, [dispatch])

	const logout = () => {
		dispatch(userActions.logout())
		navigare('/auth/login');
	};

	return (
		<div className={styles['layout']}>
			<div className={styles['sidebar']}>
				<div className={styles['user']}>
					<img src="/avatar.png" alt="Avatar" />
					<div className={styles['name']}>{useProfile?.anme}</div>
					<div className={styles['email']}>{useProfile?.email}</div>
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
