import { Table } from "antd";
import type { ColumnsType } from 'antd/es/table';
import ETH from '@/public/tokens/ETH.png'
import Image from 'next/image';

interface DataType {
  key: React.Key;
  name: string;
  network: string;
  liquidity: string;
  value: string;
}

const data = [
  {
    key: '1',
    name: 'ETH',
    network: 'Ethereum',
    liquidity: '525,533 ETH',
    value: '$8,971,375,850',
  },
  {
    key: '2',
    name: 'ETH',
    network: 'Ethereum',
    liquidity: '525,533 ETH',
    value: '$8,971,375,850',
  },  {
    key: '3',
    name: 'ETH',
    network: 'Ethereum',
    liquidity: '525,533 ETH',
    value: '$8,971,375,850',
  },  {
    key: '4',
    name: 'ETH',
    network: 'Ethereum',
    liquidity: '525,533 ETH',
    value: '$8,971,375,850',
  },  {
    key: '5',
    name: 'ETH',
    network: 'Ethereum',
    liquidity: '525,533 ETH',
    value: '$8,971,375,850',
  },  {
    key: '6',
    name: 'ETH',
    network: 'Ethereum',
    liquidity: '525,533 ETH',
    value: '$8,971,375,850',
  },  {
    key: '7',
    name: 'ETH',
    network: 'Ethereum',
    liquidity: '525,533 ETH',
    value: '$8,971,375,850',
  },  {
    key: '8',
    name: 'ETH',
    network: 'Ethereum',
    liquidity: '525,533 ETH',
    value: '$8,971,375,850',
  },  {
    key: '9',
    name: 'ETH',
    network: 'Ethereum',
    liquidity: '525,533 ETH',
    value: '$8,971,375,850',
  },  {
    key: '10',
    name: 'ETH',
    network: 'Ethereum',
    liquidity: '525,533 ETH',
    value: '$8,971,375,850',
  },  {
    key: '11',
    name: 'ETH',
    network: 'Ethereum',
    liquidity: '525,533 ETH',
    value: '$8,971,375,850',
  },  {
    key: '12',
    name: 'ETH',
    network: 'Ethereum',
    liquidity: '525,533 ETH',
    value: '$8,971,375,850',
  },  {
    key: '13',
    name: 'ETH',
    network: 'Ethereum',
    liquidity: '525,533 ETH',
    value: '$8,971,375,850',
  }
];

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <div className="flex">
                        <div className="mr-2">
                          <Image src={ETH} className="rounded-full" alt={`profile picture`} width={20} height={20}/>
                        </div>
                        <div className="relative" style={{ top: '-2px' }}>{text}</div>
                      </div>
  },
  {
    title: 'Network',
    dataIndex: 'network',
  },
  {
    title: 'Liquidity',
    dataIndex: 'liquidity',
  },
  {
    title: 'Value',
    dataIndex: 'value',
  },
];

export default function LiquidityLists() {
  return (
    <main className="w-full">
      <Table columns={columns} dataSource={data} onChange={()=> {}} />
    </main>
  )
}