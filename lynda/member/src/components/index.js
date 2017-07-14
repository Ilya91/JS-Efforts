import MainMenu from './ui/MainMenu'
export const Left = ({ children }) =>
    <div className="home">
        <MainMenu className="home-page-menu"/>
        { children }
    </div>

export const Right = ({ children }) =>
    <div className="page">
        { children }
        <MainMenu className="home-page-menu"/>
    </div>

export const Whoops404 = ({ location }) =>
    <div>
        <h1>Whoops, resource not found</h1>
        <p>Could not find {location.pathname}</p>
    </div>
