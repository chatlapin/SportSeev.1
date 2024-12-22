import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

import './style.scss'

function ChartGoal({ data }) {
    let score = 0
    if (data.todayScore) {
        score = data.todayScore
    } else if (data.score) {
        score = data.score
    }

    const dataArray = [{ name: 'score', value: score }]
    return (
        <>
            <h3 className="chartgoal-title">Score</h3>
            <ResponsiveContainer width="70%" height="70%">
                <RadialBarChart
                    innerRadius="0%"
                    outerRadius="0%"
                    data={dataArray}
                    startAngle={90}
                    endAngle={450}
                >
                    <RadialBar
                        data={[{ value: 1 }]}
                        dataKey="value"
                        barSize={170}
                        fill="#FFF"
                        isAnimationActive={false}
                    />
                    <RadialBar
                        dataKey="value"
                        barSize={10}
                        cornerRadius={100}
                        fill="#FF0000"
                    />
                </RadialBarChart>
            </ResponsiveContainer>
            <div className="chartgoal-label">
                <p className="percent">
                    {data.score && data.score * 100}
                    {data.todayScore && data.todayScore * 100}%
                </p>
                <p>de votre</p>
                <p>objectif</p>
            </div>
        </>
    )
}

export default ChartGoal