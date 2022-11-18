import Cards from '../Cards'
import Footer from '../Footer'
import {
    faHouse,
    faUser,
    faCode,
    faPenToSquare,
} from '@fortawesome/free-solid-svg-icons'
import './sidebar.css'

const Sidebar = () => {
    return (
        <>
            <aside className="aside-nav">
                <Cards icon={faHouse} text="Accueil" />
                <Cards icon={faUser} text="Qui suis-je ?" />
                <Cards icon={faCode} text="Mes compétences" />
                <Cards icon={faPenToSquare} text="Mes projets" />
                <Footer />
            </aside>
        </>
    )
}

export default Sidebar
