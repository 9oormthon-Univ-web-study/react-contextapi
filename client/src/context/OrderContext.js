import { createContext, useState, useMemo, useEffect } from 'react';

//context 객체 안에는 Provider라는 컴포넌트가 내장되어있음.
export const OrderContext = createContext();

/* index.js에서 전역으로 처리할 값들을 선언하고 연산하는 과정이 많아지면 가독성이 떨어지기 때문에
OrderContextProvider라는 함수를 만들고 index.js에서 호출할 수 있도록 함 */
export function OrderContextProvider(props) {
    const [orderCounts, setOrderCounts] = useState({
        //주문한 애들을 모아두는 객체, key, value쌍의 리스트로 담기 위해서 Map으로 선언해둠
        products: new Map(), // 제품명과 개수의 쌍으로 저장
        options: new Map(),
    });

    const [totals, setTotals] = useState({
        products: 0,
        options: 0,
        total: 0,
    });

    const pricePerItem = {
        products: 1000,
        options: 500,
    };

    const calculateSubtotal = (orderType, orderCounts) => {
        let optionCount = 0;
        for (const count of orderCounts[orderType].values()) {
            optionCount += count;
        }

        return optionCount * pricePerItem[orderType];
    };

    useEffect(() => {
        const productsTotal = calculateSubtotal('products', orderCounts);
        const optionsTotal = calculateSubtotal('options', orderCounts);
        const total = productsTotal + optionsTotal;
        setTotals({
            products: productsTotal,
            options: optionsTotal,
            total,
        });
    }, [orderCounts]);

    //map 최신화 함수
    //value는 orderCounts를 return해주는 함수이고 이 함수는 orderCounts값이 바뀌지 않으면 저장된 값으로만 가져옴
    const value = useMemo(() => {
        /**
         *
         * @param {상품_이름} itemName
         * @param {새로_등록할_상품_몇개_담았는지} newItemCount
         * @param {products_or_options} orderType
         */
        const updateItemCount = (itemName, newItemCount, orderType) => {
            const newOrderCounts = { ...orderCounts }; //현재 주문 내역들을 받아서 newOrderCounts로(불변성 유지)

            //products, oprtions 중 선택된 유형의 value값을 담음
            const orderCountsMap = orderCounts[orderType]; //products인지, options인지, orderType이 동적으로 제공되기 때문에 대괄호 표기법 사용
            orderCountsMap.set(itemName, parseInt(newItemCount)); //둘 중 하나의 Map에 상품 이름과 몇개 등록됐는지 저장

            setOrderCounts(newOrderCounts);
        };
        return [{ ...orderCounts, totals }, updateItemCount]; //Provider에서 props로 전달해주는건 value밖에 없어서 모든 정보들을 함께 return해줌
    }, [orderCounts, totals]);
    return <OrderContext.Provider value={value} {...props}></OrderContext.Provider>;
    // `{...props}`는 렌더링으로 자식 컴포넌트를 띄우겠다는 의미
    // 여기서 OrderContextProvider는 index.js에서 app컴포넌트를 감싸고 있기 때문에 그 컴포넌트들을 렌더링할 수 있게 되는 것
}
