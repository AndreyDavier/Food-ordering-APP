import { FC, useEffect, useState } from 'react';
import { Headling } from '../../components/Headling/Headling';
import { useSelector } from 'react-redux';
import { RootState } from "../../store/store";
import { CartItem } from '../../components/CartItem/CartItem';
import { Products } from '../../interfaces/product.interface';
import axios from 'axios';
import { PREFIX } from '../../helpers/Api';
import styles from './Cart.module.scss'

export const Cart: FC = () => {
	const [cartProducts, setCartProducts] = useState<Products[]>([])
	const items = useSelector((s: RootState) => s.cart.items)

	const getItem = async (id: number) => {
		const { data } = await axios.get<Products>(`${PREFIX}/products/${id}`)
		return data
	}

	const loadAllItems = async () => {
		const res = await Promise.all(items.map(i => getItem(i.id)))
		setCartProducts(res)
	}

	useEffect(() => {
		loadAllItems()
	}, [items])


	return (
		<>
			<Headling className={styles["headling"]}>Корзина</Headling >
			{
				items.map(i => {
					const product = cartProducts.find(p => p.id === i.id)

					if (!product) {
						return
					}

					return <CartItem key={product.id} count={i.count} {...product} />
				})
			}
		</>
	);
};