import {Link} from 'react-router-dom';

export function StartPage () {


return <>
<div className="startpage">

<h1 className="light">Вітаємо!</h1>
<h1>Ласкаво просимо у наш магазин</h1>
<div className="startpage__imgbox">
    <img className="startpage__img" src="/startimg.svg" alt="" />
</div>
<h1 className='tacenter'>Зробіть свій вибір у <Link className='light' to ="/menu">меню</Link></h1>

</div>

</>;

}