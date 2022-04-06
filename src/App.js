import React, {useRef, useState} from 'react';

function App() { 
  const [liValue, setLiValue] = useState(''); //값 바꾸기
  const [lis, setLis] = useState([]); // li 객체들
  // 이미 만들어 놨네요 이거 수정에 쓰면 됨
  const [changeValue, setChangeValue] = useState('');


  const changeFlag = (id) => {
   setLis(lis.map(li => {
     if(li.id === id) {
       li.flag = true;
     }; // 내가 선택한 거 true로 바꾸고
     return li // li들 출력
   }));
  }

  const addList = () => {
    setLis([
      ...lis,
      {value: liValue, flag: false, id: Date.now() },
    ]);
    setLiValue('');
  }

  const deletBtn = (targetId) => {
    setLis(lis.filter(li => {
      return li.id !== targetId ;
    }));
  };

  const edit = (value, id) => {
    setLis(lis.map(li => {
      if(li.id === id) {
        console.log(value, id)
      }
      return li
    }));
  };
  
  const renderList = lis.map(li => {
    return(
      <li key={li.id}>
        {li.flag ?( // flag = true
        <input type='text' defaultValue={li.value} onChange={(e) => setChangeValue(e.target.value)}/>
        ) :( // flag = flase
        <>{li.value}</>
        )}
        {li.flag ?(
          <>
          <button onClick={() => deletBtn(li.id)}>삭제</button>
          <button onClick={() => edit(changeValue, li.id)}>확인</button>
          </>
        ) :(
          <>
          <button onClick={() => deletBtn(li.id)}>삭제</button>
          <button onClick={() => changeFlag(li.id)}>수정</button>
          </>
        )}
      </li>
    );
  });

  return (
    <div>
      <h1>To Do List</h1>
      <div>
        <input type='text' value={liValue} onChange={(e) => setLiValue(e.target.value)} />
        <button onClick={addList}>+</button>
        {renderList}
      </div>
      <ul>

      </ul>
    </div>
  );
}
export default App;

