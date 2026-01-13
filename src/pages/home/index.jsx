import { useEffect, useState, useRef } from 'react'
import '../home/style.css'
import Excluir from '../../assets/Excluir.svg'
import api from '../../services/api'

function Home() {
  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  //  Buscar usuários
  async function getUsers() {
    try {
      const response = await api.get('/usuarios')
      setUsers(response.data)
    } catch (error) {
      console.error('Erro ao buscar usuários:', error)
    }
  }

  //  Criar usuário
  async function createUsers() {
    try {
      await api.post('/usuarios', {
        name: inputName.current.value,
        age: Number(inputAge.current.value),
        email: inputEmail.current.value
      })

      getUsers() // atualiza lista após cadastro

      inputName.current.value = ''
      inputAge.current.value = ''
      inputEmail.current.value = ''
    } catch (error) {
      console.error('Erro ao criar usuário:', error)
    }
  }

  //  Deletar usuário
  async function deleteUser(id) {
    try {
      await api.delete(`/usuarios/${id}`)
      await getUsers() // atualiza lista após exclusão
    } catch (error) {
      console.error('Erro ao deletar usuário:', error)
    }
  }

  //  useEffect NO TOPO do componente
  useEffect(() => {
    (async () => {
      await getUsers()
    })()
  }, [])

  return (
    <div className="page">
      <div className="form-wrapper">
        <form className="container">
          <h1>Cadastro de Usuários</h1>

          <input placeholder="Nome" type="text" ref={inputName} />
          <input placeholder="Idade" type="number" ref={inputAge} />
          <input placeholder="E-mail" type="email" ref={inputEmail} />

          <button type="button" onClick={createUsers}>
            Cadastrar
          </button>
        </form>
      </div>

      <div className="users-wrapper">
        {users.map(user => (
          <div className="card" key={user.id}>
            <div>
              <p><span>Nome:</span> {user.name}</p>
              <p><span>Idade:</span> {user.age}</p>
              <p><span>Email:</span> {user.email}</p>
            </div>

            <button type="button" onClick={() => deleteUser(user.id)}>
              <img src={Excluir} alt="Excluir usuário" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
