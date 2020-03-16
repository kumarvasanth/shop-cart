import React from "react";
import ProductList from "./ProductList"

class Products extends React.Component {
    state={
        products:[],
        isLoading:true,
        error:null

    }

    componentDidMount(){
        fetch('./product.json')
        .then(response =>response.json())
        .then(data=>this.setState({
            products:data
        }))}

    render(){
        console.log(this.state.products)
        
        return(this.state.products.map(pro=>{
            return(
                <ProductList pro={pro} key={pro.brand}></ProductList>
            )
        }))
    }
}export default Products;