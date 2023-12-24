'use client'
import { myFont } from '@/app/ui/fonts';
import { Select, Input, Form } from 'antd';
import CcTxTable from '@/app/ui/dashboard/ccTx-table';

const { Search } = Input;

export default function CcTxLists() {
  return (
    <main className="flex flex-col justify-start">
      <div className={`${myFont.className} text-xl font-normal`}>Cross-chain Transactions</div>
      <div className="mt-4">
        <Form className="grid mt-4 grid-cols-4 gap-4">
          <Form.Item>
            <div className="text-light-999">Assert</div>
            <Select
              showSearch
              style={{ width: 280 }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) => (option?.label ?? '').includes(input)}
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[
                {
                  value: '1',
                  label: 'Not Identified',
                },
                {
                  value: '2',
                  label: 'Closed',
                },
                {
                  value: '3',
                  label: 'Communicated',
                },
                {
                  value: '4',
                  label: 'Identified',
                },
                {
                  value: '5',
                  label: 'Resolved',
                },
                {
                  value: '6',
                  label: 'Cancelled',
                },
              ]}
              className='w-1/4'
            />
          </Form.Item>
          <Form.Item>
            <div className="text-light-999">From</div>
            <Select
              showSearch
              style={{ width: 280 }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) => (option?.label ?? '').includes(input)}
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[
                {
                  value: '1',
                  label: 'Not Identified',
                },
                {
                  value: '2',
                  label: 'Closed',
                },
                {
                  value: '3',
                  label: 'Communicated',
                },
                {
                  value: '4',
                  label: 'Identified',
                },
                {
                  value: '5',
                  label: 'Resolved',
                },
                {
                  value: '6',
                  label: 'Cancelled',
                },
              ]}
            />
          </Form.Item>
          <Form.Item>
            <div className="text-light-999">To</div>
            <Select
              showSearch
              style={{ width: 280 }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) => (option?.label ?? '').includes(input)}
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[
                {
                  value: '1',
                  label: 'Not Identified',
                },
                {
                  value: '2',
                  label: 'Closed',
                },
                {
                  value: '3',
                  label: 'Communicated',
                },
                {
                  value: '4',
                  label: 'Identified',
                },
                {
                  value: '5',
                  label: 'Resolved',
                },
                {
                  value: '6',
                  label: 'Cancelled',
                },
              ]}
            />
          </Form.Item>
          <Form.Item>
            <div className="opacity-0">Search</div>
            <Search style={{ width: 280 }} placeholder="input search text" onSearch={() => console.log('1')} />
          </Form.Item>
        </Form>
      </div>
      <div className="mt-4">
        <CcTxTable />
      </div>
    </main>
  )
}