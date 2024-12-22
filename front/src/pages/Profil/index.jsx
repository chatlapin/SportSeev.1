import { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Context } from '../../context'
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
            Profil
            <div>
                <Link to={'/'}>Return to Home page</Link>
            </div>
            {user && (
                <div>
                    <h2>User Infos : </h2>
                    <div>id : {user.id}</div>
                    <ul>
                        keyData :
                        <li>calorieCount : {user.keyData.calorieCount}</li>
                        <li>proteinCount : {user.keyData.proteinCount}</li>
                        <li>
                            carbohydrateCount : {user.keyData.carbohydrateCount}
                        </li>
                        <li>lipidCount : {user.keyData.lipidCount}</li>
                    </ul>
                    {user.score && <div>score : {user.score}</div>}
                    {user.todayScore && (
                        <div>todayScore : {user.todayScore}</div>
                    )}
                    <ul>
                        userInfos :
                        <li>firstName : {user.userInfos.firstName}</li>
                        <li>lastName : {user.userInfos.lastName}</li>
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
                                {index + 1} :<li>Date : {item.day}</li>
                                <li>Kilogram : {item.kilogram}</li>
                                <li>Calories : {item.calories}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            )}
            {averageSessions && (
                <div>
                    <h2>AverageSessions :</h2>
                    {averageSessions.sessions.map((item, index) => (
                        <div key={'averageSessions-' + index}>
                            <ul>
                                Day {item.day} :
                                <li>sessionLength : {item.sessionLength}</li>
                            </ul>
                        </div>
                    ))}
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
        </section>
    )
}
export default Profil