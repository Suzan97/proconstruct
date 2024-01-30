// Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../logo.svg';
function SingleRelatedProduct(props){
    if (!props.product) {
        return null; // or some error message if desired
    }
    return (
        <div className="col-12 col-md-3 mb-4">
                <div className="card shadow" > 
                    <Link to={`/product/${props.product.slug}/${props.product.id}`}>
                        <img src={logo} className="card-img-top" alt="..."/>
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title"><Link to={`/product/${props.product.title}/${props.product.id}`}>{props.product.title}</Link></h5>
                        <h5 className="card-title text-muted">Price: KES {props.product.price}</h5>
                    </div>
                    <div className="card-footer">
                        <button title="Add to Cart" className="btn btn-warning btn-sm">
                            <i className="fa-solid fa-cart-plus"></i>
                        </button>
                        <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-2">
                            <i className="fa fa-heart"></i>
                        </button>
                    </div>
                </div>
                </div>
    )
}
export default SingleRelatedProduct;