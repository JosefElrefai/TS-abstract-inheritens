import CharsCollection from './CharsCollection';
import NumbersCollection from './NumbersCollection';

const charsCollection = new CharsCollection('banana');
const numberCollection = new NumbersCollection([5,2,1,400]);
numberCollection.sort();
charsCollection.sort();
console.log(numberCollection.data);
console.log(charsCollection.data);
