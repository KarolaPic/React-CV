import React from "react"
import "./FormationsExperiences.css"
import DataFormations from "../datas/Formations"
import DataExperiences from "../datas/Experiences"
import dataAbilities from "../datas/Abilities"
import Formations from "./Formations"
import Experiences from "./Experiences"
import Abilities from "./Abilities"

function FormationsExperiences() {
  return (
    <>
      <Formations datas={DataFormations} />
      <Experiences datas={DataExperiences} />
      <Abilities datas={dataAbilities} />
    </>
  )
}

export default FormationsExperiences
