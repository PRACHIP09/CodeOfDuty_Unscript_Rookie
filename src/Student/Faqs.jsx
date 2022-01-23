import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { BsChevronDown } from 'react-icons/bs'
import Paper from '@mui/material/Paper';
import close from '../Images/close.png'
import { styled } from '@mui/material/styles';
import {Link } from 'react-router-dom';

import { useHistory } from "react-router-dom";

function Faqs() {
    const history = useHistory();
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
        <div>
         <div ><img src={close} alt="close" style={{height:"6vh", width:"6vh" , cursor:"pointer" ,marginLeft:"60%", marginTop:"2vh"}} onClick={() => {history.goBack();}}/></div>
         
        <div id='FAQS' style={{ color:'black', backgroundColor: 'white', display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', fontSize:'18px'}}>
            <h1 style={{color:'#3770FF'}}> Frequently asked questions </h1>
            <h3 style={{fontFamily:'montserrat', fontWeight:'900'}}> Can&#39;t find the answers to what you are looking for? <span style={{color:'#FF8A50'}}> Reach out to our Team </span> </h3>
            <div style={{width:'60%', padding:'2% 5% 5% 5%'}}> 
                <Accordion>
                    <AccordionSummary
                    expandIcon={<BsChevronDown />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>How to get started with the course?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<BsChevronDown />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<BsChevronDown />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Accordion 3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<BsChevronDown />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Accordion 4</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Item style={{padding:'5%'}}> Each team would comprise of 2-4 members including the team leader.
                    All team members should be from same college; no inter-college 
                    teams are allowed. However, members from different branches of the
                    same college institute can form a team. </Item>
                    <Accordion>
                    <AccordionSummary
                    expandIcon={<BsChevronDown />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Accordion 5</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<BsChevronDown />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Accordion 6</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
        </div>
    )
}

export default Faqs