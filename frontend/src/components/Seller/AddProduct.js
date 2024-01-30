// Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../../logo.svg';
import SellarSidebar from './SellarSidebar';
function AddProduct(props){
    return (
        <section className=' container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <SellarSidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='card'>
                        <h4 className='card-header'>Add Product</h4>
                            <div className='card-body'>
                                <form>
                                    <div className="mb-3">
                                        <label for="firstName" className="form-label">Category</label>
                                        <select className='form-control'>
                                            <option>Python</option>
                                            <option>Django</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label for="firstName" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="Title"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="LastName" className="form-label">Price</label>
                                        <input type="number" className="form-control" id="Price"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="username" className="form-label">Description</label>
                                        <textarea className="form-control" rows="8" id="Description"></textarea>
                                    </div>
                                    <div className="mb-3">
                                       <div className='mb-3'>
                                            <label for="ProductImg" className='form-label'>Product Images</label>
                                            <input type="file" className='form-control' id='ProductImg' />
                                       </div>
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

export default AddProduct;