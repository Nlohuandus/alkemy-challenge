import React from "react"


const Redir= () =>{
    const query = new URLSearchParams(window.location.search);
    const userId = query.get("userId")
    const accessToken = query.get("accessToken")
    localStorage.setItem("token",`${accessToken}`)
    localStorage.setItem("userId", `${userId}`)
    const redirect = window.location.assign("http://localhost:3000/")
    setTimeout(redirect,3000)
    return (<div>Redirecting...</div>)
}

export default Redir