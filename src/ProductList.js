import React from "react";

class ProductList extends React.Component{
    render(){
        return(
        <div>{this.props.pro.brand}</div>
        );
    }
}export default ProductList;