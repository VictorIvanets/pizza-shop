import {PreloaderProps} from './preloader.props';


export function Preloader ({error}: PreloaderProps){
    return <div className="preloaderbox">
    <div className="preloader"></div>;
    <h3 className="preloader__text">Потрібно увімкнути VPN <br />Та/Або дочекайтесть відповіді</h3>
    <h1 className="preloader__text light">{error}</h1>
    </div>;
   }
   
//    export default Preloader