function defaultFunction(){
    console.log(
        'this is a default export'
    )
}

const a = 'aaa';
const b = 'bbb';

export default defaultFunction;

export {a, b};