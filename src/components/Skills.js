import React from "react"
import "./Skills.css"
import Skill from "./Skill"
import Interests from "./Interests"

function Skills() {
  return (
    <>
      <div className="skills">
        <h2 className="h2">Tecnologías</h2>
        <Skill title="HTML" rating="5" />
        <Skill title="CSS" rating="4" />
        <Skill title="JAVA" rating="4" />
        <Skill title="JS" rating="4" />
        <Skill title="PHP" rating="4" />
        <Skill title="PASCAL" rating="3" />
        <Skill title="C" rating="3" />
        <Skill title="C++" rating="3" />
        <Skill title="LARAVEL" rating="3" />
        <Skill title="ASM" rating="4" />
      </div>
      <div className="skills">
        <h2 className="h2">Idiomas</h2>
        <Skill title="Inglés" rating="3" />
      </div>
      <Interests />
    </>
  )
}

export default Skills
