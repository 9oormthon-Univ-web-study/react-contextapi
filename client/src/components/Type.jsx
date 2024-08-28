import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Products from './Products';
import Options from './Options';

const Type = ({ orderType }) => {
    const [items, setItems] = useState([]);

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
            console.error(error);
        }
    };

    const ItemComponent = orderType === 'products' ? Products : Options;

    const optionItems = items.map((item) => {
        return <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />;
    });

    return (
        <div>
            <h2>주문 종류</h2>
            <p>하나의 가격</p>
            <p>총 가격</p>
            <div style={{ display: 'flex', flexDirection: orderType === 'options' ? 'column' : 'row' }}>
                {optionItems}
            </div>
        </div>
    );
};

export default Type;
