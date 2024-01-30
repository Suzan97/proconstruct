import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { useState, useEffect } from 'react';

function Categories(props){
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [categories, setCategories] =  useState([]);
    const [totalResult,setTotalResults]= useState(0); 
    
    useEffect(() => {
        fetchData(baseUrl+'/categories');
    }, []);

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
            console.log('Data received:', data);
            setCategories(data.results);
            setTotalResults(data.count);
            // console.log('Categories:', data.results);
        })
        .catch((error) => {
            console.log('Error fetching data:', error);
        });
    }

    function changeUrl(baseurl){  
        fetchData(baseurl);
    }

    var links=[];
    var limit = 1;
    var totalLinks=Math.ceil(totalResult/limit);
    for(let i=1; i<=totalLinks; i++){
        links.push(
            <li className="page-item" key={i}>
                <Link onClick={() => changeUrl(`${baseUrl}/categories/?page=${i}`)} to={`/categories/?page=${i}`} className="page-link">{i}</Link>
            </li>
        )
    }

    return (
        <section className="container mt-4">
            {/* Popular Category */}
            <h3 className="mb-4">All Categories</h3>
            <div className="row mb-2">
                {
                    categories && categories.map((category) => (
                        <div className="col-12 col-md-3 mb-4" key={category.id}>
                            <div className="card shadow">
                                <img src={logo} className="card-img-top" alt={category.title}/>
                                <div className="card-body">
                                    <h4 className="card-title"><Link to={`/category/${category.title}/${category.id}`}>{category.title}</Link></h4>
                                </div>
                                <div className="card-footer">
                                    Product Sale: 1000
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {links}
                </ul>
            </nav>
        </section> 
    )
}
export default Categories;
