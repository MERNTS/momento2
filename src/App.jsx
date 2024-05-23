import MMLayout from "./layout/MMLayout.jsx";
import SideMenuProvider from "./menu/SideMenuProvider";
import sideMenuConfigData from "./menu/LeftMenuData.jsx";

function App() {
    return (
        <SideMenuProvider menuData={sideMenuConfigData}>
            <MMLayout />
        </SideMenuProvider>
    )
}

export default App;