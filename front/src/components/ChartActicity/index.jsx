import { XAxis, Tooltip, BarChart, CartesianGrid, YAxis, Bar } from 'recharts'

function ChartActivity({ data }) {
    return (
        <>
            <BarChart width={835} height={320} data={data} barSize={7}>
                <CartesianGrid strokeDasharray="2 2" vertical={false} />
                <XAxis dataKey="index" />
                <YAxis dataKey="kilogram" />
                <Tooltip />
                <Bar dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0]} />
                <Bar dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]} />
            </BarChart>
        </>
    )
}

export default ChartActivity