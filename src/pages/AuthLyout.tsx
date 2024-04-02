// import {Nav} from '../pages/navigator';
import {Outlet} from 'react-router-dom';
import { Back } from '../components/back';


export function AuthLayout () {


    return <div className='authlayout'>

        <div className='authlayout__logo'>
            <img className='authlayout__logo__img' src="/authlogo.svg" alt="" />
        <div className='navigatebox'>
        <Back/>
        </div>

        </div>
    
        <div className='authlayout__box'>
        <Outlet/>
        </div>
 
        </div>;

}