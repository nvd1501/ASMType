import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ICate } from '../../types/category';




interface IProps {
    onAdd: (categori: ICate) => void
}
const AddCategory = (props: IProps) => { 
   
    const navigate = useNavigate() ;
    const onFinish = (values: any) => {
        props.onAdd(values);
        navigate('/admin/categories')
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
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
                    label="Category Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
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

export default AddCategory;