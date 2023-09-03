import { User } from "./Types";

export default function UserCard(props:User) {
    
    return (
        <div>
       <div>{props.id}</div>
       <div>{props.email}</div>
           
        </div>
    );
}
