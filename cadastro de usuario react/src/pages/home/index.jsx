import '../home/style.css'
import Excluir from '../../assets/Excluir.svg'

function Home() {

  const users = [
    {
      id: '2342aasdasds',
      name: 'João Silva',
      age: 25,
      email: 'joaosilva@gmail.com'
    },
    {
      id: '2343aasdasds',
      name: 'Maria Silva',
      age: 30,
      email: 'mariasilva@gmail.com'
    },
    {
      id: '2477aasdasds',
      name: 'Daniel',
      age: 30,
      email: 'daniel@gmail.com'
    }
  ]

  return (
    <div className="page">

      
      <div className="form-wrapper">
        <form className="container">
          <h1>Cadastro de Usuários</h1>
          
          <label>
            <input placeholder="Nome" type="text" name="nome" />
          </label>
          <label>
            <input placeholder="Idade" type="number" name="idade" />
          </label>
          <label>
          
            <input placeholder="E-mail" type="e-mail" name="email" />
          </label>

          <button type="button">Cadastrar</button>
        </form>
      </div>

      <div className="users-wrapper">
        {users.map(user => (
          <div className="card" key={user.id}>
            <div>
              <p><span>Nome: </span> {user.name}</p>
              <p><span>Idade: </span> {user.age}</p>
              <p><span>Email: </span> {user.email}</p>
            </div>

            <button type="button">
              <img src={Excluir} alt="Excluir usuário" />
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Home
