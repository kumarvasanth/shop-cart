import React from "react";
import ProductList from "./ProductList"

class Products extends React.Component {
    state={
        products:[],
        cart: [],
        cartTotal:0,
        cartQuantity:0
        

    }

    getDetail = id => {
        const product = this.state.products.find(item => item.brand === id);
        return product;
      };

      addtoCart = id => {
        let tempProduct = [...this.state.products];
        const index = tempProduct.indexOf(this.getDetail(id));
        const product = tempProduct[index];
        
            if(product.quantity===0){

                product.quantity = 1;
                const price = product.price;
                product.total = price;
    
                 this.setState(
                  () => {
                  return {
                           products: tempProduct,
                           cart: [...this.state.cart, product]
                        };
                       },
                       () => {
                         this.addTotals();
                       }
                        );

            }else{
                const tempCart = [...this.state.cart];
                 const selectedproduct = tempCart.find(item => item.brand === id);

                

                  const index = tempCart.indexOf(selectedproduct);
                    const cartproduct = tempCart[index];

                     cartproduct.quantity = cartproduct.quantity + 1;
                    cartproduct.total = cartproduct.price * cartproduct.quantity;
  
                   

                      this.setState(
                     () => {
                           return { cart: [...tempCart] };
                       },
                       () => {
                         this.addTotals();
                       }
                   );

            }
        
        }


        increment = id => {
            let tempProduct = [...this.state.products];
        const index = tempProduct.indexOf(this.getDetail(id));
        const product = tempProduct[index];
        
            if(product.quantity===0){

                product.quantity = 1;
                const price = product.price;
                product.total = price;
    
                 this.setState(
                  () => {
                  return {
                           products: tempProduct,
                           cart: [...this.state.cart, product]
                        };
                       },
                       () => {
                         this.addTotals();
                       }
                        );

            }else{
                const tempCart = [...this.state.cart];
                 const selectedproduct = tempCart.find(item => item.brand === id);

                

                  const index = tempCart.indexOf(selectedproduct);
                    const cartproduct = tempCart[index];

                     cartproduct.quantity = cartproduct.quantity + 1;
                    cartproduct.total = cartproduct.price * cartproduct.quantity;
  
                   

                      this.setState(
                     () => {
                           return { cart: [...tempCart] };
                       },
                       () => {
                         this.addTotals();
                       }
                   );

            }
        
            
          };


          decrement = id => {
            const tempCart = [...this.state.cart];
            const selectedproduct = tempCart.find(item => item.brand === id);
        
           
        
            const index = tempCart.indexOf(selectedproduct);
            const product = tempCart[index];
        
            product.quantity = product.quantity - 1;
        
            if (product.quantity === 0) {
              this.removeItem(id);
            } else {
              product.total = product.price * product.quantity;
        
              this.setState(
                () => {
                  return { cart: [...tempCart] };
                },
                () => {
                  this.addTotals();
                }
              );
            }
          };

          addTotals() {
            let total = 0;
            let quantity=0;
            this.state.cart.map(item => (total += item.total));
            this.state.cart.map(item => (quantity += item.quantity));
           
            
        
            this.setState(() => {
              return {
                
                
                cartTotal: total,
                cartQuantity:quantity
              };
            });
          }

          removeItem = id => {
            let tempProduct = [...this.state.products];
            let tempCart = [...this.state.cart];
        
            tempCart = tempCart.filter(item => {
              return item.brand !== id;
            });
        
            let index = tempProduct.indexOf(this.getDetail(id));
            let removedProduct = tempProduct[index];
        
           
            removedProduct.quantity = 0;
            removedProduct.total = 0;
        
            this.setState(() => {
              return {
                cart: tempCart,
                products: tempProduct
              };
            },this.addTotals());
          };

    componentDidMount(){
        fetch('./product.json')
        .then(response =>response.json())
        .then(data=>this.setState({
            products:data
        }))}

    render(){
        
        
        return(this.state.products.map(pro=>{
            return(
                <ProductList pro={pro} key={pro.brand} 
                addtocart={this.addtoCart} increment={this.increment} decrement={this.decrement} cartTotal={this.state.cartTotal} cartQuantity={this.state.cartQuantity}></ProductList>
            )
        }))
    }
}export default Products;