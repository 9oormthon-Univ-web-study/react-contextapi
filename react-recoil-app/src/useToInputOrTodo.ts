import { useLocation, useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';

const useToInputOrTodo = () => {
    const location = useLocation();
    const go = useNavigate();

    const goToInputOrTodo = () => {
        const where = location.pathname;
        if (where === '/todo') {
            go('/');
        } else {
            go('/todo');
        }
    };

    return goToInputOrTodo;
};

export default useToInputOrTodo;
