// function calcFactory(num){//レキシカルスコープ

//   return{ //オブジェクトで返す
//     plus:function(target){
//       const newVal = num + target; //newValは関数スコープ内のため、他の関数スコープとかからは参照できない
//       console.log(`${num} + ${target}=${newVal}`);
//       num = newVal; //numはレキシカルスコープなので関数スコープの外から値を持って来れる
//     },
//     minus:function(target){
//       const newVal = num - target;
//       console.log(`${num} - ${target}=${newVal}`);
//       num = newVal;
//     },
//     multiply:function(target){
//       const newVal = num * target;
//       console.log(`${num} * ${target}=${newVal}`);
//       num = newVal;
//     },
//     divide:function(target){
//       const newVal = num / target;
//       console.log(`${num} / ${target}=${newVal}`);
//       num = newVal;
//     }
//   };
// }

//即時関数で書き換え　即時関数＝呼び出された一度だけ実行される
let c =(function(num){//レキシカルスコープ
 return { //オブジェクトで返す
    plus:function(target){
      const newVal = num + target; //newValは関数スコープ内のため、他の関数スコープとかからは参照できない
      console.log(`${num} + ${target}=${newVal}`);
      num = newVal; //numはレキシカルスコープなので関数スコープの外から値を持って来れる
    },
    minus:function(target){
      const newVal = num - target;
      console.log(`${num} - ${target}=${newVal}`);
      num = newVal;
    },
    multiply:function(target){
      const newVal = num * target;
      console.log(`${num} * ${target}=${newVal}`);
      num = newVal;
    },
    divide:function(target){
      const newVal = num / target;
      console.log(`${num} / ${target}=${newVal}`);
      num = newVal;
    }
  };
})(10)

c.plus(5);
c.minus(3);
c.multiply(3);
c.divide(2);

