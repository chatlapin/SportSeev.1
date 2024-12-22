import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    Radar,
    ResponsiveContainer,
    PolarRadiusAxis,
    Text,
} from 'recharts'

function ChartPerformance({ data }) {
    const renderPolarAngleAxis = ({ payload, x, y, cx, cy, ...rest }) => {
        for (const [key, value] of Object.entries(data.kind)) {
            switch (value) {
                case 'energy':
                    data.kind[key] = 'energie'
                    break
                case 'strength':
                    data.kind[key] = 'force'
                    break
                case 'speed':
                    data.kind[key] = 'vitesse'
                    break
                case 'intensity':
                    data.kind[key] = 'intensité'
                    break
                default:
            }
        }

        return (
            <Text
                {...rest}
                verticalAnchor="middle"
                y={y + (y - cy) / 10}
                x={x + (x - cx) / 100}
                fill="#FFFFFF"
                fontSize="0.75rem"
            >
                {data.kind[payload.value].charAt(0).toUpperCase() +
                    data.kind[payload.value].slice(1)}
            </Text>
        )
    }

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={90} data={[...data.data].reverse()}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis
                        dataKey="kind"
                        tick={(props) => renderPolarAngleAxis(props)}
                    />
                    <PolarRadiusAxis
                        tickCount={6}
                        tick={false}
                        axisLine={false}
                    />
                    <Radar
                        dataKey="value"
                        stroke="#FF0101"
                        fill="#FF0101"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </>
    )
}

export default ChartPerformance