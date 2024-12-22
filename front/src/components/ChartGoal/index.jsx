import { PolarAngleAxis, RadialBarChart, RadialBar } from 'recharts'

function ChartGoal({ circleSize, data }) {
    return (
        <>
            <RadialBarChart
                width={260}
                height={260}
                cx={circleSize / 2}
                cy={circleSize / 2}
                innerRadius="80%"
                outerRadius="80%"
                barSize={10}
                data={[data]}
                startAngle={90}
                endAngle={450}
            >
                <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
                <RadialBar
                    background
                    dataKey="score"
                    cornerRadius={circleSize / 2}
                    fill="#FF0000"
                />
                <text
                    x={circleSize / 2}
                    y={circleSize / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="progress-label"
                >
                    {data.score && data.score * 100}
                    {data.todayScore && data.todayScore * 100}% de votre
                    objectif
                </text>
            </RadialBarChart>
        </>
    )
}

export default ChartGoal