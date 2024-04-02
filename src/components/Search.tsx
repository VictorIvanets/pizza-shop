import cn from 'classnames';
import { forwardRef } from 'react';
import { SearchProps } from './Search.props';




 export const Search = forwardRef<HTMLInputElement, SearchProps>(function Search({isValid = true, className, ...props}, ref) {

       return <div className='search'>
        <img className='search__icon' src="search-05.png" alt="search" />
        <input
       ref={ref}
       className={cn('input', className, {'invalid': !isValid})}
       {...props}

  />;
        
        </div>;
    
  
 
  
}
 );

