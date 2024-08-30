import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Products from './Products';
import Options from './Options';
import ErrorBanner from './ErrorBanner';
import { OrderContext } from '../context/OrderContext';

const Type = ({ orderType }) => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    const [orderData, updateItemCount] = useContext(OrderContext); // 배열을 반환하기 때문에 분해하여 할당할 땐 순서를 기준으로 원하는 이름으로 재할당 가능
    //orderData에는 itemName, newItemCount, orderType
    //updateItemCount에는 orderData로 값을 업데이트해주는 함수
    console.log(orderData, updateItemCount);

    useEffect(() => {
        loadItems(orderType);
    }, [orderType]);

    const loadItems = async (orderType) => {
        try {
            const response = await axios.get(`http://localhost:4000/${orderType}`);
            //Type 컴포넌트를 props로 받는 orderType에 따라 동적으로 활용하기 때문에 백엔드 호출도 동일하게 처리
            setItems(response.data);
            console.log(response.data);
        } catch (error) {
            setError(true);
        }
    };

    const ItemComponent = orderType === 'products' ? Products : Options;

    const optionItems = items.map((item) => {
        return (
            <ItemComponent
                key={item.name}
                name={item.name}
                imagePath={item.imagePath}
                updateItemCount={(itemName, newItemCount) => {
                    updateItemCount(itemName, newItemCount, orderType);
                }}
            />
        );
    });

    if (error) {
        return <ErrorBanner message="에러가 발생했습니다" />;
    }

    return (
        <div>
            <h2>주문 종류</h2>
            <p>하나의 가격</p>
            <p>총 가격 : {orderData.totals[orderType]}</p>
            <div style={{ display: 'flex', flexDirection: orderType === 'options' ? 'column' : 'row' }}>
                {optionItems}
            </div>
        </div>
    );
};

export default Type;
