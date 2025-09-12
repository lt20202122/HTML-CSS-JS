import React from 'react';

function Nav() {
    return (
        <nav>
            <ul>
                <li><button id="dropdownOne">About us</button>
                    <div id="menuOne">
                        <a link="about.html#team">Team</a>
                        <a link="about.html#foundation">Foundation</a>
                        <a link="about.html#employees">Our employees</a>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;