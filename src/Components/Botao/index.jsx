import React from "react";
import style from "../Botao/Botao.module.scss"

class Botao extends React.Component {
  render() {
    const {type = "button"}= this.props
    return (
      <button type={type} className={style.botao}>
        {this.props.children}
      </button>
    )
  }
}

export default Botao;


// const estaAtivo = false
// const st'yle = {
//   backgroundColor: estaAtivo ? "red" : "blue";
// }
