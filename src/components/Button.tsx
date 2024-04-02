import { ButtonProps } from './Button.props';
import cn from 'classnames';


export function Button({children, className, appearence = 'small', ...props}: ButtonProps) {

  return  <div className='btnbox'>
    <button className={cn('btn', className, {'small': appearence === 'small', 'big': appearence === 'big',})} {...props}>{children}</button>
    </div>;
  
}

