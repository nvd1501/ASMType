import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IProduct } from '../../types/product';
import { Link } from 'react-router-dom'

interface DataType {
    key: string | number;
    _id: number | string;
    name: string;
    price: number;
}
interface IProps {
    products: IProduct[],
    onRemove: (id: number ) => void
}

const ProductManagementPage = (props: IProps) => {
    const removeProduct = (id: number ) => {
        props.onRemove(id)
        console.log(id)
    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Product Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Product Image',
            dataIndex: 'image',
            key: 'image',
            render: (image) => <img src={image} alt="Product Image" style={{ maxWidth: '150px' }} />,
        },
        {
            title: 'Product description',
            dataIndex: 'description',
            key: 'description',
        },    
        {
            title: 'Action',
            key: 'action',
            render: (record) => (

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeProduct(record._id)}>Remove</Button>
                    <Button type="primary" style={{ backgroundColor: 'blue' }} ><Link to={`/admin/products/${record._id}/update`}>Update</Link></Button>
                </Space>
            ),
        },
    ];

    const data: DataType[] = props.products.map((item: IProduct) => {
        return {
            key: item._id,
            ...item
        }
    })

    return (
        <div>
            <Button style={{ backgroundColor: 'blue' }} type='primary'><Link  to={'/admin/products/add'}>Add New Product</Link></Button>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 3 }} />
        </div>
    )
}

export default ProductManagementPage