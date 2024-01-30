// Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../logo.svg';
function Checkout(props){
    return (
       <section className='container mt-4'>
        <h3 className='mb-4'>All items (4)</h3>
        <div className='row'>
            <div className='col-md-8 col-12'>
                <div className='table-responsive'>
                    <table className='table table-bordered '>
                        <thead>
                        <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Price</th>
                            </tr> 
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link><img src={logo} className="img-thumbnail" width="80" alt="..."/> Django</Link>
                                </td>
                                <td>KES 300</td>
                               
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                <Link><img src={logo} className="img-thumbnail" width="80" alt="..."/> Django</Link>
                                </td>
                                <td>KES 300</td>
                               
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                <Link><img src={logo} className="img-thumbnail" width="80" alt="..."/> Django</Link>
                                </td>
                                <td>KES 300</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                <Link><img src={logo} className="img-thumbnail" width="80" alt="..."/> Django</Link>
                                </td>
                                <td>KES 300</td>
                               
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Amount</th>
                                <th>Total</th>
                                <th>KES 1200</th>
                            </tr>
                            <tr>
                                <td colSpan='3' align='right'>
                                    <Link to='/categories' className='btn btn-secondary'>Continue Shopping</Link>
                                    <Link className='btn btn-warning ms-2'>Proceed to Payment</Link>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
        
       </section>

    )
}
export default Checkout;