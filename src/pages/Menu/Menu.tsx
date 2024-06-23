import { ChangeEvent, FC, useEffect, useState } from 'react';
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
	const [filter, setFilter] = useState<string>()

	useEffect(() => {
		getMenu(filter);
	}, [filter])

	const getMenu = async (name?: string) => {
		try {
			setIsLoading(true);
			await new Promise<void>((resolve) => {
				setTimeout(() => {
					resolve();
				}, 2000);
			});
			const { data } = await axios.get<Products[]>(`${PREFIX}/products`, {
				params: {
					name
				}
			});
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

	const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
		setFilter(e.target.value)
	}


	return (
		<>
			<div className={styles['head']} >
				<Headling>Menu</Headling>
				<SearchInput placeholder='Введите блюдо или состав' onChange={updateFilter} />
			</div >
			<div>
				{error && <>{error}</>}
				{!isLoading && products.length > 0 && < MenuList products={products} />}
				{isLoading && <>Загрузка....</>}
				{!isLoading && products.length === 0 && <>Не найдено</>}
			</div>
		</>

	);
};

export default Menu;