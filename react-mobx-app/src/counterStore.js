import { action, computed, makeObservable, observable } from 'mobx';

export default class counterStore {
    //해당 내용들을 컴포넌트에서 사용하려면 인스턴스를 생성한 후 내려줘야 함
    count = 0;

    constructor() {
        makeObservable(this, {
            // 각각의 역할을 객체의 value 부분에 부여를 해주는데 이 것을 주석을 단다고 표현함
            //observable은 관찰될 수 있는 값을 의미함 즉 mobX가 변경을 감지함
            count: observable,
            //computed는 다른 observable 상태를 기반으로 계산되는 값을 캐시하고 최적화(반환값이 캐싱됨)
            isNegative: computed,
            //action은 observable인 값을 변경하는 메서드
            increase: action,
            decrease: action,
        });
    }

    //isNegative는 computed임, 따라서 count값을 관찰하고 계산된 결과를 반환함
    get isNegative() {
        return this.count > 0 ? 'YES' : 'NO';
    }

    increase() {
        this.count += 1;
    }

    decrease() {
        this.count -= 1;
    }
}
