import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts'

function ChartPerformance({ data }) {
    return (
        <>
            <RadarChart
                outerRadius={90}
                width={260}
                height={260}
                data={[...data.data].reverse()}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" />
                <Radar
                    dataKey="value"
                    stroke="#FF0101"
                    fill="#FF0101"
                    fillOpacity={0.9}
                />
            </RadarChart>
        </>
    )
}

export default ChartPerformance