const Calculator = require("../calculator.js");

//beforeEach    각각 테스트가 실행이 될때 먼저 실행이 한번씩 된다
//afterEach     각각 테스트가 실행이 되고 나서 실행이 한번씩 된다

//beforeAll     모든 테스트가 시작되기 전 처음 한번만 실행된다
//afterAll      모든 테스트가 끝나고 처음 한번만 실행된다


describe('Calculator',()=>{
    let cal;

    beforeEach(()=> {
        cal = new Calculator();
    })

    it('inits with 0', ()=>{
        expect(cal.value).toBe(0);
    });

    it('sets', ()=> {
        cal.set(9);
        expect(cal.value).toBe(9);
    });

    it('clear', ()=> {
        cal.set(9);
        cal.clear();
        expect(cal.value).toBe(0);
    });

    it('add', ()=> {
        cal.set(1);
        cal.add(2);

        expect(cal.value).toBe(3);
    });

    it('substract', ()=>{
        cal.substract(1);

        expect(cal.value).toBe(-1);
    });

    it('multiplies', ()=> {
        cal.set(5);
        cal.multiply(4);

        expect(cal.value).toBe(20);
    });

    describe('divides', ()=> {
        it('0/0 === NaN',()=>{
            cal.divide(0);
            expect(cal.value).toBe(NaN);
        });

        it('1/0 === Infinity',()=>{
            cal.set(1);
            cal.divide(0);
            expect(cal.value).toBe(Infinity);
        });

        it('4/4 === 1',()=>{
            cal.set(4);
            cal.divide(4);

            expect(cal.value).toBe(1);
        })

    });

});