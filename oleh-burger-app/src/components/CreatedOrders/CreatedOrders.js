import './CreatedOrders.css'

import SingleOrder from './SingleOrder/SingleOrder'
import Loader from '../Main/Loader/Loader'

import {useState, useEffect} from 'react';
import axios from "axios";

const CreatedOrders = () => {
    const loadOrders = async () => await axios.get("https://burger-api-xcwp.onrender.com/orders");

    const [orders, setOrders] = useState([]);
    const [ordersPortion, setOrdersPortion] = useState(undefined);
    const [pageQuantity, setPageQuantity] = useState(0);
    const [prevBtnActive, setPrevBtnActive] = useState('disabled');
    const [nextBtnActive, setNextBtnActive] = useState('');
    const [curentPage, setCurentPage] = useState(0);
    
    useEffect(() => {
        try {    
            loadOrders().then((response) => {
                const correctOrders = []

                response.data.map((element) => {
                    if (element.orderProducts && element.orderName && element.orderAddress && element.orderPhone && element.orderPrice) {
                        correctOrders.push(element)
                    }
                });

                setOrders(correctOrders.reverse());
                setCurentPage(1)
          })
        } catch (error) {
          console.log(error);
        }
    },[])

    const definePageQuantity = (quantity) => (Math.ceil(quantity/10));

    useEffect(() => {
        const startIndex = (+curentPage - 1) * 10;
        const endIndex = startIndex + 10;

        setPageQuantity(definePageQuantity(orders.length));

        const newOrdersPortion = orders.slice(startIndex, endIndex)

        if (curentPage === pageQuantity) {
            setNextBtnActive('disabled')
        }
        if (curentPage < pageQuantity) {
            setNextBtnActive('')
        }
        if (curentPage === 1) {
            setPrevBtnActive('disabled')
            setNextBtnActive('')
        }
        if (curentPage >= 2) {
            setPrevBtnActive('')
        }

        setOrdersPortion(newOrdersPortion)
    },[curentPage])

    const changePage = (event) => {
        event.preventDefault();
    
        const clickedElem = event.target.getAttribute('btntype');

        if (clickedElem === 'prev-page') {
            setCurentPage(curentPage-1)
        }

        if (clickedElem === 'next-page') {
            setCurentPage(curentPage+1)
        }
    } 

    if (orders.length !== 0) {
        if (pageQuantity === 0) {
            return (
                <h1>You have no any previos order yet...</h1>
            )
        } else {
            return (
                <div className='created-orders container'>
                    <h2>Your previous orders</h2>
                    <ul className='created-orders_list'>
                        {ordersPortion.map((element, index) => 
                            <SingleOrder 
                                orderID={element._id}
                                orderName={element.orderName}
                                orderAddress={element.orderAddress}
                                orderPhone={element.orderPhone}
                                orderPrice={element.orderPrice}
                                orderFast={element.orderFast}
                                orderProducts={element.orderProducts}
                                key={element._id + index}
                                index={index} 
                            />
                        )}
                    </ul>
                    <div className='created-orders_navigation' onClick={changePage}>
                        <button btntype='prev-page' className={`btn created-orders_btn prev-page ${prevBtnActive}`}>Prev</button>
                        <div className='created-orders_navigation_legend'>
                            <span>{curentPage}</span>
                            <span>of</span>
                            <span>{pageQuantity}</span>
                        </div>
                        <button btntype='next-page' className={`btn created-orders_btn next-page ${nextBtnActive}`}>Next</button>
                    </div>
                </div>
            )
        }    
    }
    if (orders.length === 0) {
        return (
            <div className='created-orders_loader container'>
                <Loader />
            </div>
        )
    }
}

export default CreatedOrders