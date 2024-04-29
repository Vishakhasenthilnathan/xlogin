import React from "react";
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const [userName,setUserName] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [shouldThrowError,setShouldThrowError] = React.useState(false);
    const navigate = useNavigate();
    const handleSubmit =(e)=>{
        if(userName === "" || password === "") return;
        e.preventDefault();
        if(userName === "user" && password === "password"){
            navigate('/login');
        }
        else{
            setShouldThrowError(true);
        }
    }
    return(
    <div className="App">
        <h1>Login Page</h1>
        {
            shouldThrowError && <div>Invalid username or password</div>
        }
        <form>
            <label style={{display: "block"}}> Username:
                <input type="text" value={userName} onChange={event => setUserName(event.target.value)} required/>
            </label>
            <label style={{display: "block"}}> Password:
                <input type="text" value={password} onChange={event => setPassword(event.target.value)} required/>
            </label>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
    )
}

export default MainPage;