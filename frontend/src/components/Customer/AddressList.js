// Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../../logo.svg';
import Sidebar from './Sidebar';
function AddressList( ){
    return (
        <section className=' container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <Link to="/customer/add-address" className='btn btn-outline-warning mb-4 float-end'> <i className='fa fa-plus-circle'></i> Add Address 
                            </Link>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4 mb-2'>
                            <div className='card'>
                                <div className='card-body text-muted'>
                                    <h6>
                                    <span className='badge bg-warning mb-2'><i className='fa fa-check-circle'></i></span><br/>
                                        123, NRB, Nairobi, Kenya</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 mb-2'>
                            <div className='card shadow'>
                                <div className='card-body text-muted'>
                                    <h6>
                                        <span className='badge bg-secondary mb-2'>Mark Default</span><br/>
                                        123, NRB, Nairobi, Kenya</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 mb-4'>
                            <div className='card shadow'>
                                <div className='card-body text-muted'>
                                    <h6>
                                    <span className='badge bg-secondary mb-2'>Mark Default</span><br/>
                                    123, NRB, Nairobi, Kenya</h6>
                                </div>
                            </div>
                        </div> 
                        <div className='col-4 mb-2'>
                            <div className='card shadow'>
                                <div className='card-body text-muted'>
                                    <h6>
                                    <span className='badge bg-secondary mb-2'>Mark Default</span><br/>
                                        123, NRB, Nairobi, Kenya</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 mb-2'>
                            <div className='card shadow'>
                                <div className='card-body text-muted'>
                                    <h6>
                                    <span className='badge bg-secondary mb-2'>Mark Default</span><br/>
                                        123, NRB, Nairobi, Kenya</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

        </section>

    )
    
}

export default AddressList;