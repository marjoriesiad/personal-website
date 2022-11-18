import MainHeader from '../../components/MainHeader'
import Banner from '../../components/Banner'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import './home.css'

const Home = () => {
    return (
        <main className="main">
            <MainHeader text="Accueil" />
            <Banner />
            <ProfileInfo />
        </main>
    )
}

export default Home
