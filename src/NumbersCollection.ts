import {Sorter} from './Sorter';

class NumbersCollection extends Sorter{
    constructor (public data: number[]) {
        super();
    }

    get length(): number {
        return this.data.length;
    }

    isGreater = (leftIndex: number, rightIndex: number): boolean => {
        return this.data[leftIndex] > this.data[rightIndex];
    } 

    swap = (leftIndex: number, rightIndex: number): void => {
        const temp = this.data[rightIndex];
        this.data[rightIndex] = this.data[leftIndex];
        this.data[leftIndex] = temp;
    }
}

export default NumbersCollection;