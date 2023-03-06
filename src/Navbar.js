import Logo from './images/earth.png'
function Navbar(){
    return(
        <div className="navbar">
            <img src={Logo} width="40"></img>
            <h2>My Travel Journel</h2>
        </div>
    )
}
export default Navbar;