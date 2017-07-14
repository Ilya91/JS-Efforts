import MainMenu from './MainMenu'

const Home = ({ children }) =>
    <div className="home">
        <MainMenu className="home-page-menu"/>
        { children ? children : <div id="homebox">
            <h1>Rock Appreciation Society</h1>
        </div>}
    </div>

export default Home