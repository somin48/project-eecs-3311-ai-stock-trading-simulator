'use client';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

import { StockHistoryPoint } from '@/lib/api';

interface StockChartProps {
    data: StockHistoryPoint[];
}

export default function StockChart({ data }: StockChartProps) {
    return (
        <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis domain={['auto', 'auto']} />
                    <Tooltip
                        labelStyle={{ color: 'black' }}/>
                    <Line type="monotone" dataKey="price" stroke="#4f46e5" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
