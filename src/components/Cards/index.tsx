import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './cards.css'

interface CardsProps {
    icon: any
    text: string
}

const Cards = ({ icon, text }: CardsProps) => {
    return (
        <div className="aside-nav-item">
            <FontAwesomeIcon icon={icon} className="aside-nav-icon" />
            <h6 className="aside-nav-text">{text}</h6>
        </div>
    )
}

export default Cards
