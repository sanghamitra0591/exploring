import './App.css';

function App() {
  return (
    <div className="App">
        <h2>Opacity with Box</h2>
      <p>Hover over the image to see the effect.</p>

      <div class="container">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF0ugawiwV_zA/profile-displayphoto-shrink_200_200/0/1661584548342?e=1671667200&v=beta&t=gzu6OTzudRFd88gCU_m_hDBrXoso9UijaV5MXtHGrSs" alt="Avatar" class="image" style={{width:"100%"}}/>
        <div class="middle">
            <div class="text">Happy Birthday</div>
        </div>
      </div>
    </div>
  );
}

export default App;
