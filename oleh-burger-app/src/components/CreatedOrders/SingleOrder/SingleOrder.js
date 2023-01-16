import './SingleOrder.css'
import OrderIngredients from './OrderIgredients/OrderIngredients'

import {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SingleOrder = ({ orderID, orderName, orderAddress, orderPhone, orderPrice, orderFast, orderProducts, index }) => {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='created-orders_order-item'>
            <Accordion expanded={expanded === `panel${index+1}`} onChange={handleChange(`panel${index+1}`)} sx='background-image: linear-gradient(to right top, #b6f0fd, #69cdee)'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        {orderID}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className=''>
                    <Typography className='created-orders_order-item_details'>
                        <span>{orderName}</span>
                        <span>{orderName}</span>
                        <span>{orderAddress}</span>
                        <span>{orderPhone}</span>
                        <span>{orderPrice}</span>
                        <ul>
                            {Object.entries(orderProducts).map(([key, value]) => 
                                <OrderIngredients 
                                key={orderID + key}
                                orderID={orderID}
                                ingredient={key}
                                quantity={value}
                                />
                                )}
                         </ul>
                        <span className='created-orders_order-item_details_fast'>{orderFast ? 'fast' : ''}</span>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default SingleOrder