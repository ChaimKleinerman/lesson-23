import { useState, useEffect } from "react";
import { User } from "./Types";
import UserCard from "./UserCard";
export default function UserFromServer() {
    const [userNameId, setUser] = useState<User[]>([]);
    useEffect(() => {
        const fetchItem = () => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((resolute) => resolute.json())
                .then((data) => {
                    setUser(data);
                });
        };
        fetchItem(), [];
    });
    return (
        <div>
       
            {userNameId.map((item) => (
                <div id="card">
                <UserCard {...item}/>
                </div>
            ))}
        </div>
    );
}

