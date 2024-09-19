import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 스토어의 상태와 액션을 정의하는 인터페이스
interface CounterStore {
    count: number;
    increment: () => void;
    reset: () => void;
    setNumber: (number: number) => void;
}

// zustand의 store는 hooks로 구성되어있으며 store를 생성할 때는 create 메서드를 활용함! set함수는 상태를 변경할 수 있음
export const useCounterStore = create<CounterStore>()(
    //zustand V4부터는 create 사용법이 바뀌었다고 함..
    persist(
        (set) => ({
            count: 1,
            increment: () => set((state) => ({ count: state.count + 1 })),
            reset: () => set({ count: 1 }), // count 1로 만드는 메서드 추가
            setNumber: (number) => set({ count: number }),
        }),
        {
            name: 'counter', // 로컬 스토리지에 저장될 키 이름
        }
    )
);
