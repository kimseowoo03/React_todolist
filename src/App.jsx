import React, {useState} from 'react';
import RenderLi from './component/RenderLi';

function App() { 
  const [liValue, setLiValue] = useState(''); //값 바꾸기
  const [lis, setLis] = useState([]); // li 객체들
  const [error, setError] = useState('');

  const emptyValue = () => { // li value 빈값여부 
    let valueDate = true ; 
    if(!liValue) {
      setError('안에 내용을 입력해주세요');
      valueDate = false ;
    }
    return valueDate ;
  }

  const addList = () => { // lis에 새로운 객체 추가하기
    if(emptyValue()) { // 객체로 추가하기 전에 조건 확인하기
      setLis([
        ...lis,
        {value: liValue, flag: false, id: Date.now() },
      ]);
      setLiValue('');
      setError('');
    }
  }
  
  const renderList = lis.map(li => { // lis 객체들을 하나씩(li) 넣어보고 적용해서 출력
    return(
      <RenderLi li={li} lis={lis} setLis={setLis} key={li.id}/>
    );
  });

  return (
    <div id="main">
      <h1>To Do List</h1>
      <div id="input">
        <input type='text' value={liValue} onChange={(e) => setLiValue(e.target.value)} />
        <button onClick={addList}>+</button>
        <p>{error}</p>
      </div>
      <ul id="ul">
      {renderList}
      </ul>
    </div>
  );
}
export default App;

