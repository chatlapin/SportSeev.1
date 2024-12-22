import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../context'

import Card from '../../components/Card'

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
                        <div className="dashboard-charts">
                            {user && (
                                <div>
                                    <h2>User Infos : </h2>
                                    <div>id : {user.id}</div>
                                    {user.score && (
                                        <div>score : {user.score}</div>
                                    )}
                                    {user.todayScore && (
                                        <div>
                                            todayScore : {user.todayScore}
                                        </div>
                                    )}
                                    <ul>
                                        userInfos :
                                        <li>
                                            lastName : {user.userInfos.lastName}
                                        </li>
                                        <li>age : {user.userInfos.age}</li>
                                    </ul>
                                </div>
                            )}
                            {activity && (
                                <div>
                                    <h2>Activity :</h2>
                                    {activity.sessions.map((item, index) => (
                                        <div key={'activity-' + index}>
                                            <ul>
                                                {index + 1} :
                                                <li>Date : {item.day}</li>
                                                <li>
                                                    Kilogram : {item.kilogram}
                                                </li>
                                                <li>
                                                    Calories : {item.calories}
                                                </li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {averageSessions && (
                                <div>
                                    <h2>AverageSessions :</h2>
                                    {averageSessions.sessions.map(
                                        (item, index) => (
                                            <div
                                                key={'averageSessions-' + index}
                                            >
                                                <ul>
                                                    Day {item.day} :
                                                    <li>
                                                        sessionLength :{' '}
                                                        {item.sessionLength}
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                            {performance && (
                                <div>
                                    <h2>Performance :</h2>
                                    {performance.data.map((item, index) => (
                                        <div key={'performance-data-' + index}>
                                            <div>
                                                {performance['kind'][item.kind]}
                                                {' : '}
                                                {item.value}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
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