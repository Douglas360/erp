import { Box, useTheme } from "@mui/material"
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Header from "../../components/Header"
import { useState } from "react";
import { tokens } from "../../theme";

import Team from "../team";

export const Maintenance = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [value, setValue] = useState("1")

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    
    return (
        <Box m="20px" sx={{
            "& .MuiButtonBase-root": {
                borderBottom: 1,
                color: colors.greenAccent[300],
                
            },
            "& .MuiButtonBase-root:hover": {
                color: "#868dfb !important"
            },
           
        }}>
            <Header title="MANUTENÇÃO" subtitle="Cadastro de novo colaborador" />
            <TabContext value={value}>

                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Férias" value="1" />
                    <Tab label="Demissão" value="2" />
                    <Tab label="Estrutura Organizacional" value="3" />
                </TabList>

                <TabPanel value="1"><Team title="Ferias" subtitle="Descanso para nosso time"/></TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>


            </TabContext>

        </Box >
    )
}