import TitoloApp from "../titoloApp/TitoloApp";
const Welcome = ()=> {
    return(
        <>
            <TitoloApp/>
            {window.alert('Welcome')}   
        </>
    )
}
export default Welcome;