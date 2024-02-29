import {useState} from 'react';
import axios from 'axios';

function Login(props){
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const [LoginFormData, setLoginFormData] = useState({
        'username': '',
        'password': '',
    });
    const [errorMsg,setErrorMsg] = useState('');

    const inputHandler = (event) => {
        setLoginFormData({
            ...LoginFormData,
            [event.target.name]: event.target.value 
        });
    };
    
    const submitHandler = (event) =>{
        const formData = new FormData();
        formData.append('username', LoginFormData.username);
        formData.append('password', LoginFormData.password);

         // Input details
        axios.post(baseUrl+'proffesional/login/', formData)
        .then(function (response) {
            if (response.data.bool === false) {
                setErrorMsg(response.data.msg)
            }else{
                localStorage.setItem('proffesional_id', response.data.id);
                localStorage.setItem('proffesional_login', true);
                localStorage.setItem('proffesional_username', response.data.user);
                window.location.href='/seller/dashboard';
                setErrorMsg('');
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    const checkProffesional = localStorage.getItem('proffesional_login');
    if(checkProffesional){
        window.location.href='/seller/dashboard';
    }





    return (
       <section className='container mt-4'>
        <div className='row'>
            <div className='col-md-8 col-12 offset-2'>
                <div className='card'>
                    <h4 className='card-header'>Login</h4>
                <div className='card-body'>
                    {errorMsg  &&
                            <p className="text-danger">{errorMsg}</p>
                    }        
                    <form>
                        <div className="mb-3">
                            <label for="username" className="form-label">Username</label>
                            <input type="text" onChange={inputHandler} name='username' value={LoginFormData.username} className="form-control" id="username"/>
                        </div>
                        <div className="mb-3">
                            <label for="pwd" className="form-label">Password</label>
                            <input type="password" onChange={inputHandler} name='password' value={LoginFormData.password} className="form-control" id="pwd"/>
                        </div>
                        <button type="button" onClick={submitHandler} className="btn btn-warning">Submit</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
        
       </section>

    )
}
export default Login;