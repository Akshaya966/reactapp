import './style.css'

const Productpage = () =>{

    return(
        <>
        
    

    <div class="product-area row ">


        <div class="product-img col-5">
        <img  src={require("./images/earrings-1.jpg")} class="header-logo" alt="..."/>
        </div>
        <div class="product-desc col-5">
                <h1>Butterfly Stud Earrings for Women</h1>
                <h6>Yellow gold</h6>
                <h3>$400.00</h3>
                <hr />
            <div class="shop-info">
                    <ul>
                        <li>
                        <img className="alignnone size-full wp-image-6481 entered lazyloaded" src="https://auriane.jwsuperthemes.com/wp-content/uploads/2022/03/package.svg" alt width={20} height={20} data-lazy-src="https://auriane.jwsuperthemes.com/wp-content/uploads/2022/03/package.svg" data-ll-status="loaded" />

                            Free returns</li>
                        <li>
                        <img className="alignnone size-full wp-image-6480 entered lazyloaded" src="https://auriane.jwsuperthemes.com/wp-content/uploads/2022/03/truck.svg" alt width={20} height={20} data-lazy-src="https://auriane.jwsuperthemes.com/wp-content/uploads/2022/03/truck.svg" data-ll-status="loaded" />

                            Free shipping via DHL, fully insured</li>
                        <li>
                        <img className="alignnone size-full wp-image-6479 entered lazyloaded" src="https://auriane.jwsuperthemes.com/wp-content/uploads/2022/03/check_circle.svg" alt width={20} height={20} data-lazy-src="https://auriane.jwsuperthemes.com/wp-content/uploads/2022/03/check_circle.svg" data-ll-status="loaded" />

                            All taxes and customs duties included</li>
                    </ul>
            </div> 
            <hr />
            <button type='submit' value='Add To Cart' class="cart-button">
                    <span>Add to cart</span>
            </button>   
            <button type='submit' class="cart-button">
                    <span>Buy Now</span>
            </button>   
            <hr />
            <div class="product-meta">
                    <span>Category: 
                        <a href="#">Earrings</a>
                    </span>
                    <span>Tags:  
                        <a href="#">Jewelry</a>
                    </span>
            </div>
            
        </div>

    </div>



        </>
    )
}
export default Productpage;