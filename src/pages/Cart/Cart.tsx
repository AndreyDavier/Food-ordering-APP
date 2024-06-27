import { FC, useEffect, useState } from 'react';
import { Headling } from '../../components/Headling/Headling';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from "../../store/store";
import { CartItem } from '../../components/CartItem/CartItem';
import { Products } from '../../interfaces/product.interface';
import axios from 'axios';
import { PREFIX } from '../../helpers/Api';
import styles from './Cart.module.scss'
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../../store/cart.slice';

const DELIVERY_FEE: number = 169

export const Cart: FC = () => {
	const [cartProducts, setCartProducts] = useState<Products[]>([])
	const items = useSelector((s: RootState) => s.cart.items)
	const jwt = useSelector((s: RootState) => s.user.jwt)
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispath>()
	const total = items.map(i => {
		const product = cartProducts.find(p => p.id === i.id)

		if (!product) {
			return 0
		}

		return i.count * product.price
	}).reduce((acc, i) => acc += i, 0)

	const getItem = async (id: number) => {
		const { data } = await axios.get<Products>(`${PREFIX}/products/${id}`)
		return data
	}

	const loadAllItems = async () => {
		const res = await Promise.all(items.map(i => getItem(i.id)))
		setCartProducts(res)
	}

	const checkout = async () => {
		const { data } = await axios.post(`${PREFIX}/orders`, {
			products: items,
		}, {
			headers: {
				Authorization: `Bearer ${jwt}`
			}
		})
		dispatch(cartActions.clean())
		navigate("/success")

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
			<div className={styles["line"]}>
				<div className={styles["text"]}>Итог</div>
				<div className={styles["price"]}>{total}<span>&nbsp;₽</span></div>
			</div>
			<hr className={styles["hr"]} />
			<div className={styles["line"]}>
				<div className={styles["text"]} >Доставка</div>
				<div className={styles["price"]}>{DELIVERY_FEE}&nbsp;<span>₽</span></div>
			</div>
			<hr className={styles["hr"]} />
			<div className={styles["line"]}>
				<div className={styles["text"]}>Итог <span className={styles["total-count"]}>({items.length})</span></div>
				<div className={styles["price"]}>Итог {total + DELIVERY_FEE}&nbsp;<span>₽</span></div>
			</div>
			<div className={styles["checkout"]}>
				<Button appearence='big' onClick={checkout}>Оформить</Button>
			</div>
		</>
	);
};