import './App.css'
import {Sidebar} from "./components/Sidebar"
import { Layout } from './components/Layout'
function App() {

  return (
    <div className='flex h-250'>
      <Sidebar/>
      <Layout/>
    </div>
  )
}

export default App
