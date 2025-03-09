// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState } from 'react'
import './App.css'
import AppBar from './component/appbarcomponent/AppBar'
import AppDiv from './component/appbarcomponent/AppDiv'
import { Route, Routes } from 'react-router-dom'
import Activity from './pages/Activity'
import Attendance from './pages/Attendance'
import NotFound from './error/404'
import LeaveReq from './pages/LeaveReq'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppDiv/>
      <AppBar/>
      <Routes>
        <Route path='/' element={<Activity />} />
        <Route path='/attendance' element={<Attendance />} />
        <Route path='/leave-req' element={<LeaveReq />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

