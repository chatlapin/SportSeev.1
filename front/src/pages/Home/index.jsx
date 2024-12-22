import { Link } from 'react-router-dom'
import './style.scss'
function Home() {
    return (
        <section className="home">
            <Link to={'/profil/12'}>Profil utilisateur n°12 </Link>
            <Link to={'/profil/18'}>Profil utilisateur n°18</Link>
        </section>
    )
}
export default Home