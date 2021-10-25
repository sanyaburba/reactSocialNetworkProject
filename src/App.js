import './App.scss';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Navbar from './components/Navbar/Navbar';
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


function App(props) {
    return (
        <BrowserRouter>
            <div>
                <HeaderContainer/>
                <div className="app-wrapper">
                    <Navbar/>
                    <div className="app-wrapper-currentPage">
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>
                        }/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>
                        }/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
