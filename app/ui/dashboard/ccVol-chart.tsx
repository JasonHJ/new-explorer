'use client'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianAxis } from 'recharts';
import Numeral from "numeral";
import { useState } from "react";
import moment  from 'moment';

const days = Array.from(Array(60).keys(), n => n + 1);
const now = Date.now();

const DATA = days.map((v, i) => {
  const tvl = Math.round(Math.random() * (100000000 - 1000000)) + 1000000
  const date = new Date(now - (60 - v) * 24 * 3600000);
  return { tvl, date, month: date.toString().split(' ')[1] }
})

export default function CcVolChart() {
  const [xvalues, setxvalues] = useState<string[]>([])

  const formatdate = (date: Date) => {
      if (!xvalues.includes(date.toString().split(' ')[1])) {
        setxvalues([...xvalues, date.toString().split(' ')[1]])
        return date.toString().split(' ')[1]
      }
      return date.toString().split(' ')[1];
  }

  return (
    <main className="rounded-xl bg-white" style={{ width: '48%' }}>
      <div className="flex justify-between my-5 mx-8">
        <div>
          <div className="text-light-999 text-xs">Total Value Locked (TVL)</div>
          <div className="text-2xl my-1">$303,423,941.55</div>
        </div>
        <div className="text-light-999 text-xs">Dec 16, 2023, 12:00 AM (UTC)</div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          data={DATA}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <XAxis dataKey="date" axisLine={false} tickLine={false} tickFormatter={formatdate}/>
          <YAxis hide={true} tick={false} />
          <Tooltip />
          <Area type="monotone" dataKey="tvl" stroke="#E7EFF7" fill="#E7EFF7" name="TVL" />
        </AreaChart>
      </ResponsiveContainer>
    </main>
  )
}
