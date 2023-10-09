// "use client"

// import axios from "axios";
// import Context from "./Context";
// import { useEffect, useReducer, Dispatch } from "react";


// export default function StoreContext({ children }) {
//     const initialState = {
//         loading: false,
//         cartItems: []
//     }
//     const GetUsersHandler = async () => {
//         await axios.get(`${process.env.baseURL}/api/v1/users`)
//             .then((res) => {
//                 if (res.status = 200) {
//                     setResutls(res.data.users);
//                     <Context data={results} />
//                 }
//             })
//             .catch(err => console.log(err))
//     }

//     const reducer = (state, action) => {
//         switch (action.type) {
//             case "AddItem":
//                 return {...state,}
//         }
//     }

//     useEffect(() => {
//         GetUsersHandler()
//     }, [])

//     return (
//         <Context.Provider value={{ cartItems, setItems }}>
//             {children}
//         </Context.Provider>
//     )
// }