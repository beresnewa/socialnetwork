import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import { Link } from 'react-router-dom';

import './style.css';
import '../../components/Card/style.css'


const ProfilePage = (props) => {

    const [ userData, setUserData ] = useState(null);

    useEffect(()=>{
        const getUser = async () => {
            const response = await axios.get(`https://serverless-backend-ky9b8rmuq.now.sh/api/users/${props.match.params.index}`);
            setUserData(response.data);
        }
            getUser();
        
    }, [props.match.params.index]);

    const renderFriends = () => {
        
        return userData?.friends.map(item => {
            return (
                <div className="card any">
                    <Link
                        key = {item._id}
                        to = {`/users/${item.index}`}
                    >
                        <Card 
                            picture = {item.picture}
                            name = {item.name}
                            index = {item.index}
                        />
                    </Link>
                </div>
            )
        })
        

    }

    return (
        
        <div className="page">
          
            <span className='textAboutMe'> {`About ${userData?.name.first}`} </span>
            <span className='textAboutUser'>{userData?.about}</span>
            <span className="textMyFriends">{`${userData?.name.first}'s friends`}</span>
            <div className="container-users">
                {renderFriends()}
            </div>
        </div>

    );
}

export default ProfilePage;

// изменения:)