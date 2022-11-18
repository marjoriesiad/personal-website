import banner from '../../assets/banner.png'
import profileImg from '../../assets/profile-img.jpg'
import { Link } from 'react-router-dom'
import './banner.css'

const Banner = () => (
    <>
        <div className="banner">
            <img
                src={banner}
                alt="Un astronaute dans l'espace avec le texte Lorem Ipsum"
            />
        </div>

        <div className="banner-infos">
            <div className="banner-profile">
                <img src={profileImg} alt="Illustration d'un portrait" />
            </div>

            <div className="banner-button">
                <a href="#">CV EN PDF</a>
            </div>
        </div>
    </>
)

export default Banner
