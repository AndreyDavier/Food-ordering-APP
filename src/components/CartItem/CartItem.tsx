import { FC } from 'react';
import styles from './CartItem.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
import { CartItemProps } from './CartItem.props';

export const CartItem: FC<CartItemProps> = (props) => {

    const dispatch = useDispatch<AppDispath>()

    const increase = () => {
        dispatch(cartActions.add(props.id))
    }

    const remove = () => {
        dispatch(cartActions.delete(props.id))
    }

    const descrease = () => {
        dispatch(cartActions.remove(props.id))
    }


    return (
        <div className={styles['item']}>
            <div className={styles["image"]} style={{ background: `url(""${props.image})` }}></div>
            <div className={styles['description']}>
                <div className={styles["name"]}>{props.name}</div>
                <div className={styles['price']}>{props.price}&nbsp;</div>
            </div>
            <div className={styles["actions"]}>
                <button className={styles['minus']} onClick={descrease}>
                    <img src="/minus.svg" alt="" />
                </button>
                <div className={styles["number"]}>{props.count}</div>
                <button className={styles["plus"]} onClick={increase}>
                    <img src="/plus.svg" alt="" />
                </button>
                <button className={styles["remove"]} onClick={remove}>
                    <img src="/crossDelete.svg" alt="" />
                </button>
            </div>
        </div>
    );
};
