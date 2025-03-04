"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "1",
    borrowed: 12,
    returned: 8,
  },
  {
    name: "2",
    borrowed: 18,
    returned: 12,
  },
  {
    name: "3",
    borrowed: 15,
    returned: 14,
  },
  {
    name: "4",
    borrowed: 22,
    returned: 18,
  },
  {
    name: "5",
    borrowed: 28,
    returned: 24,
  },
  {
    name: "6",
    borrowed: 25,
    returned: 22,
  },
  {
    name: "7",
    borrowed: 18,
    returned: 16,
  },
  {
    name: "8",
    borrowed: 20,
    returned: 18,
  },
  {
    name: "9",
    borrowed: 24,
    returned: 20,
  },
  {
    name: "10",
    borrowed: 28,
    returned: 26,
  },
  {
    name: "11",
    borrowed: 32,
    returned: 28,
  },
  {
    name: "12",
    borrowed: 36,
    returned: 30,
  },
  {
    name: "13",
    borrowed: 30,
    returned: 28,
  },
  {
    name: "14",
    borrowed: 24,
    returned: 22,
  },
  {
    name: "15",
    borrowed: 28,
    returned: 24,
  },
  {
    name: "16",
    borrowed: 32,
    returned: 28,
  },
  {
    name: "17",
    borrowed: 36,
    returned: 32,
  },
  {
    name: "18",
    borrowed: 30,
    returned: 28,
  },
  {
    name: "19",
    borrowed: 24,
    returned: 22,
  },
  {
    name: "20",
    borrowed: 28,
    returned: 26,
  },
  {
    name: "21",
    borrowed: 32,
    returned: 28,
  },
  {
    name: "22",
    borrowed: 36,
    returned: 32,
  },
  {
    name: "23",
    borrowed: 30,
    returned: 28,
  },
  {
    name: "24",
    borrowed: 24,
    returned: 22,
  },
  {
    name: "25",
    borrowed: 28,
    returned: 25,
  },
  {
    name: "26",
    borrowed: 32,
    returned: 30,
  },
  {
    name: "27",
    borrowed: 36,
    returned: 32,
  },
  {
    name: "28",
    borrowed: 30,
    returned: 28,
  },
  {
    name: "29",
    borrowed: 24,
    returned: 22,
  },
  {
    name: "30",
    borrowed: 28,
    returned: 25,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Bar dataKey="borrowed" fill="#adfa1d" radius={[4, 4, 0, 0]} />
        <Bar dataKey="returned" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

