//스택 클래스
class Stack {
  constructor() {
    this._size = 0;
    this.head;
    this.tail;
  }

  //묶여있는 _size를 받아서 밖에서 호출해주기 위해 getter를 사용합니다
  get size() {
    return this._size;
  }

  //스택 추가
  push(value) {
    const node = { value };
    if (this._size === 0) {
        this.head = node;
        this.tail = node;
    } else {
        node.next = this.head; //여기서 next는 무슨뜻?
        this.head = node;
    }
    this._size++;
  }

  //스택 제거
  pop() {
      if(!this.head) throw new Error('stack not exist...') //스택이 하나도 없는 상태라면 에러 발생
      if(this.head.value === this.tail.value) {
          this.tail = undefined;
      }
      const next = this.head.next;
      this.head = next;
      this._size--;
  }

  //스택 검색 = index
  search(num) {
      // 스택이 하나도 없거나 해당하는 스택이 없을 경우에 에러 발생
      if(!this.head) {
          throw new Error('stack not exist...');
      } else if (num < 0 || num >= this._size) {
          throw new Error('No corresponding...');
      }
      let count = this._size - 1;
      let current = this.head;
      while(num < count) {
          current = current.next;
          count--;
      }
      return current.value;
  }



}
