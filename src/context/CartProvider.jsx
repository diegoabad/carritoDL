import { createContext, useState } from 'react'

//1) Valores que luego se van a apsar al context


//Crear Context
export const cartContext = createContext();




const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  const addProduct = (product)=>{
      const exist = cart.data.find(c => c.id === product.id);
      if(exist){
        exist.cantidad += 1;
        setCart([...cart])
      }else{
        setCart([...cart,{...product,cantidad:1}])
      }
      sumaTotal();
  };

  const deleteProduct = (id) =>{
    const newArray = cart.filter(p=> p.id !== id);
    setCart(newArray);
    sumaTotal();
  };

  const subtractProduct = (id) =>{
    const exist = cart.data.find(c => c.id === id);
    if(exist.cantidad > 1){
      exist.cantidad -= 1;
      setCart([...cart])
    }else{
      deleteProduct(id)
    }
    sumaTotal();
  };

  const deleteAllProducts = () =>{
    setCart([])
    setTotalCart(0)
  };
  
  const sumaTotal = () =>{
    const total = cart.reduce((acumulador,item)=>{
      return acumulador + item.precio * item.cantidad;
    })
    setTotalCart(total);
  }

  
  



  
  
  return (
    <cartContext.Provider value={{cart,totalCart,addProduct,deleteProduct,subtractProduct,deleteAllProducts}}>
      {children}
    </cartContext.Provider>
  )
}


export default CartProvider;
