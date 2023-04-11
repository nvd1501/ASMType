import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { addProduct, deleteProduct, getAllProduct, updateProduct } from './api/product'
import AddProductPage from './pages/admin/AddProduct'
import ProductManagementPage from './pages/admin/ProductManagement'
import UpdateProductPage from './pages/admin/UpdateProduct'
import HomePage from './pages/HomePage'
import AdminLayout from './pages/layouts/AdminLayout'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'
import { IProduct } from './types/product'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import Signin from './pages/signin'
import Signup from './pages/signup'
import { ICate } from './types/category'
import { addCategori, deleteCategori, getAllCategori, updateCategori } from './api/category'
import ListCate from './pages/admin/categori'
import AddCategory from './pages/admin/AddCate'
import UpdateCate from './pages/admin/UpdateCate'
import axios from 'axios'



function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [category, setCategory] = useState<ICate[]>([]);

  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data))
  }, []);
  useEffect(() => {
    getAllCategori().then(({ data }) => setCategory(data))
  }, []);

  const onHandleRemove = (id: number) => {
    deleteProduct(id).then(() => setProducts(products.filter((item: IProduct) => item._id !== id)))
  };
  const onHandleAdd = async (product: IProduct) => {
    addProduct(product).then(() => getAllProduct().then(({ data }) => setProducts(data)))
  };
  const onHandleUpdate = (product: IProduct) => {
    try {
     
    } catch (error) {
      
    }
    updateProduct(product).then(() => getAllProduct().then(({ data }) => setProducts(data)))
  };

  //Category
  const onRemoveCate = (id: number) => {
    deleteCategori(id).then(() => setCategory(category.filter((item: ICate) => item._id !== id)))
  };

  const onAddCate = async (categori: ICate) => {
    try {
      await addCategori(categori);
      const {data} = await getAllCategori();
      const newCategory = data;
      setCategory(newCategory)
    } catch (error) {
      
    }
    // addCategori(categori).then(() => getAllCategori().then(({ data }) => setCategory(data)))
  };
  const OnUpdateCate = (categori: ICate) => {
    updateCategori(categori).then(() => getAllCategori().then(({ data }) => setCategory(data)))
  };
 
  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<WebsiteLayout/>}>
          <Route index element={<HomePage />} />
          <Route path='products' element={<ProductPage  onRemove={onHandleRemove}  products={products}/>} />
          <Route path='signin' element={<Signin/>} />
          <Route path='signup' element={<Signup/>} />
         
          <Route path='products/:id' element={<ProductDetailPage products={products} />} />
        </Route>
        <Route path='/admin' element={<AdminLayout/>}>
            <Route path='products' element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='products/add' element={<AddProductPage onAdd={onHandleAdd} categories={category}/>} />
            <Route path='products/:id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} />} />
            <Route path='categories' element={<ListCate categories={category} onRemove={onRemoveCate} />} />
            <Route path='categories/add' element={<AddCategory onAdd={onAddCate} />} />
            <Route path='categories/:id/update' element={<UpdateCate onUpdate={OnUpdateCate} categories={category} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
