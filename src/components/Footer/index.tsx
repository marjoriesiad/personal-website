import profileImg from '../../assets/profile-img.jpg'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <img
                src={profileImg}
                alt="Illustration d'un portrait"
                className="profile-img"
            />
            <div className="footer-copyright">
                <h6>Marjorie</h6>
                <p>2022 ©</p>
            </div>
        </footer>
    )
}

export default Footer
