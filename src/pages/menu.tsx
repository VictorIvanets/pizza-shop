import {Heading} from '../components/Heading';
import {Search} from '../components/Search';
import { PREFIX } from './API';
import { Product } from './Product.interface';
import {ChangeEvent, useEffect, useState} from 'react';
import {Preloader} from '../pages/preloader';
import axios, { AxiosError } from 'axios';
import { MenuList } from './MenuList';
import { ErrorPage } from './errorPage';

export function Menu () {

    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | undefined>('');
    const [filter, setFilter] = useState<string>();


    const getMenu = async (name?: string) =>{
    try{
        const {data} = await axios.get<Product[]>(`${PREFIX}/products`, 
        {params: {
            name
        }
    });
        setProducts(data);
    }

    catch (e){
        if (e instanceof AxiosError){
            setError(`${e.message}`);
        }
        return;
        }
    };

    const updateFilter = (e: ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value);
        setFilter(e.target.value);
    };


    useEffect(()=>{
        getMenu(filter);
    },[filter]);



return <>
    <div className="rightpanel__menu">
    <Heading>Меню</Heading>
    <Search onChange={updateFilter} placeholder='Блюдо або склад'></Search></div>;

    <div className='rightpanel__menubox'>

    {!products.length && !filter ? <Preloader error={error}/> : 
        <MenuList products={products}/>
    }
    {!products.length && filter ? <ErrorPage error={'Такого товару немає'}/> : 
        <MenuList products={products}/>
    }

    </div>
    </>;
}

export default Menu;