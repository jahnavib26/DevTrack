import { useState } from 'react';
import './welcome_page.css';

function WelcomePage() {
  const [highContrast, setHighContrast] = useState(false);

  const handleCreateProject = () => {
    // Your project creation logic here
    console.log('Creating project...');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCreateProject();
    }
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('high-contrast-mode', !highContrast);
  };

  return (
    <div className={`welcome-page ${highContrast ? 'high-contrast' : ''}`}>
      <header>
        <h1>Welcome to DevTrack</h1>
        <button 
          aria-label="Toggle High Contrast Mode" 
          onClick={toggleHighContrast} 
          className="toggle-contrast"
        >
          Toggle High Contrast
        </button>
      </header>

      <main>
        <button 
          aria-label="Create New Project" 
          role="button" 
          onClick={handleCreateProject}
          onKeyPress={handleKeyPress}
          className="create-project-btn"
        >
          <span aria-hidden="true">+</span> Create Project
        </button>
        
        <div 
          role="button" 
          tabIndex="0" 
          aria-label="Learn More About DevTrack" 
          onClick={() => console.log('Learn more clicked')}
          onKeyPress={(e) => { if (e.key === 'Enter') console.log('Learn more clicked'); }}
          className="learn-more-btn"
        >
          Learn More
        </div>
      </main>
    </div>
  );
}

export default WelcomePage;
