//Assets
import SellarSidebar from './SellarSidebar';

function Reports(){
    return (
        <section className='container mt-4'>
        <div className='row'>
           <div className='col-md-3 col-12 mb-2'>
                <SellarSidebar />
           </div>
           <div className='col-md-9 col-12 mb-2'>
                <div className='row'>
                    <div className='col-md-4 mb-2'>
                        <div className='card'>
                            <div className='card-body text-center'>
                                <h4>Daily reports</h4>
                                <h4><a href='#' className='btn btn-warning'>View</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-2'>
                        <div className='card'>
                            <div className='card-body text-center'>
                                <h4>Monthly reports</h4>
                                <h4><a href='#' className='btn btn-warning'>View</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-2'>
                        <div className='card'>
                            <div className='card-body text-center'>
                                <h4>Yearly reports</h4>
                                <h4><a href='#' className='btn btn-warning'>View</a></h4>
                            </div>
                        </div>
                    </div>                                       
            </div>               
           </div>
        </div>
        
       </section>
    )

}
export default Reports