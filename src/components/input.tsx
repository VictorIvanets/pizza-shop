import cn from 'classnames';
import { forwardRef } from 'react';
import { InputProps } from './input.props';




 export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({isValid = true, className, ...props}, ref) {

       return  <input
       ref={ref}
       className={cn('input', className, {'invalid': !isValid})}
       {...props}

  />;
        
    
    
  
 
  
}
 );

