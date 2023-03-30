import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Hacker News</h1>
            <div className="nav-link">
                <NavLink to="/top" >
                    Top Stories
                </NavLink>
                <NavLink to="/new" >
                    Latest Stories
                </NavLink>
                <NavLink to="/best" >
                    Best Stories
                </NavLink>
            </div>
        </div>
    );
};

export default Header;