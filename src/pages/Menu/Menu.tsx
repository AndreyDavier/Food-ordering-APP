import { FC } from 'react';
import { Headling } from '../../components/Headling/Headling';
import SearchInput from '../../components/SearchInput/SearchInput';
import styles from './Menu.module.scss';

export const Menu: FC = () => {
	return (
		<div className={styles['head']} >
			<Headling>Menu</Headling>
			<SearchInput placeholder='Введите блюдо или состав' />
		</div >
	);
};