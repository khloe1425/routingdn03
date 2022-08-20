import { Table } from 'antd';
import React from 'react';

export default function AndtDemo() {
    // dữ liệu hiển thị trên component Table của andt
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];

      //dữ liệu khai báo title của cột và giá trị cần điền vào cột
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];



  return (
    <div className='myTable'>
            <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}
