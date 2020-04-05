import React from "react";


class ProductList extends React.Component{
    state={
        modalShow:false,
        
    }

    setModalShow=(status)=>{
        this.setState({
            modalShow:status
        })
    }
  


    render(){
        
        const modal=React.createRef();
        const {brand,product,quantity,mRP,total,image,offer}=this.props.pro;
        

        
        return(
            <React.Fragment>
            <div className="flex-container">
        <div>
            <figure>
             <img src={image} alt="product" style={{width:100}}/>
        <figcaption><strong>{offer}% OFF</strong></figcaption>
            </figure>
        </div>
        <div>
            <h4>{brand}</h4>
            <h5>{product}</h5>
            <h5>Quantity: {quantity}</h5>
            <h5>MRP: {mRP}</h5>
            <h5>Total Price : RS {total}</h5>
             <button  onClick={()=>{this.props.addtocart(brand)}}> Add to cart </button>
        <button onClick={()=>{this.props.increment(brand)}}> + </button> {quantity} {quantity?(<button onClick={()=>{this.props.decrement(brand)}}>-</button>):(<button onClick={()=>{this.props.decrement(brand)}} disabled>-</button>)}
        </div>
       
        </div>
         <hr style={{marginLeft:100,marginRight:100,marginBottom:100}} ></hr>
         <div className="footer">
            <div >Quantity: {this.props.cartQuantity}  Total Price : RS {this.props.cartTotal}</div>

              <button variant="primary" id="myBtn" onClick={() =>modal.current.style.display="block"}>CHECKOUT</button></div>
              
              


<div id="myModal"  ref={modal} className="modal">

  
  <div  className="modal-content">
    <div  className="modal-header">
      <span  onClick={() =>modal.current.style.display="none"}  className="close">&times;</span>
      <h2>Transaction Successfull</h2>
    </div>
    <div  className="modal-body">
        <h5>Total Price :RS {this.props.cartTotal}</h5>
    </div>
    <div  className="modal-footer">
      <h3>Thanks for shopping with us:)</h3>
    </div>
  </div>

</div>
                     
              </React.Fragment>
        );
    }
}export default ProductList;