import React,{useState} from "react";

function RenderLi(props) {
    const [changeValue, setChangeValue] = useState('');

    const li = props.li;
    const lis = props.lis;
    const setLis = props.setLis;
    
    const changeFlag = (id) => {
        setLis(lis.map(li => {
          if(li.id === id) {
            li.flag = true;
          }; // 내가 선택한 거 true로 바꾸고
          return li // li들 출력
        }));
       }

       const deletBtn = (targetId) => {
        setLis(lis.filter(li => {
          return li.id !== targetId ;
        }));
      };
    
      const edit = (value, id) => {
        setLis(lis.map(li => {
          if(li.id === id) {
            if(value === '' || li.value) {
              alert('안에 값이 수정되지 않았습니다. 수정 하지 않으실 거면 취소를 눌러주세요');
            }else {
              li.value = value; // 기존 li value에 사용자가 입력한 값 업데이트
              li.flag = false ;
              setChangeValue('');
            }
          }
          return li
        }));
      };

      const cancel= (id) => {
        setLis(lis.map(li => {
          if(li.id === id) {
            li.flag = false;
          }
          return li
        }));
      };
    return(
        <li id="li">
        {li.flag ?( // flag = true
        <input type='text' defaultValue={li.value} onChange={(e) => setChangeValue(e.target.value)}/>
        ) :( // flag = flase
        <>{li.value}</>
        )}
        {li.flag ?(
          <>
          <button className="button" onClick={() => cancel(li.id)}>취소</button>
          <button className="button" onClick={() => edit(changeValue, li.id)}>확인</button>
          <button className="button" onClick={() => deletBtn(li.id)}>삭제</button>
          
          </>
        ) :(
          <>
          <button className="button" onClick={() => changeFlag(li.id)}>수정</button>
          <button className="button" onClick={() => deletBtn(li.id)}>삭제</button>
          </>
        )}
      </li>
    );
};

export default RenderLi