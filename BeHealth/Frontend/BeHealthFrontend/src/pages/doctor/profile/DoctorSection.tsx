import { ReactNode, useContext } from "react"
import { BsFillTelephoneFill } from "react-icons/bs"
import { FaUserNurse } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BeHealthContext } from "../../../Context"

interface Badge {
    text: string,
    icon: ReactNode,
}

const Badge = ({ text, icon }: Badge) => {
    return (
        <div className="badge" >
            {icon}
            <p className="badge--text">{text}</p>
        </div >
    )
}

export const DoctorSection = () => {
    const { user } = useContext(BeHealthContext)
    if (!user) return null
    return (
        <section className="user">
            <div className="row">
                <img src={user.profilePicture} className="profile--img" />
                <div className="user">
                    <p className="username">{user.name}</p>
                    <p className="information">{user.city}, {user.country}</p>
                </div>
            </div>
            <div className="badge-row">
                <Badge text={user.email.toLowerCase()} icon={<HiOutlineMail />} />
                <Badge text={`${user.phone.slice(0, 3)}-${user.phone.slice(3, 6)}-${user.phone.slice(6)}`} icon={<BsFillTelephoneFill className="filled" />} />
                <Badge text={user.specialization[0].toUpperCase() + user.specialization.slice(1)} icon={<FaUserNurse className="filled" />} />
            </div>
        </section>
    )
}
