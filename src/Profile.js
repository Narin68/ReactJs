import { useContext, useState } from "react";
import { AppContext } from "./AppContext"
export const Profile = () => {
    let { username, setUsername } = useContext(AppContext);

    let [newUsername, onChangeUsername] = useState("");

    return (

        <div>
            <h1>My name is : {username}</h1>
            <input type={"text"} onChange={(event) => {
                onChangeUsername(event.target.value);
            }} />

            <button onClick={() => {
                setUsername(newUsername);
            }}>Save</button>

        </div>

    );

}