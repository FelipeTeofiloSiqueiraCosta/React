import { Suspense } from 'react'
import { GithubProfile } from './components/github-profile'

export default async function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Descrição da home e outros componentes</p>
      <Suspense fallback={<h1>Carregando perfil do github...</h1>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
