import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IProduct } from '../../types/product';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ICate } from '../../types/category';

interface IProps {
    categories: ICate[];
    onAdd: (product: IProduct) => void
}



interface IProps {
    onAdd: (product: IProduct) => void
}
const AddProductPage = (props: IProps) => { // nhận props từ App.tsx 
   
     
    const categoryOption = props.categories.map((category) =>{
        return {label: category.name , value: category._id};
    }); console.log(props);
    const navigate = useNavigate() // khởi tạo navigate để điều hướng
    // const { register, handleSubmit } = useForm()
    // const onHandleSubmit = (data) => {
    //     props.onAdd(data);
    //     navigate('/admin/products')
    // }


    const onFinish = (values: any) => {
        props.onAdd(values);
        navigate('/admin/products')
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            {/* <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" placeholder='Product Name' {...register('name')} />
                <input type="number" {...register('price')} />
                <button type="submit">Add New Product</button>
            </form> */}
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ width: 900, margin: '0 auto' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Image"
                    name="image"
                    rules={[{ required: true, message: 'Please input your image' }]}
                    
                >
                    
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Product description"
                    name="description"
                    rules={[{ required: true, message: 'Please input your description' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product categoryId"
                    name="categoryId"
                    rules={[{ required: true, message: 'Please input your categoryId' }]}
                >
                    <Select options={categoryOption} />
                   
                </Form.Item>
                

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" style={{ backgroundColor: 'blue' }} htmlType="submit">
                        Add New Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddProductPage