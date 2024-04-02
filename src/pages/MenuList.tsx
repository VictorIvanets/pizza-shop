import { GoodsCard } from './GoodsCard';
import {MenuListProps} from './MenuList.props';

export function MenuList({products}: MenuListProps){

    return products.map(p => (
        <GoodsCard 
        key={p.id}
        name={p.name} 
        ingredients={p.ingredients.join(', ')} 
        image={p.image} 
        price={p.price} 
        rating={p.rating} 
        id={p.id}/>
        ));

}