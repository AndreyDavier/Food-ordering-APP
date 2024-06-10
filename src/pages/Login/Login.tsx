import { FC } from 'react';
import { Headling } from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';

export const Login: FC = () => {
	return (
		<div className={styles['login']}>
			<Headling>Вход</Headling>
			<form className={styles['form']}>
				<div className={styles['field']}>
					<label htmlFor="">Ваш email</label>
					<Input id="email" placeholder="Email" />
				</div>
				<div className={styles['field']}>
					<label htmlFor="">Ваш пароль</label>
					<Input id="password" type="password" placeholder="Password" />
				</div>
				<Button appearence="big">Вход</Button>
			</form>
			<div>
				<div>Нет аккаунта</div>
				<Link to="/auth/register">Зарегистрироваться</Link>
			</div>
		</div>
	);
};
