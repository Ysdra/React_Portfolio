

function App() {
  return (
    <div className="App">
      
      <body>
    <header>
        <div className="logo">
            <img src={process.env.PUBLIC_URL + "/images/Logo.png"} alt="Joe Park Logo"/>
        </div>
        <nav className="nav">
             <ul>
                 <li><a href="#home">Home</a></li>
                 <li><a href="#about">About Me</a></li>
                 <li><a href="#projects">My Projects</a></li>
             </ul>
        </nav>
    </header>

 
    <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
            Hi, I am <strong>Joe Park</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">Aspiring full-stack dev</p>
        <img src={process.env.PUBLIC_URL + "/images/Me.jpg"} alt="A picture of Joe Park" className="intro__img"/>
    </section>

    
    <section className="about-me" id="about">
        <h2 className="section__title section__title--about">About Me</h2>
        <p className="section__subtitle section__subtitle--about"></p>

        <div className="about me__body">
            <p>Hey Y'all, my name is Joe and I am an aspiring full-stack web developer who is currently enrolled at the UT Austin coding bootcamp. I graduated from UT Austin in 2018 with a degree in Economics and 
               currently already work full-time in the tech industry in Austin, Texas. Feel free to reach out to me via my contact links at the bottom of this portfolio! 
            </p>
        </div>

        <img src={process.env.PUBLIC_URL + "/images/Texas State Capital Rotunda.jpg"} alt="Texas State Capital Rotunda" className="about-me__img"/>
    </section>

    
    <section className="my-projects" id="projects">
        <h2 className ="section__title--projects">My Projects</h2>
        <p className="section__subtitle--projects">A selection of my projects</p>

        <div className="portfolio">
            
            <a href="https://jonesliddy77.github.io/Persona/" className="portfolio__item">
                <img src={process.env.PUBLIC_URL + "/images/Persona.gif"} alt="Persona Project" className="portfolio__img"/>
                <figcaption>.Persona</figcaption>
            </a>
            
            <a href="https://ysdra.github.io/Agenda_Web_App/" className="portfolio__item">
                <img src={process.env.PUBLIC_URL + "/images/Work Day Scheduler Screenshot.png"} alt="Work Day Planner" className="portfolio__img"/>
                <figcaption>Agenda Web App</figcaption>
            </a>
           
            <a href="https://ysdra.github.io/Weather_Status_Checker/" className="portfolio__item">
                <img src={process.env.PUBLIC_URL + "/images/Weather Application Live Image.png"} alt="Weather App" className="portfolio__img"/>
                <figcaption>Weather Web App</figcaption>
            </a>
            
            <a href="https://github.com/Portmeister/budgetApp" className="portfolio__item">
                <img src={process.env.PUBLIC_URL + "/images/Budget_App.gif"} alt="Budget App Project" className="portfolio__img"/>
                <figcaption>Budget App</figcaption>
            </a>
        </div>
  </section>

  
  <footer className="footer">
      <h1>Contact Me</h1>
    <a href="mailto:joseph.m.park@utexas.edu" className="footer__link">joseph.m.park@utexas.edu (832) 525-5051</a>
    <a href="https://www.linkedin.com/in/joeparkuipath/" className="footer__link">
        <i className="fab fa-linkedin"></i>  
    </a>
    <a href="https://github.com/Ysdra" className="footer__link">
        <i className="fab fa-github-square"></i>
    </a>
    <a href={process.env.PUBLIC_URL + "Resume.pdf"}>Resume</a>
  </footer>
  </body>  
    </div>
  );
}

export default App;
