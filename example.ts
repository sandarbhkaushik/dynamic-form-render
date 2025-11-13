//1. Memoization example
    function memoization(){
        const cache: any = {};
        console.log(cache);
        return function (num: any) {
            if(num in cache){
                console.log('fetching square from cache');
                return cache[num];
            } else {
                console.log('calculating square and store cache');
                const result = num*num;
                cache[num] = result; // store
                return result;
            }
        }
    }
    const square = memoization();

    console.log(square(5))
    console.log(square(5))
    console.log(square(3));

//2. clouser example
    function createCountr(){
      let count = 0;
      return {
        increment(){
          count++;
          return count; 
        },
        decrement(){
          count--;
          return count;
        },
        getCount(){
          return count;
        }
      }
    }

    const counter = createCountr();
    console.log(counter.increment());
    console.log(counter.increment());
    console.log(counter.getCount());
