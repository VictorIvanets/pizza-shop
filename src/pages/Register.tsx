// import {Nav} from '../pages/navigator';
import { FormEvent, useEffect } from 'react';
import {Button} from '../components/Button';
import {Input} from '../components/input';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '../store/store';
import { userActions, register } from '../store/userSlice';




export type RegisterForm = {
    email: {
        value: string
    },
    password: {
        value: string
    },
    name: {
        value: string
    },
    phone: {
        value: string
    },
    address: {
        value: string
    }

    }





export function Register () {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispath>();
    const {jwt, registerErrorMass} = useSelector((s: RootState) => s.user);


    useEffect(()=>{
    if (jwt) {
        navigate('/start');
    }
    },[jwt, navigate]);


    const submit = async (e: FormEvent) => {
        e.preventDefault();
        dispatch(userActions.clearRegisterError());
        const target = e.target as typeof e.target & RegisterForm;
        const {email, password, name, phone, address} = target;
        dispatch(register({email: email.value, password: password.value, name: name.value, phone: phone.value, address: address.value}));
        
    };

    let errorUA: string | undefined = '';
    if (registerErrorMass === 'Request failed with status code 401')
    {errorUA = 'такий користувач вже зареєстрований';}
    else if (registerErrorMass === 'Network Error')
    {errorUA = 'Network Error / УВІМКНІТЬ VPN';}
    else {errorUA = registerErrorMass;}






    return <div className='authlayout__auth'>
        {registerErrorMass && <h3 className='marginbottom2 light upper'>{errorUA}</h3>}

        <h2 className='authlayout__auth__header'>Реєстрація</h2>


        <form onSubmit={submit} className='authlayout__auth__form'>

        <label className='authlayout__auth__label' htmlFor="name">Name</label>
        <Input id='name' name='name' placeholder='Name'></Input>

        <label className='authlayout__auth__label' htmlFor="name">Phone</label>
        <Input id='phone' name='phone' placeholder='Phone'></Input>

        <label className='authlayout__auth__label' htmlFor="name">Address</label>
        <Input id='address' name='address' placeholder='address'></Input>

        <label className='authlayout__auth__label' htmlFor="mail">Mail</label>
        <Input id='email' name='email' placeholder='E-mail'></Input>

        <label className='authlayout__auth__label' htmlFor="password">Password</label>
        <Input id='password' name='password' type='password' placeholder='Password'></Input>
        <Button appearence='big'>Реєструвати</Button>
        </form>




        
        <Link className='light upper' to='/auth/login'>Маю аккаунт</Link>
        </div>;

}