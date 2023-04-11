import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { IProduct } from '../../types/product'
import { Button, Form, Input } from 'antd';
import { ICate } from '../../types/category';
interface IProps {
    categories: ICate[],
    onUpdate: (category: ICate) => void
}





const UpdateCate = (props: IProps) => {
    const { id } = useParams()
    console.log(id)
    const navigate = useNavigate()




    const [category, setCategory] = useState<ICate>() // khởi tạo biến state product có kiểu dữ liệu là IProduct
    useEffect(() => { // khi props thay đổi thì sẽ chạy useEffect này
        const currentCate = props.categories.find((category: ICate) => category._id.toString() == (id))
        // tìm trong mảng props.products có phần tử nào có id trùng với id trên url không 
        setCategory(currentCate) // nếu có thì set lại giá trị cho biến product
    }, [props.categories])
    console.log(props.categories);

    useEffect(() => { // khi biến product thay đổi thì sẽ chạy useEffect này
        setFields() // gọi hàm setFields để set lại giá trị cho các input
    }, [category])
    const [form] = Form.useForm();
    // khởi tạo một instance của Form và gán vào biến form
    // Instance của form là một đối tượng được tạo ra bởi Ant Design để thực     hiện các chức năng của form trong React

    const setFields = () => {// hàm này để set lại giá trị cho các input
        form.setFieldsValue({ // gọi hàm setFieldsValue của instance form để set lại giá trị cho các input dựa vào giá trị của biến product
            id: category?._id,
            name: category?.name,
           
        })
    }
   
    const onFinish = (values: any) => {
        props.onUpdate(values);
        navigate('/admin/categories')
    };

    return (
        <div>
            <Form form={form} style={{ maxWidth: 600 }} onFinish={onFinish} >
                {/* đoạn này cần truyền cả id vào form khi submit để lấy được giá trị id truyền lên component App */}
                <Form.Item
                    label=""
                    name="id"
                    style={{ display: 'none' }} // ẩn input này đi
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Category Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button style={{ backgroundColor: 'blue' }} type="primary" htmlType="submit">
                        Update Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateCate;