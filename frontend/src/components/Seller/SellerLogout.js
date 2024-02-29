function SellerLogout(){
    localStorage.removeItem('proffesional_login');
    localStorage.removeItem('proffesional_username');
    localStorage.removeItem('proffesional_id');
    window.location.href='/seller/login';

}
export default SellerLogout;