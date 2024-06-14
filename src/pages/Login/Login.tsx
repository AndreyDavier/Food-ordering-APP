import { FC, FormEvent, useState } from 'react';
import { Headling } from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import axios, { AxiosError } from 'axios';
import { PREFIX } from '../../helpers/Api';
import { LoginRespons } from '../../interfaces/auth.interface';

interface LoginForm {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
}

export const Login: FC = () => {
	const [error, setError] = useState<string | undefined>();
	const navigate = useNavigate();

	const sumbit = async (e: FormEvent) => {
		e.preventDefault;
		setError(undefined);
		const target = e.target as typeof e.target & LoginForm;
		const { email, password } = target;
		await sendLogin(email.value, password.value);
	};

	const sendLogin = async (email: string, password: string) => {
		try {
			const { data } = await axios.post<LoginRespons>(`${PREFIX}/auth/login`, {
				email,
				password
			});

			console.log(data);
			localStorage.setItem('jwt', data.access_token);
			navigate('/');
		} catch (e) {
			if (e instanceof AxiosError) {
				setError(e.response?.data.message);
			}
		}
	};

	return (
		<div className={styles['login']}>
			{error && <div className={styles['error']}></div>}

			<Headling>Вход</Headling>
			<form className={styles['form']} onSubmit={sumbit}>
				<div className={styles['field']}>
					<label htmlFor="">Ваш email</label>
					<Input
						id="email"
						autoComplete="email"
						name="email"
						placeholder="Email"
					/>
				</div>
				<div className={styles['field']}>
					<label htmlFor="">Ваш пароль</label>
					<Input
						id="password"
						name="password"
						type="password"
						placeholder="Password"
						autoComplete="password"
					/>
				</div>
				<Button appearence="big">Вход</Button>
			</form>
			<div className={styles['links']}>
				<div>Нет аккаунта</div>
				<Link to="/auth/register">Зарегистрироваться</Link>
			</div>
		</div>
	);
};
