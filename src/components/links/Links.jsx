import arrayNavLinks from '../../data/array.js'
import './links.css';
const Links = ()=>{

    return (
        <>
            <ul className='links'>
            {arrayNavLinks.map((element) => {
                    return (
                        <li>{element}</li>
                    )
                })}
            </ul>
        </>
    )
}
export default Links;