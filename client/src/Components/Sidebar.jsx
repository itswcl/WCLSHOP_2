import React from 'react';
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return <div className='col-1 position-fixed top-50 end-0 translate-middle-y mx-5'>
        <ul className="list-group">
            <Link to="/sneakers">
                <li className='list-group-item list-group-item-action'>
                    All
                </li>
            </Link>
            <Link to="/nike"><li className='list-group-item list-group-item-action'>Nike</li></Link>
            <Link to="/adidas"><li className='list-group-item list-group-item-action'>Adidas</li></Link>
            <Link to="/yeezy"><li className='list-group-item list-group-item-action'>Yeezy</li></Link>
            <Link to="/new_balance"><li className='list-group-item list-group-item-action'>New Balance</li></Link>
            <Link to="/other"><li className='list-group-item list-group-item-action'>Other</li></Link>
            <Link to="/reviews"><li className='list-group-item list-group-item-action'>Reviews</li></Link>
            <Link to="/reviews/add"><li className='list-group-item list-group-item-action'>Add Review</li></Link>
        </ul>
    </div>;
};

export default Sidebar;
