import { Link } from 'react-router-dom';
//Assets
import logo from '../../logo.svg';
import SellarSidebar from './SellarSidebar';
function Customers(){
    return (
       <section className=' container mt-4'>
        <div className='row'>
           <div className='col-md-3 col-12 mb-2'>
                <SellarSidebar />
           </div>
           <div className='col-md-9 col-12 mb-2'>
             <div className='row'>
                 <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <thead>                     
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th> 
                                <th>Mobile</th>
                                <th>Action</th> 
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>jdoe@gmail.com</td>
                                <td>12345678</td>
                                <td>
                                    <button className='btn btn-secondary btn-sm'>Orders</button>
                                    <button className='btn btn-warning btn-sm  ms-1'>Remove from list</button>
                                </td>  
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jane Doe</td>
                                <td>janedoe@gmail.com</td>
                                <td>12345678</td>
                                <td>
                                    <button className='btn btn-secondary btn-sm'>Orders</button>
                                    <button className='btn btn-warning btn-sm ms-1'>Remove from list</button>
                                </td>  
                            </tr>
                            
               

                        </tbody>
                    </table>
                 </div>
             </div>
           </div>
        </div>
        
       </section>

    )
}
export default Customers;