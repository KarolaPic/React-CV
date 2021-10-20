import React from "react"
import "./User.css"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail"
import EventIcon from "@material-ui/icons/Event"
import LocationOnIcon from "@material-ui/icons/LocationOn"

function User() {
  return (
    <div className="user">
      <img src="./images/avatar.jpg" className="user__avatar" alt="John Doe" />
      <h1 className="user__name">Karol Andrea Piñon Campos</h1>
      <p className="user__profession">ISC</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon /> Morelia, Michoacán 
        </p>
        <p className="user__info">
          <PhoneIcon /> <a href="tel:+33606060606">4431713577</a>
        </p>
        <p className="user__info">
          <MailIcon /> <a href="mailto:carol_andrea@live.com.mx">carol_andrea@live.com.mx</a>
        </p>
        <p className="user__info">
          <EventIcon /> 18 de Junio 1999
        </p>
      </div>
    </div>
  )
}

export default User
