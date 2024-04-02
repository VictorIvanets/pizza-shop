import { useDispatch, useSelector } from 'react-redux';
import {Heading} from '../components/Heading';
import { AppDispath, RootState } from '../store/store';
import { CartItem } from '../components/CartItem';
import { useEffect, useState } from 'react';
import { Product } from './Product.interface';
import axios from 'axios';
import { PREFIX } from './API';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../store/cartSlise';


export function Cart () {

const [cartProducts, setCartProducts] = useState<Product[]>([]);
const cartitem = useSelector((s: RootState)=> s.cart.items);
const navigate = useNavigate();
const dispatch = useDispatch<AppDispath>();


const getItem = async (id: number) =>{
        const {data} = await axios.get<Product>(`${PREFIX}/products/${id}`);
        return data;
    };

const loadAllItem = async () =>{
        const res = await Promise.all(cartitem.map(i=> getItem(i.id))); 
        setCartProducts(res);
    };

    useEffect (()=>{
        loadAllItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cartitem]);


    const checkout = ()=>{
        const order = JSON.stringify(cartitem);
        localStorage.setItem('order', order);
        dispatch(cartActions.clean());
        navigate('/success');
    };





const priceUa = 
         cartitem.map(i=>{
            const product = cartProducts.find(p=>p.id === i.id);
            if (!product){
                return 0;
            } 
                return i.count * product.price;
        }).reduce((acc, i)=> acc += i, 0)/3;



    return <div className="rightpanel__cart">
    <Heading>Замовлення</Heading>
    {cartitem.map(i=>{
        const product = cartProducts.find(p=>p.id === i.id);
        if (!product){
            return;
        } 
            return <CartItem key={product.id} count={i.count} {...product}/>;
    })}
    <div className="rightpanel__cart__orderbox">
    <div className='rightpanel__cart__order'><h3>Загальна вартість</h3>
    <h3>{priceUa.toFixed(2)} грн.</h3></div>
    <div className='rightpanel__cart__order'><h3>Доставка</h3><h3>{((priceUa/12).toFixed(2))} грн.</h3></div>
    <div className='rightpanel__cart__order'><h3>Замовлено <span className='light fontsize2rem'>{cartitem.length}</span> шт, на суму <span className='light fontsize2rem'>{((priceUa)+(priceUa/12)).toFixed(2)}</span> грн. </h3>
    <Button onClick={checkout} appearence='small'>Замовити</Button>
    </div>
    </div>
    

    </div>;
} 