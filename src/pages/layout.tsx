import {Nav} from '../pages/navigator';
import {Outlet, useNavigate} from 'react-router-dom';
import {Button} from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '../store/store';
import { getProfile, userActions } from '../store/userSlice';
import { useEffect } from 'react';

export function Layout () {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispath>();
    const profile = useSelector((s: RootState)=> s.user.profile);
    // const items = useSelector((s: RootState)=> s.cart.items);
    // console.log(items.reduce((acc, item)=> acc += item.count, 0));

    // console.log(profile?.id);

    useEffect(()=>{
        dispatch(getProfile());
    }, [dispatch]);

    function Exit () {
        dispatch(userActions.logout());
        navigate('/auth/login');
    }


    let fotoProfile: string = '';

    if (profile?.name === 'Віктор') {
        fotoProfile = '/user--02.png';
    } else if (profile?.name === 'Василий') {
        fotoProfile = '/user--05.png';
    } else if (profile?.name === 'Victor') {
        fotoProfile = '/user--02.png';
    } else {
        fotoProfile = '/user--01.png';
    }
    
    
    

    return <main className='app'>
    <div className='leftpanel'>




                <div className='leftpanel__logo'>
                <img src="/Logo2-03.svg" alt="" />
                </div>
                
<div className='leftpanel__user'>

    <div className='leftpanel__user__foto'>
        <img src={fotoProfile} alt="user-foro" />
    </div>
    <div className='leftpanel__user__text'>
        <h2 className=''>{profile?.name}</h2>
        <p className='light '>{profile?.email}</p>
        <p className=''>ID: {profile?.id}</p>
        <p className=''>Місто: {profile?.address}</p>
        <p className='light '>Тел: {profile?.phone}</p>
    </div>
    
</div>
                <Nav/>
                <div className='leftpanel__btn'>
                <Button onClick={Exit} appearence='small'> <img src="/close-04.png" alt="exit" /> Вихід</Button>
                </div>
            </div>
  


        <div className='rightpanel'>

        <Outlet/>
        
        </div>

            </main>;

}