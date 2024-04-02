import { Link } from 'react-router-dom';
import {GoodsCardProps} from './GoodCard.props';
import { MouseEvent } from 'react';
import { cartActions } from '../store/cartSlise';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../store/store';

export function GoodsCard (props: GoodsCardProps ) {

const {
    name,
    ingredients,
    image,
    price,
    rating,
    id,
} = props;
const priseUHG = ((price)/3).toFixed(2);

const dispatch = useDispatch<AppDispath>();

const add = (e: MouseEvent)=>{
    e.preventDefault();
    dispatch(cartActions.add(id));
};



return <>
<Link to={`/product/${id}`} className='linkcard'>

<div className="goodscard">
<div className="goodscard__imgbox">

            <img className="goodscard__imgbox__img" src={image} alt="foto" />

            <div className="goodscard__imgbox__price">
                <h2 className="dark" >{priseUHG}<span>₴</span></h2>
            </div>

            <div className="goodscard__imgbox__raiting">
                <p className="dark bold">{rating}</p>
                <img className="goodscard__imgbox__raiting__icon" src="/star-06.svg" alt="star" />
            </div>

            <button onClick={add} className="goodscard__imgbox__cart">
                <img className="goodscard__imgbox__cart__icon" src="/Left-icon-03.png" alt="cart" />
            </button>

</div>
<div className="goodscard__text">
        <h2>{name}</h2>
        <p>{ingredients}</p>
</div>
</div>

</Link>





</>;

}