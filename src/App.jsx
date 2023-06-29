import { useEffect } from 'react'
import session from './data/session'
import Start from './pages/start'
import Select from './pages/select';
import Bg from './components/bg';
import Main from './pages/main';

function App() {
  const {started, list} = session(s => s);
  
  return (
    <>
    {!started && <Bg />}
    {!started && <Start />}
    {started && !list && <Select />}
    {started && list && <Main />}
    </>
  )
}

export default App