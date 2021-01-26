
export abstract class Sorter {
    abstract length: number;
    abstract isGreater: (leftIndex: number, rightIndex: number) => boolean;
    abstract swap: (leftIndex: number, rightIndex: number) => void;

    sort(): void {
        const { length } = this;
        for(let i=0; i < length; i++){
            for(let j=0; j < length - i - 1; j++){
                if(this.isGreater(j, j+1)){
                    this.swap(j, j+1);
                }
            }   
        }
    }
}
