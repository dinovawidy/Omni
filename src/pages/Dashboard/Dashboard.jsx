import Cookies from 'js-cookie';
import React from 'react';

const Dashboard = () => {
    const username = Cookies.get("username")
    return (
        <div>
            <p className='mb-3'>Wellcome to Omnichannel Digital Center - {username}.</p>

        </div>
    );
};

export default Dashboard;