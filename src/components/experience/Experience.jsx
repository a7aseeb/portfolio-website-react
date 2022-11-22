import React from 'react'
import "./experience.css"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const Experience = () => {

  const [value, setValue] = React.useState('1');
  const [expanded, setExpanded] = React.useState(false);
  
  const handleChangeTab = (event, newValue) => {
      setValue(newValue);
  }

  const handleChangeAccordian = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section id='experience'>
      <h5>What skills I've?</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <Box sx={{ width: '100%'}}>
          <TabContext value={value}>

            <Box>
              <TabList onChange={handleChangeTab} centered TabIndicatorProps={{style: {background: 'var(--color-primary)'}}}>
                <Tab label="Skills" value="1" />
                <Tab label="Technologies" value="2" />
                <Tab label="Education" value="3" />
              </TabList>
            </Box>

            <TabPanel value="1">
              <Accordion expanded={expanded === 'panel1'} onChange={handleChangeAccordian('panel1')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    General settings
                  </Typography>
                  <Typography>I am an accordion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                    Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChangeAccordian('panel2')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    You are currently not an owner
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                    varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                    laoreet.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </TabPanel>

            <TabPanel value="2">
              Item Two
            </TabPanel>

            <TabPanel value="3">
              Item Three
            </TabPanel>

          </TabContext>
        </Box>
      </div>

    </section>
  )
}

export default Experience