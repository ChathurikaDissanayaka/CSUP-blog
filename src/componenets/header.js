import Logo from '../componenets/img/logo.png';
import {Link} from 'react-router-dom';

function header({title, text}) {
    return (
        <div className="header-container">
            <div className="right-menu">
                <img src={Logo} alt=""></img>
                {/* <a href="/">CSUP BLOG</a> */}
                <Link to="/">CSUP BLOG</Link>
            </div>
            <div className="left-menu">
                <Link to="/">Home</Link>
                <Link to="/create" className="button-container">Add Post</Link>
                {/* <a href="/" >Home</a> */}
                {/* <a href="/create" className="button-container">Add Post</a> */}
                
            </div>
        </div>
    )
}

export default header
