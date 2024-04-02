import { useNavigate } from 'react-router-dom';

export function Back () {
    const navigate = useNavigate();

return <>
<div>
    <button className='btnnavigate' onClick={()=>navigate(-1)}>
        <img className='btnnavigate__img' src="/back-02.svg" alt="BACK" />
    </button>
</div>
    </>;

}