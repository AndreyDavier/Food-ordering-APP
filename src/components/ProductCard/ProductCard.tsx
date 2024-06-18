import { FC } from 'react';
import styles from './ProductCard.module.scss';
import { ProductCardProps } from './ProductCard.props';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

export const ProductCard: FC<ProductCardProps> = (props) => {

	const dispatch = useDispatch<AppDispath>()

	const add = (e: MouseEvent) => {
		e.preventDefault
		dispatch(cartActions.add(props.id))
	}
	
	return (
		<Link to={`/product/${props.id}`} className={styles['link']}>
			<div className={styles['card']}>
				<div
					className={styles['head']}
					style={{ backgroundImage: `url(${props.image})` }}
				>
					<div className={styles['price']}>
						{props.price}&nbsp;
						<span className={styles['currency']}>₽</span>
					</div>
					<button className={styles['add-to-cart']} onClick={add}>
						<img src="/cartButton-icon.svg" alt="" />
					</button>
					<div className={styles['rating']}>
						{props.rating}&nbsp;
						<img src="/star-icon.svg" alt="" />
					</div>
				</div>
				<div className={styles['footer']}>
					<div className={styles['title']}>{props.name}</div>
					<div className={styles['description']}>{props.description}</div>
				</div>
			</div>
		</Link>
	);
};
