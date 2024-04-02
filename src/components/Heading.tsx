import {HeadingProps} from './Heading.props';
import { Back } from './back';

export function Heading ({children, ...props}: HeadingProps) {

return <>
<div>
    <h1 className='upper light' {...props}>{children}</h1>
    <Back/>
</div>
    </>;

}