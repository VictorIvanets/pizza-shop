import {Link} from 'react-router-dom';

export function SuccessPage () {


return <>
<div className="startpage">

<h1 className="light">Вітаємо!</h1>
<h1>Ви оформили замовлення!</h1>
<div className="startpage__imgbox">
    <img className="startpage__img" src="/success-11.png" alt="" />
</div>
<h1 className='tacenter'>Замовляйте <Link className='light' to ="/menu">ще</Link></h1>

</div>

</>;

}