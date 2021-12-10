import React from "react"
import axios from "axios"
// import styled from "styled-components"


export default class App extends React.Component {

  state = {
    labenusers: [],
    inputNome: "",
    inputEmail: "",
  }

  componentDidMount() {
    this.listaUsuario()
  }

  listaUsuario = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "dandariene-braz-joy"
          }
        }
      )
      .then((res) => {
        this.setState({ labenusers: res.data })
      })
      .catch((err) => {
        alert(err.response.data)
      })
  }

  criaUsuario = () => {
    const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }

    const headers = {
      headers: {
        Authorization: "dandariene-braz-joy"
      }
    }

    axios
      .post(URL, body, headers)
      .then((res) => {
        alert("Sucesso, usuário cadastrado")
        this.criaUsuario()
      })
      .catch((err) => {
        alert(err.response.data)
      })
  }

  mudaNome = (e) => {
    this.setState({ inputNome: e.target.value })
  }

  mudaEmail = (e) => {
    this.setState({ inputEmail: e.target.value })
  }

  render() {
    const usuarios = this.state.labenusers.map((users) => {
      return <p key={users.id}>{users.name}</p>
    })
    return (
      <div>
        <div>
        <button>Trocar tela</button>
        </div>
        <div>
        <input
          type="text"
          placeholder={"Nome"}
          value={this.state.inputNome}
          onChange={this.mudaNome}
        />
        </div>
        <div>
        <input
          type="email"
          placeholder={"E-mail"}
          value={this.state.inputEmail}
          onChange={this.mudaEmail}
        />
        </div>
        <div>
        <button onClick={this.criaUsuario}>Criar Usuário</button>
        </div>
        {usuarios}
      </div>
    )
  }
}
