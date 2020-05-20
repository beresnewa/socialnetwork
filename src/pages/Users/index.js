import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import './style.css'
import { Link } from 'react-router-dom';

const UsersPage = () => {

    const [users, setUsers] = useState ([]);

    useEffect(() => {

        const getUsers = async () => {
            const response = await axios.get('https://serverless-backend-ky9b8rmuq.now.sh/api/users')
            // console.log(response);
            setUsers(response.data);
        }
        getUsers();

    }, []);

    return (
        <div className="page">
            <div className ="page-users">
                {users.map((item, i)=>{
                    return (
                        <Link
                            key={item._id}
                            to={`/users/${item.index}`}
                        >
                            <Card 
                                picture = {item.picture}
                                name = {item.name}
                                index = {item.index}
                            />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default UsersPage;