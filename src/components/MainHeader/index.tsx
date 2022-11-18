import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './mainHeader.css'

interface MainHeaderProps {
    text: string
}

const MainHeader = ({ text }: MainHeaderProps) => {
    return (
        <div className="main-header">
            <FontAwesomeIcon icon={faArrowLeft} className="main-header-icon" />
            <div className="main-header-infos">
                <h6>{text}</h6>
            </div>
        </div>
    )
}

export default MainHeader
