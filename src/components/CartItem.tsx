import { useDispatch } from 'react-redux';
import { CartItemProps } from './CartItem.props';
import { AppDispath } from '../store/store';
import { cartActions } from '../store/cartSlise';


export function CartItem (props: CartItemProps) {


    const {
        name,
        image,
        price,
        count,
    } = props;
    const priseUHG = ((price)/3).toFixed(2);
    
    const dispatch = useDispatch<AppDispath>();
    
    
 const increacse = ()=>{
    dispatch(cartActions.add(props.id));

 };

 const descrease = ()=>{
    dispatch(cartActions.remove(props.id));

 };

 const remove = ()=>{
    dispatch(cartActions.delete(props.id));
 };




    return  <div className="Cart-item">


    <div className="Cart-item__imgbox">
        <img className="Cart-item__imgbox__img" src={image} alt="foto" />
    </div>


    <div className="Cart-item__text">
    <h2> {name}</h2>
    <h2 className="light" >{priseUHG}<span>₴</span></h2>
    </div>
    <div className="Cart-item__boxcount">
    <div className="Cart-item__count">
            <button onClick={descrease} className='Cart-item__count__ring'>-</button>
            <h3 className='light'>{count}</h3>
            <button onClick={increacse} className='Cart-item__count__ring'>+</button>
    </div>
            <div className="Cart-item__delbox">
            <button onClick={remove} className='Cart-item__delbox__btn'>Del</button>
            </div>
    </div>


    </div>;
    


}