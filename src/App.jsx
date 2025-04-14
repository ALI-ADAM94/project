import Chat from "./components/chat/Chat"
import List from "./components/list/list"
import Detail from './components/detail/Detail.jsx'

const App = () => {
  return (
    <div className='container'>
    <List/>
    <Chat/>
    <Detail/>
    </div>
  )
}

export default App