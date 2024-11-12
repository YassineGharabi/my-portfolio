import {useState} from 'react';

export default function Header(){
    const [theme,settheme] = useState(false);
    const [responsive,setrespo] = useState(false);
    function hundletheme(){
        settheme(!theme);
    }
    function hundlerspo(){
        setrespo(!responsive);
    }
    return(
    <div className={theme?"dark-mode ":"light-mode "}>
            <nav className={theme?"dark-mode container":"light-mode container"}>
                <div className="logo">
                    <h1>my portfolio</h1>
                </div>
                <div className="menu">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>contact</li>
                    </ul>
                    <button className='toggle'  onClick={hundletheme}>{theme?<i className="fa-solid fa-sun"></i>:<i className="fa-solid fa-moon"></i>}</button>
                </div>
                <div className='menu-bars'  onClick={hundlerspo} >{responsive?<i class="fa-solid fa-xmark"></i>:<i class="fa-solid fa-bars"></i>}</div>
            </nav>
            {responsive&&            
            <div className='menu-phone'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Social Links</li>
                    </ul>
                </div>}
            </div>
            
          
    );
}