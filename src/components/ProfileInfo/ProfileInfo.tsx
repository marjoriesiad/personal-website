import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLocationDot,
    faCalendarDays,
} from '@fortawesome/free-solid-svg-icons'
import './profileInfo.css'

const ProfileInfo = () => {
    return (
        <div className="profile-info">
            <h6 className="profile-name">Marjorie Siad</h6>
            <p className="profile-at">@borderadius</p>

            <p className="profile-bio">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                consequatur reprehenderit possimus porro nihil ipsam repellendus
                id facere a dolorem consequuntur voluptates ut, delectus
                sapiente? At ullam sunt nam officia.
            </p>

            <div className="profile-sub">
                <p className="profile-location">
                    <FontAwesomeIcon
                        icon={faLocationDot}
                        className="profile-icon"
                    />
                    Moselle, France
                </p>

                <p className="profile-calendar">
                    <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="profile-icon"
                    />
                    Site créé en novembre 2022
                </p>
            </div>

            <div className="profile-count">
                <p>
                    <span>25</span> projets pro
                </p>
                <p>
                    <span>12</span> projets perso
                </p>
            </div>
        </div>
    )
}

export default ProfileInfo
