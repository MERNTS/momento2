// LeftMenu.jsx
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import Box from '@mui/material/Box';
import SideMenuBar from "./SideMenuBar.jsx";
import SToggleButton from './_SToggleButton.jsx';
import { useSideMenuBadgeUpdate } from './_SMenuHooks.jsx';
import FullPage from '../layout/FullPage.jsx';
import Stack from '@mui/material/Stack';
import ToggleThemeButton from '../assets/theme/ToggleThemeButton.jsx';
import ChatBox from '@/components/ChatBox.jsx'; // Import the ChatBox component

function LeftMenu() {
    const updateBadge = useSideMenuBadgeUpdate();
    const onClickHandler = (id, title, idPath, titlePath) => {
        console.log(id, title, idPath, titlePath);        updateBadge(id, 0);    }

    return (
        <FullPage
            sideMenu={<SideMenuBar
                title="Momento"
                logo="./src/assets/momento.png"
                hClick={() => { console.log("headerOnClick") }}
                mClick={onClickHandler} />
            }

            pageHeader={
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    className='w-100'
                >
                    <SToggleButton icon={<VerticalSplitIcon />} />
                    <ToggleThemeButton />
                </Stack>
            }
        >

            <Box className="w-100 h-100 d-flex" sx={{ height: '100vh', overflow: 'hidden' }}>
                <ChatBox />
            </Box>

        </FullPage>
    )
}

export default LeftMenu;
