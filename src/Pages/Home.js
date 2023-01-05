import { useContext } from "react"
import { AppContext } from "./AppContext"
export const Home = () => {

    let { username } = useContext(AppContext);

    return <h1>This is the home page , Name is : {username}</h1>
}