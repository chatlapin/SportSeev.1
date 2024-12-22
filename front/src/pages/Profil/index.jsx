import { useParams } from 'react-router-dom'

import { useFetch } from '../../utils/useFetch'
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

/**
 * Render Profil page
 *
 * @category Pages
 * @component
 * @returns { React.Component } A React component
 */
function Profil() {
    document.title = 'Profil - SportSee'

    const { userId } = useParams()

    const user = useFetch(`http://localhost:3000/user/${userId}`)
    const activity = useFetch(`http://localhost:3000/user/${userId}/activity`)
    const averageSessions = useFetch(
        `http://localhost:3000/user/${userId}/average-sessions`
    )
    const performance = useFetch(
        `http://localhost:3000/user/${userId}/performance`
    )

    if (
        user.isLoading ||
        activity.isLoading ||
        averageSessions.isLoading ||
        performance.isLoading
    ) {
        return (
            <section className="profil-wrapper">
                <h2 className="center">Loading...</h2>
            </section>
        )
    }

    if (
        user.error ||
        activity.error ||
        averageSessions.error ||
        performance.error
    ) {
        return (
            <section className="profil-wrapper">
                <h2 className="center">Une erreur est survenue !</h2>
            </section>
        )
    }

    return (
        <section className="profil-wrapper">
            {user.fetchedData.data && (
                <div className="profil">
                    <h2 className="profil-title">
                        Bonjour{' '}
                        <span className="profil-firstName">
                            {user.fetchedData.data.userInfos.firstName}
                        </span>
                    </h2>
                    <p className="profil-subtitle">
                        Félicitation ! Vous avez explosé vos objectifs hier 👏
                    </p>
                    <div className="dashboard">
                        <div className="dashboard-charts-wrapper">
                            <div className="activity-charts">
                                {activity.fetchedData.data && (
                                    <ChartActivity
                                        data={
                                            activity.fetchedData.data.sessions
                                        }
                                    />
                                )}
                            </div>
                            <div className="small-card-wrapper">
                                {averageSessions.fetchedData.data && (
                                    <ChartsCard
                                        className="average-sessions"
                                        content={
                                            <ChartAverageSessions
                                                data={
                                                    averageSessions.fetchedData
                                                        .data.sessions
                                                }
                                            />
                                        }
                                    />
                                )}

                                {performance.fetchedData.data && (
                                    <ChartsCard
                                        className="performance"
                                        content={
                                            <ChartPerformance
                                                data={
                                                    performance.fetchedData.data
                                                }
                                            />
                                        }
                                    />
                                )}
                                {user.fetchedData.data && (
                                    <ChartsCard
                                        className="score"
                                        content={
                                            <ChartGoal
                                                data={user.fetchedData.data}
                                            />
                                        }
                                    />
                                )}
                            </div>
                        </div>

                        <div className="dashboard-aside">
                            <Card
                                userKeyData={
                                    user.fetchedData.data.keyData.calorieCount
                                }
                                unit="kCal"
                                subtitle="Calories"
                                className="calorie"
                                logo={energy}
                            />
                            <Card
                                userKeyData={
                                    user.fetchedData.data.keyData.proteinCount
                                }
                                unit="g"
                                subtitle="Proteines"
                                className="protein"
                                logo={chicken}
                            />
                            <Card
                                userKeyData={
                                    user.fetchedData.data.keyData
                                        .carbohydrateCount
                                }
                                unit="g"
                                subtitle="Glucides"
                                className="carbohydrate"
                                logo={apple}
                            />
                            <Card
                                userKeyData={
                                    user.fetchedData.data.keyData.lipidCount
                                }
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