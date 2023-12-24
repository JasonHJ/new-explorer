import { Table } from "antd";
import type { ColumnsType } from 'antd/es/table';
import { fetchLastCcTxs } from "@/app/lib/data/dashboard";

interface DataType {
  key: React.Key;
  asset: string;
  from: string;
  to: string;
  "From(Address)": string;
  "To(Address)": string;
  amount: string;
  value: string;
  status: string;
  hash: string;
  time: string;
}

const data = [
  {
    key: '1',
    asset: 'USDT',
    from: 'Wanchain',
    to: 'To',
    "From(Address)": '0xda4b...0433',
    "To(Address)": "0xda4b...0433",
    amount: '922',
    value: "$6,334.14",
    status: 'Success',
    hash: '0x8010...451f',
    time: '8m ago'
  },
  {
    key: '2',
    asset: 'USDT',
    from: 'Wanchain',
    to: 'To',
    "From(Address)": '0xda4b...0433',
    "To(Address)": "0xda4b...0433",
    amount: '922',
    value: "$6,334.14",
    status: 'Success',
    hash: '0x8010...451f',
    time: '8m ago'
  },
  {
    key: '3',
    asset: 'USDT',
    from: 'Wanchain',
    to: 'To',
    "From(Address)": '0xda4b...0433',
    "To(Address)": "0xda4b...0433",
    amount: '922',
    value: "$6,334.14",
    status: 'Success',
    hash: '0x8010...451f',
    time: '8m ago'
  },
  {
    key: '4',
    asset: 'USDT',
    from: 'Wanchain',
    to: 'To',
    "From(Address)": '0xda4b...0433',
    "To(Address)": "0xda4b...0433",
    amount: '922',
    value: "$6,334.14",
    status: 'Success',
    hash: '0x8010...451f',
    time: '8m ago'
  },
  {
    key: '5',
    asset: 'USDT',
    from: 'Wanchain',
    to: 'To',
    "From(Address)": '0xda4b...0433',
    "To(Address)": "0xda4b...0433",
    amount: '922',
    value: "$6,334.14",
    status: 'Success',
    hash: '0x8010...451f',
    time: '8m ago'
  },
  {
    key: '6',
    asset: 'USDT',
    from: 'Wanchain',
    to: 'To',
    "From(Address)": '0xda4b...0433',
    "To(Address)": "0xda4b...0433",
    amount: '922',
    value: "$6,334.14",
    status: 'Success',
    hash: '0x8010...451f',
    time: '8m ago'
  },
  {
    key: '7',
    asset: 'USDT',
    from: 'Wanchain',
    to: 'To',
    "From(Address)": '0xda4b...0433',
    "To(Address)": "0xda4b...0433",
    amount: '922',
    value: "$6,334.14",
    status: 'Success',
    hash: '0x8010...451f',
    time: '8m ago'
  },
  {
    key: '8',
    asset: 'USDT',
    from: 'Wanchain',
    to: 'To',
    "From(Address)": '0xda4b...0433',
    "To(Address)": "0xda4b...0433",
    amount: '922',
    value: "$6,334.14",
    status: 'Success',
    hash: '0x8010...451f',
    time: '8m ago'
  },
  {
    key: '9',
    asset: 'USDT',
    from: 'Wanchain',
    to: 'To',
    "From(Address)": '0xda4b...0433',
    "To(Address)": "0xda4b...0433",
    amount: '922',
    value: "$6,334.14",
    status: 'Success',
    hash: '0x8010...451f',
    time: '8m ago'
  },
  {
    key: '10',
    asset: 'USDT',
    from: 'Wanchain',
    to: 'To',
    "From(Address)": '0xda4b...0433',
    "To(Address)": "0xda4b...0433",
    amount: '922',
    value: "$6,334.14",
    status: 'Success',
    hash: '0x8010...451f',
    time: '8m ago'
  },
];

const columns: ColumnsType<DataType> = [
  {
    title: 'Asset',
    dataIndex: 'asset',
    defaultSortOrder: 'descend',
  },
  {
    title: 'From',
    dataIndex: 'from',
  },
  {
    title: 'To',
    dataIndex: 'to',
  },
  {
    title: 'From(Address)',
    dataIndex: 'From(Address)',
  },
  {
    title: 'To(Address)',
    dataIndex: 'To(Address)',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
  },
  {
    title: 'Value',
    dataIndex: 'value',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Hash',
    dataIndex: 'hash',
  },
  {
    title: 'Time',
    dataIndex: 'time',
  }
];

export default async function CcTxTable() {
  const lastCcTxs = await fetchLastCcTxs();

  return (
    <main>
      <Table columns={columns} dataSource={data} onChange={()=> {}} />
    </main>
  )
}