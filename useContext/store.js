import axios from "axios";
import Context from "./Context";
import { useEffect, useState } from "react";

export default function GetUsers({ children }) {
    const [results, setResutls] = useState();
    const GetUsersHandler = async () => {
        await axios.get(`${process.env.baseURL}/api/v1/users`)
            .then((res) => {
                if (res.status = 200) {
                    setResutls(res.data.users);
                    <Context data={results} />
                }
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        GetUsersHandler()
    }, [])

    return (
        <Context.Provider value={results}>
            {children}
        </Context.Provider>
    )
}