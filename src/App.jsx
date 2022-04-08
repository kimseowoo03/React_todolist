import React, {useState} from 'react';

function App() { 
  const [liValue, setLiValue] = useState(''); //값 바꾸기
  const [lis, setLis] = useState([]); // li 객체들
  const [changeValue, setChangeValue] = useState('');
  const [error, setError] = useState('');


  const changeFlag = (id) => {
   setLis(lis.map(li => {
     if(li.id === id) {
       li.flag = true;
     }; // 내가 선택한 거 true로 바꾸고
     return li // li들 출력
   }));
  }

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

  const deletBtn = (targetId) => {
    setLis(lis.filter(li => {
      return li.id !== targetId ;
    }));
  };

  const edit = (value, id) => {
    setLis(lis.map(li => {
      if(li.id === id) {
        li.value = value; // 기존 li value에 사용자가 입력한 값 업데이트
        li.flag = false ;
      }
      return li
    }));
  };
  
  const renderList = lis.map(li => { // lis 객체들을 하나씩(li) 넣어보고 적용해서 출력
    return(
      <li key={li.id}>
        {li.flag ?( // flag = true
        <input type='text' defaultValue={li.value} onChange={(e) => setChangeValue(e.target.value)}/>
        ) :( // flag = flase
        <>{li.value}</>
        )}
        {li.flag ?(
          <>
          <button onClick={() => edit(changeValue, li.id)}>확인</button>
          <button onClick={() => deletBtn(li.id)}>삭제</button>
          </>
        ) :(
          <>
          <button onClick={() => changeFlag(li.id)}>수정</button>
          <button onClick={() => deletBtn(li.id)}>삭제</button>
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
        <p>{error}</p>
      </div>
      <ul>
      {renderList}
      </ul>
    </div>
  );
}
export default App;

