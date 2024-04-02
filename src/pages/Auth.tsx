// import {Nav} from '../pages/navigator';
import { Link, useNavigate } from 'react-router-dom';
import {Button} from '../components/Button';
import {Input} from '../components/input';
import { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '../store/store';
import { login, userActions } from '../store/userSlice';


export type LoginForm = {
email: {
    value: string
},
password: {
    value: string
},


}

export function Auth () {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispath>();
    const {jwt, loginErrorMass} = useSelector((s: RootState) => s.user);


    useEffect(()=>{
    if (jwt) {
        navigate('/start');
    }
    },[jwt, navigate]);


    const submit = async (e: FormEvent) => {
        e.preventDefault();
        dispatch(userActions.clearLoginError());
        const target = e.target as typeof e.target & LoginForm;
        const {email, password} = target;
        await sendLogin(email.value, password.value);
    };



    const sendLogin = async (email: string, password: string)=> {
        dispatch(login({email, password}));
    };

    let errorUA: string | undefined = '';
    if (loginErrorMass === 'Request failed with status code 401')
    {errorUA = 'помилка. невірний логін або пароль';}
    else if (loginErrorMass === 'Request failed with status code 400')
    {errorUA = 'помилка. введіть корpектно e-mail';}
    else if (loginErrorMass === 'Network Error')
    {errorUA = 'Network Error / УВІМКНІТЬ VPN';}
    else {errorUA = loginErrorMass;}



    return <div className='authlayout__auth'>
        <p className='authlayout__auth__header light'>Увімкніть VPN, API з домена "ру"</p>
        <h2 className='authlayout__auth__header'>Вхід</h2>
        {loginErrorMass && <h3 className='marginbottom2 light upper'>{errorUA}</h3>}
    <form onSubmit={submit} className='authlayout__auth__form'>

        <label className='authlayout__auth__label' htmlFor="mail">mail</label>
        <Input name='email' id='mail' placeholder='mail'></Input>

        <label className='authlayout__auth__label' htmlFor="password">password</label>
        <Input name='password' type='password' id='password' placeholder='password'></Input>

        <Button appearence='big'>Вихід</Button>

    </form>

     
        <h3 className='tacenter'>Увійдіть, або <Link className='light' to='/auth/register'>зареєструйтеся</Link></h3>
        </div>;

       


}