// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
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

// App.jsx
// import React from 'react';
import './App.css';

const App = () => {
  const handleLogin = () => {
    // Placeholder action for login button (refreshes the page)
    window.location.reload();
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Welcome to DevTrack!</h1>
        <p className="tagline">Your Journey to Organized and Efficient Projects Starts Here</p>
      </header>

      <main className="welcome-content">
        <p className="welcome-message">
          DevTrack is designed to streamline your workflow, track progress, and ensure 
          no task falls through the cracks. Whether you’re managing a team project or working 
          on personal goals, DevTrack has everything you need to stay on track.
        </p>
        <button className="login-button" onClick={handleLogin}>
          Get Started
        </button>
      </main>

      <footer className="footer">
        <p>© 2024 DevTrack. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
