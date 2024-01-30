// Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../../logo.svg';
import Sidebar from './Sidebar';
function ChangePassword(props){
    return (
        <section className=' container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                        <div className='card'>
                        <h4 className='card-header'>Change password</h4>
                            <div className='card-body'>
                                <form>
                                    <div className="mb-3">
                                        <label for="pwd" className="form-label">New Password</label>
                                        <input type="password" className="form-control" id="pwd"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="cpwd" className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" id="cpwd"/>
                                    </div>
                                    <button type="submit" className="btn btn-warning">Submit</button>
                                </form>
                            </div>
                        </div>
                </div>
            </div>

        </section>

    )
    
}

export default ChangePassword;