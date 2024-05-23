// MMLayout.jsx
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import Stack from '@mui/material/Stack';

import SToggleButton from '../menu/_SToggleButton.jsx';
import { useSideMenuBadgeUpdate } from '../menu/_SMenuHooks.jsx';
import MMPageTemplate from './MMPageTemplate.jsx';
import ToggleThemeButton from '../assets/theme/ToggleThemeButton.jsx';
import ChatBox from '@/components/ChatBox.jsx';
import MMLeft from "./ColumnLeft.jsx";
import MMRight from "@/layout/ColumnRight.jsx"; // Import the ChatBox component

function MMLayout() {
    const updateBadge = useSideMenuBadgeUpdate();
    const onClickHandler = (id, title, idPath, titlePath) => {
        console.log(id, title, idPath, titlePath);        updateBadge(id, 0);    }

    return (
        <MMPageTemplate
            sideMenu={<MMLeft
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

            children={<ChatBox />}

            rightColumn={<MMRight
                title="Momento Right"
                logo="./src/assets/momento.png"
                hClick={() => { console.log("headerOnClick") }}
                mClick={onClickHandler} />
            }
        >
        </MMPageTemplate>
    )
}

export default MMLayout;
