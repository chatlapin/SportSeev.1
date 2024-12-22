import { LineChart, Line, XAxis, Tooltip } from 'recharts'

function ChartAverageSessions({ data }) {
    return (
        <>
            <LineChart
                width={260}
                height={260}
                data={data}
                className="averageSessions"
            >
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="#FFF"
                    dot={false}
                />
                <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    padding={{ top: 20 }}
                />
                <Tooltip />
            </LineChart>
        </>
    )
}

export default ChartAverageSessions