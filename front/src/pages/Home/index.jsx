import { useContext } from 'react'

import { Context } from '../../context'

import ToggleButton from '../../components/ToggleButton'
import ComingSoon from '../../components/ComingSoon'

import './style.scss'

function Home() {
    const { userToggle, setUserToggle } = useContext(Context)

    return (
        <section className="home">
            <div className="user-switch-wrapper">
                <p className="user-switch">
                    Switch <span>Utilisateur</span> :
                </p>
                <ToggleButton
                    id="userLink"
                    checked={userToggle}
                    onChange={setUserToggle}
                    optionLabels={['18', '12']}
                />
            </div>
            <ComingSoon />
        </section>
    )
}

export default Home