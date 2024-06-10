import { FC, useEffect, useState } from 'react';
import { Headling } from '../../components/Headling/Headling';
import SearchInput from '../../components/SearchInput/SearchInput';
import styles from './Menu.module.scss';
import { PREFIX } from '../../helpers/Api';
import { Products } from '../../interfaces/product.interface';
import axios, { AxiosError } from 'axios';
import { MenuList } from './MenuList/MenuList';

export const Menu: FC = () => {

	const [products, setProducts] = useState<Products[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	const getMenu = async () => {
		try {
			setIsLoading(true);
			await new Promise<void>((resolve) => {
				setTimeout(() => {
					resolve();
				}, 2000);
			});
			const { data } = await axios.get<Products[]>(`${PREFIX}/products`);
			setProducts(data);
			setIsLoading(false);
		} catch (e) {
			console.error(e);
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setIsLoading(false);
			return;
		}
	};

	useEffect(() => {
		getMenu();
	}, []);

	return (
		<>
			<div className={styles['head']} >
				<Headling>Menu</Headling>
				<SearchInput placeholder='Введите блюдо или состав' />
			</div >
			<div>
				{error && <>{error}</>}
				{!isLoading && <MenuList products={products} />}
				{isLoading && <>Загрузка....</>}
			</div>
		</>

	);
};

export default Menu;