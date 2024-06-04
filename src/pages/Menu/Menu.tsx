import { FC } from 'react';
import { Headling } from '../../components/Headling/Headling';
import SearchInput from '../../components/SearchInput/SearchInput';
import styles from './Menu.module.scss';
import { ProductCard } from '../../components/ProductCard/ProductCard';

export const Menu: FC = () => {
	return (
		<>
			<div className={styles['head']} >
				<Headling>Menu</Headling>
				<SearchInput placeholder='Введите блюдо или состав' />
			</div >
			<div>
				<ProductCard
					id={1}
					title='Наслаждение'
					description='Салями, руккола, помидоры, оливки'
					rating={4.5}
					price={300}
					image='/product.png'
				/>
			</div>
		</>

	);
};