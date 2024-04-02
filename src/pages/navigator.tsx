import { useSelector } from 'react-redux';
import {NavLink } from 'react-router-dom';
import { RootState } from '../store/store';



export function Nav () {
        // const items = useSelector((s: RootState)=> s.cart.items);
        // const cartitem = items.reduce((acc, item)=> acc += item.count, 0);

        const cartitem = (useSelector((s: RootState)=> s.cart.items)).reduce((acc, item)=> acc += item.count, 0);

    
    return <div className="navigator">

    <NavLink to='/menu' className="deschidden navigator__item">
    <img className="navigator__item__img" src="/Left-icon-02.png" alt="" />
            Меню</NavLink>
    <NavLink to='/cart' className="navigator__item">
            <img className="navigator__item__img" src="/Left-icon-03.png" alt="" />
        Корзина        <p className='navigator__item__cartitem colorLight'>{cartitem}</p>
</NavLink>
    <NavLink to='/main-menu' className="mobilhidden navigator__item">
    <img className="navigator__item__img" src="/Left-icon-02.png" alt="" />
            Меню</NavLink>
            

<NavLink to='/auth/login' className="navigator__item">
    <img className="navigator__item__img" src="/Left-icon-02.png" alt="" />
            Увійти</NavLink>
<NavLink to='/auth/register' className="navigator__item">
    <img className="navigator__item__img" src="/Left-icon-02.png" alt="" />
            Pеєстрація</NavLink>
    </div>;
}