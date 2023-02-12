import style from './App.module.css';
import Intro from "./Components/Intro/Intro/Intro";
import Main from "./Components/Main/Main/Main";
import Footer from "./Components/Footer/Footer/Footer";

function App(props) {
    return (
        <div className={style.page}>
            <Intro forIntro={props.state.intro}/>
            <Main forMain={props.state.main}/>
            <Footer forFooter={props.state.footer}/>
        </div>
    );
}

export default App;
