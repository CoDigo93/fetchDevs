
import { Routes } from './routes' 
import { RepositoryProvider } from './context/RepositoryContext'


function App() {
  return (
    <RepositoryProvider>
      <Routes />
    </RepositoryProvider>
  )
}
export default App;
