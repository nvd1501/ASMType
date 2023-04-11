import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { Link } from 'react-router-dom'
import { ICate } from '../../types/category';

interface DataType {
    key: string | number;
    _id: number;
   
}
interface IProps {
    categories: ICate[],
    onRemove: (id: number ) => void
}

const ListCate = (props: IProps) => {
    const removeCategory = (id: number ) => {
        props.onRemove(id)
        console.log(id)
    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'Category Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeCategory(record._id)}>Remove</Button>
                    <Button type="primary" style={{ backgroundColor: 'blue' }} ><Link to={`/admin/categories/${record._id}/update`}>Update</Link></Button>
                </Space>
            ),
        },
    ];

    const data: DataType[] = props.categories.map((item: ICate) => {
        return {
            key: item._id,
            ...item
        }
    })

    return (
        <div>
            <Button style={{ backgroundColor: 'blue' }} type='primary'><Link  to={'/admin/categories/add'}>Add New Category</Link></Button>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </div>
    )
}

export default ListCate;