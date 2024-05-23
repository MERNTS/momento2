import LeftMenu from "./menu/LeftMenu.jsx";
import SideMenuProvider from "./menu/SideMenuProvider";
import sideMenuConfigData from "./menu/LeftMenuData.jsx";

function App() {
    return (
        <SideMenuProvider menuData={sideMenuConfigData}>
            <LeftMenu />
        </SideMenuProvider>
    )
}

export default App;