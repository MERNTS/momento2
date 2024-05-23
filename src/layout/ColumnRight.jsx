// ColumnRight.jsx

import Box from '@mui/system/Box';
import Divider from '@mui/material/Divider';
import { List } from '@mui/material';
import RightHeader from "@/menu/_RightHeader.jsx";

function FnRight({
                        title,
                        logo,
                        hClick,
                        mClick,
                        footer,
                    }) {
    const openWidth = 300;
    const minWidth = 65;
    const open = true; // Placeholder for menu state

    return (
        <Box
            className="d-flex overflow-hidden h-100"
            elevation={1}
            sx={{
                transition: "width 0.3s",
                width: open ? openWidth : minWidth,
                borderRight: 1,
                borderColor: "divider",
            }}
        >
            <Box className='d-flex flex-column'>
                <RightHeader
                    title={title}
                    logo={logo}
                    onClick={hClick}

                />

                <Box
                    sx={{
                        padding: 2,
                        borderBottom: 1,
                        borderColor: "divider",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <span>Placeholder Title</span>
                    <span>Placeholder Logo</span>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        overflowY: "auto",
                        overflowX: "hidden",
                        width: open ? openWidth : minWidth,
                    }}
                >
                    <List sx={{ width: openWidth }}>
                        <div>Placeholder Content Item 1</div>
                        <div>Placeholder Content Item 2</div>
                        <div>Placeholder Content Item 3</div>
                    </List>
                </Box>

                <Divider />
                <Box sx={{ padding: 2 }}>
                    Placeholder Footer
                </Box>
            </Box>
        </Box>
    );
}

export default FnRight;
