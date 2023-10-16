// @ts-nocheck
// @ts-ignore
/* eslint-disable */
// use client

import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loginState, setLoginState] = useState({
    email: '',
    password: ''
  })

  const handleSignupForm = (event) => {
    event.preventDefault()
    console.log({ name, email, password })
  }

  const handleOnChangeLogin = (event, key) => {
    setLoginState({ ...loginState, [key]: event.target.value })
  }

  const handleLoginForm = (event) => {
    event.preventDefault()
  }

  const [search, setSearch] = useState('')

  useEffect(() => {
    if (search.length > 2) {
      console.log(`Realizando busca para '${search}'`)
    }
  }, [search])

  return (
    <div className={styles.container}>
      <form className={styles.forms} onSubmit={handleSignupForm}>
        <h1>Formulário de Cadastro</h1>
        <input
          type='text'
          placeholder='Nome completo'
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type='email'
          placeholder='Email'
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type='password'
          placeholder='Senha'
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type='submit'>Enviar</button>
      </form>
      <form className={styles.forms} onSubmit={handleLoginForm}>
        <h1>Formulário de Login</h1>
        <input
          type='email'
          placeholder='Email'
          required
          value={loginState.email}
          onChange={(event) => handleOnChangeLogin(event, 'password')}
        />
        <input
          type='password'
          placeholder='Senha'
          required
          value={loginState.password}
          onChange={(event) => handleOnChangeLogin(event, 'password')}
        />
        <button type='submit'>Entrar</button>
      </form>

      <form className={styles.forms}>
        <h1>Formulário de busca automática</h1>
        <input
          type='text'
          placeholder='Digite sua busca:'
          value={search}
          onChange={(event) => setSearch(event.target.value)}

        />
      </form>
    </div>
  )
}
