import React from 'react';

const Options = ({ name, imagePath, updateItemCount }) => {
    return (
        <form>
            <input
                type="checkbox"
                id={`${name} option`}
                onChange={(e) => {
                    updateItemCount(name, e.target.value ? 1 : 0);
                }}
            />{' '}
            <label htmlFor={`${name} option`}>{name}</label>
            {/* htmlFor 속성으로 연결할 input태그의 id값을 넣어주면 label content를 클릭하면 input에 포커스됨 */}
        </form>
    );
};

export default Options;
