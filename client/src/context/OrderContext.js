import { createContext, useState, useMemo } from 'react';

const OrderContext = createContext();

/* index.js에서 전역으로 처리할 값들을 선언하고 연산하는 과정이 많아지면 가독성이 떨어지기 때문에
OrderContextProvider라는 함수를 만들고 index.js에서 호출할 수 있도록 함 */
export function OrderContextProvider(props) {
    const [orderCounts, setOrderCounts] = useState({
        //주문한 애들을 모아두는 객체, 리스트로 담기 위해서 Map으로 선언해둠
        products: new Map(),
        options: new Map(),
    });

    //value는 orderCounts를 return해주는 함수이고 이 함수는 orderCounts값이 바뀌지 않으면 저장된 값으로만 가져옴
    const value = useMemo(() => {
        const updateItemCount = (itemName, newItemCount, orderType) => {
            const newOrderCounts = { ...orderCounts }; //현재 주문 내역들을 받아서 newOrderCounts로(불변성 유지)

            const orderCountsMap = orderCounts[orderType]; //products인지, options인지
            orderCountsMap.set(itemName, parseInt(newOrderCounts)); //둘 중 하나의 Map에 상품 이름과 몇개 등록됐는지 저장

            setOrderCounts(newOrderCounts);
        };
        return [{ ...orderCounts, updateItemCount }];
    }, [orderCounts]);
    return <OrderContext.Provider value {...props}></OrderContext.Provider>;
}
