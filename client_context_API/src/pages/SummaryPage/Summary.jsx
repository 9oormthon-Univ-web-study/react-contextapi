import React, { useContext, useState } from 'react';
import { OrderContext } from '../../context/OrderContext';

const Summary = ({ setStep }) => {
    const [checked, setChecked] = useState(false);
    const [orderDetails] = useContext(OrderContext);
    const productsArray = Array.from(orderDetails.products);
    const productsList = productsArray.map(([key, value]) => (
        <li key={key}>
            {value} {key}
        </li>
    ));

    const hasOptions = orderDetails.options.size > 0;
    let optionDisplay = null;

    if (hasOptions) {
        const optionsArray = Array.from(orderDetails.options.keys());
        const optionList = optionsArray.map((key) => <li key={key}>{key}</li>);
        optionDisplay = (
            <>
                <h2>옵션 : {orderDetails.totals.options}</h2>
                <ul>{optionList}</ul>
            </>
        );
    }

    const handleSubmit = (event) => {
        event.preventDefault(); //새로고침을 막아줌
        setStep('2');
    };

    return (
        <div>
            <h1>주문 확인</h1>
            <h2>여행 상품 : {orderDetails.totals.products}</h2>
            <ul>{productsList}</ul>
            {optionDisplay}
            <form
                onSubmit={(event) => {
                    handleSubmit(event);
                }}
            >
                <input
                    type="checkbox"
                    checked={checked}
                    id="confirm-checkbox"
                    onChange={(e) => {
                        setChecked(e.target.checked); //이벤트가 발생했을 때 해당 요소의 `checked`속성이 뭔지 확인하겠다는 뜻
                    }}
                />{' '}
                <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
                <br />
                <button disabled={!checked} type="submit">
                    {/* checked가 true일 때 즉, 클릭됐을 때만 버튼 활성화 */}
                    주문 확인
                </button>
            </form>
        </div>
    );
};

export default Summary;
