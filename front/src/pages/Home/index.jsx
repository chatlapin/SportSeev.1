import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className="App">
            Home
            <div>
                <Link to={'/user/12'}>User 12 </Link>
                <Link to={'/user/18'}>User 18</Link>
            </div>
        </div>
    )
}
export default Home