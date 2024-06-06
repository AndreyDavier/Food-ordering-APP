import { FC, useEffect, useState } from 'react';
import { Headling } from '../../components/Headling/Headling';
import SearchInput from '../../components/SearchInput/SearchInput';
import styles from './Menu.module.scss';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { PREFIX } from '../../helpers/Api';
import { Product } from '../../interfaces/product.interface';
import axios from 'axios';

export const Menu: FC = () => {

	const [products, setProducts] = useState<Product[]>([]);

	const getMenu = async () => {
		try {
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
			setProducts(data);
		} catch (e) {
			console.error(e);
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
				{products.map(p => (
					<ProductCard
						key={p.id}
						id={p.id}
						name={p.name}
						description={p.ingredients.join(', ')}
						rating={p.rating}
						price={p.price}
						image={p.image}
					/>
				))}

			</div>
		</>

	);
};