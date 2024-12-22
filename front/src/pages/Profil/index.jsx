import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../context'

import Card from '../../components/Card'
import ChartsCard from '../../components/ChartsCard'
import ChartActivity from '../../components/ChartActivity'
import ChartAverageSessions from '../../components/ChartAverageSessions'
import ChartGoal from '../../components/ChartGoal'
import ChartPerformance from '../../components/ChartPerformance'

import energy from '../../assets/energy.svg'
import chicken from '../../assets/chicken.svg'
import apple from '../../assets/apple.svg'
import cheeseburger from '../../assets/cheeseburger.svg'

import './style.scss'

function Profil() {
    /* Setting the title of the page. */
    document.title = 'Profil'
    const {
        setUserId,
        user,
        setUser,
        activity,
        setActivity,
        averageSessions,
        setAverageSessions,
        performance,
        setPerformance,
    } = useContext(Context)

    const { userId } = useParams()

    useEffect(() => {
        if (userId) {
            setUserId(userId)
        }
        return () => {
            setUserId(null)
            setUser(null)
            setActivity(null)
            setAverageSessions(null)
            setPerformance(null)
        }
    }, [
        userId,
        setUserId,
        setUser,
        setActivity,
        setAverageSessions,
        setPerformance,
    ])

    return (
        <section className="profil">
            {user && (
                <div>
                    <h2 className="profil-title">
                        Bonjour{' '}
                        <span className="profil-firstName">
                            {user.userInfos.firstName}
                        </span>
                    </h2>
                    <p className="profil-subtitle">
                        Félicitation ! Vous avez explosé vos objectifs hier 👏
                    </p>
                    <div className="dashboard">
                        <div className="dashboard-charts-wrapper">
                            <div className="dashboard-charts">
                                {activity && (
                                    <ChartActivity data={activity.sessions} />
                                )}
                            </div>
                            <div className="small-card-wrapper">
                                {averageSessions && (
                                    <ChartsCard
                                        className="average-sessions"
                                        content={
                                            <ChartAverageSessions
                                                data={averageSessions.sessions}
                                            />
                                        }
                                    />
                                )}

                                {performance && (
                                    <ChartsCard
                                        className="performance"
                                        content={
                                            <ChartPerformance
                                                data={performance}
                                            />
                                        }
                                    />
                                )}
                                {user && (
                                    <ChartsCard
                                        className="score"
                                        content={
                                            <ChartGoal
                                                circleSize={260}
                                                data={user}
                                            />
                                        }
                                    />
                                )}
                            </div>
                        </div>

                        <div className="dashboard-aside">
                            <Card
                                userKeyData={user.keyData.calorieCount}
                                unit="kCal"
                                subtitle="Calories"
                                className="calorie"
                                logo={energy}
                            />
                            <Card
                                userKeyData={user.keyData.proteinCount}
                                unit="g"
                                subtitle="Proteines"
                                className="protein"
                                logo={chicken}
                            />
                            <Card
                                userKeyData={user.keyData.carbohydrateCount}
                                unit="g"
                                subtitle="Glucides"
                                className="carbohydrate"
                                logo={apple}
                            />
                            <Card
                                userKeyData={user.keyData.lipidCount}
                                unit="g"
                                subtitle="Lipides"
                                className="lipid"
                                logo={cheeseburger}
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Profil