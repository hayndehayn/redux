import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, fetchCounter } from './counterSlice';
import { useEffect } from 'react';

export function Counter() {
    const count = useSelector((state) => state.counter.value);
    const loading = useSelector((state) => state.counter.loading);
    const error = useSelector((state) => state.counter.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCounter());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
            <div>
                <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
            </div>
        </div>
    );
}

export default Counter;