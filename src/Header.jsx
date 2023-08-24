import logo from './Images/logo192.png'

const Header = () =>
{
    return(
    <div className="pt-3 py-1 pl-2" style={{backgroundColor:"black"}}>
        <img alt="header" src={logo} style={{height:"35px", verticalAlign: "top"}}/>
        <span className="h2 pt-4 text-white-50">Countopedia</span>
    </div>
    );
}

export default Header;