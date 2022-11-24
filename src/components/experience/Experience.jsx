import React from 'react'
import "./experience.css"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { BsCodeSlash } from 'react-icons/bs'




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
              <div className="experience__skills">
                <div className="skill__content">
                  <article className='skill__details'>
                    <BsCodeSlash />
                    <h4>Computer programming & coding</h4>
                    <small className='text-light'> Proficient in algorithms and coding techniques.</small>

                  </article>
                  <article className='skill__details'>
                    <BsCodeSlash />
                    <h4>Software Developement</h4>
                    <small className='text-light'> description of software development</small>
                    
                  </article>
                  <article className='skill__details'>
                    <BsCodeSlash />
                    <h4>Object Oriented Design (OOD)</h4>
                    <small className='text-light'> Proficient in algorithms and coding techniques.</small>
                  </article>
                  <article className='skill__details'>
                    <BsCodeSlash />
                    <h4>Software testing and debugging</h4>
                    <small className='text-light'> Proficient in algorithms and coding techniques.</small>
                  </article>
                </div>
              </div>
            </TabPanel>

            <TabPanel value="2">
            <div className="experience__skills">
                <div className="skill__content">
                  <article className='skill__details'>
                    <BsCodeSlash />
                    <h4>Computer programming & coding</h4>
                    <small className='text-light'> Proficient in algorithms and coding techniques.</small>

                  </article>
                  <article className='skill__details'>
                    <BsCodeSlash />
                    <h4>Software Developement</h4>
                    <small className='text-light'> description of software development</small>
                    
                  </article>
                  <article className='skill__details'>
                    <BsCodeSlash />
                    <h4>Object Oriented Design (OOD)</h4>
                    <small className='text-light'> Proficient in algorithms and coding techniques.</small>
                  </article>
                  <article className='skill__details'>
                    <BsCodeSlash />
                    <h4>Software testing and debugging</h4>
                    <small className='text-light'> Proficient in algorithms and coding techniques.</small>
                  </article>
                </div>
              </div>
            </TabPanel>

            <TabPanel value="3">
            <div className="experience__skills">
                <div className="skill__content">
                  <article className='skill__details'>
                    <BsCodeSlash />
                    <h4>Computer programming & coding</h4>
                    <small className='text-light'> Proficient in algorithms and coding techniques.</small>

                  </article>
                  <article className='skill__details'>
                    <BsCodeSlash />
                    <h4>Software Developement</h4>
                    <small className='text-light'> description of software development</small>
                    
                  </article>
                  <article className='skill__details'>
                    <BsCodeSlash />
                    <h4>Object Oriented Design (OOD)</h4>
                    <small className='text-light'> Proficient in algorithms and coding techniques.</small>
                  </article>
                  <article className='skill__details'>
                    <BsCodeSlash />
                    <h4>Software testing and debugging</h4>
                    <small className='text-light'> Proficient in algorithms and coding techniques.</small>
                  </article>
                </div>
              </div>
            </TabPanel>

          </TabContext>
        </Box>
      </div>

    </section>
  )
}

export default Experience