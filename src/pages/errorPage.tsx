import { ErrorProps } from './errorPage.props';


export function ErrorPage ({error}: ErrorProps){
    return <div className="preloaderbox">
    <h1 className="preloader__text light">{error}</h1>
    <h2 className="preloader__text">Введіть вірні дані </h2>
    </div>;
   }
   
//    export default Preloader