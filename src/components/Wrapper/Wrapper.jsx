import Header from "./Header/Header";
import Main from "./Main/Main";
import PopBrowser from "./Popups/PopBrowser/PopBrowser";
import PopExit  from "./Popups/PopExit/PopExit";
import PopNewCard  from "./Popups/PopNewCard/PopNewCard";

export default function Wrapper() {
    return (

<div className="wrapper">
    <PopExit />
    <PopNewCard />
    <PopBrowser />
    <Header />
    <Main />
</div>
    )
}
