import axios from "axios";
import React, { useState } from "react";

function Login(props){

    const baseUrl = 'http://127.0.0.1:8000/api/';
    const [formError,setFormError] = useState(false);
    const [errorMsg,setErrorMsg] = useState('');
    const [loginFormData,setLoginFormData] = useState({
        "username":'',
        "password":'',
    });

    const inputHandler = (event) => {
        setLoginFormData({
           ...loginFormData,
           [event.target.name]:event.target.value 
        })

    };
    const submitHandler = (event) => {
        const formData = new FormData();
        formData.append('username', loginFormData.username);
        formData.append('password', loginFormData.password);
        
        // submit Data
        axios.post(baseUrl+'customer/login/', formData)
        .then(function (response) {
            console.log(response);
            if (response.data.bool === false) {
                setFormError(true);
                setErrorMsg(response.data.msg);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    };
    console.log("Rendering:", formError, errorMsg);

    const buttonEnable=(loginFormData.username!=='') && (loginFormData.password!=='')


    return (
       <section className='container mt-4'>
        <div className='row'>
            <div className='col-md-8 col-12 offset-2'>
                <div className='card'>
                    <h4 className='card-header'>Login</h4>
                <div className='card-body'>
                    {formError  &&
                            <p className="text-danger">{errorMsg}</p>
                    }
                    <form>
                        <div className="mb-3">
                            <label for="username" className="form-label">Username</label>
                            <input type="text" name="username" value={loginFormData.username} onChange={inputHandler} className="form-control" id="username"/>
                        </div>
                        <div className="mb-3">
                            <label for="pwd" className="form-label">Password</label>
                            <input type="password" name="password" value={loginFormData.password} onChange={inputHandler} className="form-control" id="pwd"/>
                        </div>
                        <button type="button" disabled={!buttonEnable} onClick={submitHandler} className="btn btn-warning">Submit</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
        
       </section>

    )
}
export default Login;