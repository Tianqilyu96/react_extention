import React from "react";
import ReactDOM from "react-dom";
export default function Demo3() {
  //Hooks可以使function组件使用state,ref
  //useState返回一个数组
  //第一个是state，第二个是setState方法
  const [sum, setSum] = React.useState(0);
  const [name, setName] = React.useState("Hahaha");
  const [time, setTime] = React.useState(0);

  //使function组件可以使用life cycle hooks
  //接收两个参数
  //第一个为函数，第二个为监测对象的数组，空数组为不检测-类似componentDidMount，不写第二个参数则都监测-类似componentDidUpdate
  //for example [sum,name]
  //第一个函数return的函数为componentWillUnmount
  React.useEffect(() => {
    let timer = setInterval(() => setTime((time) => time + 1), 1000);
    return ()=>{clearInterval(timer)}
  }, []);

  //定义ref与class里的createRef一样
  const myRef = React.useRef()

  function add() {
    //setSum(sum+1)
    setSum((sum) => sum + 1);
  }

  function changeName() {
    setName((name) => "Lalala");
  }

  function unmount(){
      ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  //show ref
  function show(){
      alert(myRef.current.value)
  }

  return (
    <div>
      <h2>{time} seconds past</h2>
      <h2>Sum is: {sum}</h2>
      <h2>Name is: {name}</h2>
      <input type="text" ref={myRef}/>
      <button onClick={add}>+1</button>
      <button onClick={changeName}>change</button>
      <button onClick={unmount}>Unmount All</button>
      <button onClick={show}>show</button>
    </div>
  );
}
