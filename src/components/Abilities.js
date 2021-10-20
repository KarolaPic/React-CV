import React from "react"

function Abilities(props) {
  const datas = props.datas

  return (
    <div className="cursus">
      <h2>Habilidades</h2>
      {datas.map(item => (
        <div className="" key={item.id}>
          <div className="grid__item">
            <h3 className="grid__title">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Abilities
