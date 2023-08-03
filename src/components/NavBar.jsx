import React, {useState, useEffect} from 'react';

function NavBar() {
    const [sticky, setSticky] = useState(false);

    useEffect(() =>{
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
            console.log(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
    return (
        <nav className={`${sticky ? "sticky" : ""}`}> 
        <div className="nav-inner">
            <div className="links">
                <a href="#about_link">About Me</a>
                <a href="#friends_link">Friends + Family</a>
                <a href="#travel_link">Travel</a>
                <a href="#skating_link">Skating</a>
            </div>
        </div> 
        </nav>
    )
}

export default NavBar;