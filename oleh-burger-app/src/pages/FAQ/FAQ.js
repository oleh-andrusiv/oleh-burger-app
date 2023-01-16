import {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './FAQ.css'

export default function FAQ () {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='faq container'>
      <h2 className='faq_header'>FAQ</h2>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx='background-image: linear-gradient(to right top, #b6f0fd, #69cdee)'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            I was charged an incorrect amount for my order. How can I resolve this?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We apologize that you are experiencing technical difficulties. Please confirm the card number and ZIP code tied to your card are entered correctly on your profile. If the issue persists, please contact your financial institution. If this does not resolve the issue, please contact our Digital Support team for assistance.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx='background-image: linear-gradient(to right top, #b6f0fd, #69cdee)'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            I placed an order through the App, but my order never arrived.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We apologize that your order did not arrive. Please contact our Digital Support team for assistance.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx='background-image: linear-gradient(to right top, #b6f0fd, #69cdee)'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            I placed an order, but would like to cancel it.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We do not support canceled orders at this time. 
            Please contact our Digital Support team if you require further assistance.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx='background-image: linear-gradient(to right top, #b6f0fd, #69cdee)'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            My order was delivered, but the contents were not what I ordered.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We apologize that your order did not arrive as expected. Please contact the restaurant for assistance. If this does not resolve your issue, please contact our Digital Support team for further assistance.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}