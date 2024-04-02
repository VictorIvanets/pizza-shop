import { Await, useLoaderData } from 'react-router-dom';
import { Product } from './Product.interface';
import { Preloader } from './preloader';
import { Suspense } from 'react';
import { Back } from '../components/back';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlise';
import { AppDispath } from '../store/store';

export function Product () {
const data = useLoaderData() as {data: Product};
const dispatch = useDispatch<AppDispath>();


return <>
<Suspense fallback={<Preloader error={'Йде завантаження'}/>}>
<Await resolve={data.data}>

{({data}: {data: Product}) =>(

<>
{!data ? <Preloader error={'Помилка! Такої сторінки немає'}/> :

<div className="goodscardbig">
<div className="goodscardbig__text">
        <h1 className='marginbottom2 bold light'>{data.name}</h1>
        <h3  className='marginbottom2'>{(data.ingredients.join(', '))}</h3>
</div>
<div className="goodscardbig__imgbox">

            <img className="goodscardbig__imgbox__img" src={data.image} alt="foto" />

            <div className="goodscardbig__imgbox__price">
                <h2 className="dark" >{((data.price)/3).toFixed(2)}<span>₴</span></h2>
            </div>

            <div className="goodscardbig__imgbox__raiting">
                <p className="dark bold">{data.rating}</p>
                <img className="goodscardbig__imgbox__raiting__icon" src="/star-06.svg" alt="star" />
            </div>

            <button onClick={(e)=>{e.preventDefault(); dispatch(cartActions.add(data.id));}} className="goodscardbig__imgbox__cart">
                <img className="goodscardbig__imgbox__cart__icon" src="/Left-icon-03.png" alt="cart" />
            </button>
</div>
<div className='taright'>
<Back/>
</div>
</div>
}
</>
)
}
</Await>
</Suspense>
</>;
}