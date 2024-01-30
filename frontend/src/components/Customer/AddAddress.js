// Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../../logo.svg';
import Sidebar from './Sidebar';
function AddAddress(){
    return (
        <section className=' container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='card'>
                        <h4 className='card-header'>Add Address</h4>
                            <div className='card-body'>
                                <form>
                                    <div className="mb-3">
                                        <label for="LastName" className="form-label">Address</label>
                                        <textarea className="form-control" id="address"></textarea> 
                                    </div>
                                   
                                    
                                    <button type="submit" className="btn btn-warning">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
    
}

export default AddAddress;