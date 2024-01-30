//Assets
import SellarSidebar from './SellarSidebar';
import { Link } from 'react-router-dom';
function SellerProducts(props){
    return (
       <section className='container mt-4'>
        <div className='row'>
           <div className='col-md-3 col-12 mb-2'>
                <SellarSidebar />
           </div>
           <div className='col-md-9 col-12 mb-2'>
                <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <td colSpan="5" align='right'>
                                    <Link to='/seller/add-product' className="btn btn-warning"><i className='fa fa-plus-circle'></i> Add Product</Link>
                                </td>
                            </tr>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Product Title</td>
                                <td>500</td>
                                <td>In Stock</td>
                                <td>
                                    <a href='#' className='btn btn-warning ms-1'>View</a>
                                    <a href='#' className='btn btn-secondary ms-1'>Edit</a>
                                    <a href='#' className='btn btn-danger ms-1'>Delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
 
           </div>
        </div>
        
       </section>

    )
}
export default SellerProducts;