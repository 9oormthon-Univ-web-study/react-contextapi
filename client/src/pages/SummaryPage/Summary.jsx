import React, { useState } from 'react';

const Summary = () => {
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <form>
                <input
                    type="checkbox"
                    checked={checked}
                    id="confirm-checkbox"
                    onChange={(e) => {
                        setChecked(e.target.checked); //이벤트가 발생했을 때 해당 요소의 `checked`속성이 뭔지 확인하겠다는 뜻
                    }}
                />{' '}
            </form>
            <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
            <br />
            <button disabled={!checked} type="submit">
                {/* checked가 true일 때 즉, 클릭됐을 때만 버튼 활성화 */}
                주문 확인
            </button>
        </div>
    );
};

export default Summary;
