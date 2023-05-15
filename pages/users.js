import Link from "next/link";
import MainContainer from "../Components/MainContainer";
import axios from "axios";
import { useState, useEffect } from "react";


const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }, []) 

    return (
        <MainContainer keywords={"users"}>
            <h1 className="users_title">Users</h1>
            <ul className="users">
                {users.map(user => 
                    <li key={user.id}>
                        <Link legacyBehavior href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link >
                    </li>
                )}
            </ul>
            <style>
                {`
                    .users_title {
                        margin: 30px;
                    }
                    .users {
                        margin-left: 50px;
                    }
                `}
            </style>
        </MainContainer>
    );
};

export default Users;

// export async function getStaticProps(context) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
//     const users = await response.json()
//         console.log(users)
//     return {
//         props: {users},
//     }
// }

