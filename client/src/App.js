import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [serverResponse, setServerResponse] = useState('');

  useEffect(() => {
    // 서버로부터 데이터를 요청하고 응답을 받는 함수
    const fetchData = async () => {
      try {
        const response = await fetch('/test');
        const data = await response.json(); // JSON 응답 파싱
        console.log(data)
        setServerResponse(data.message); // 'ㅎㅇ' 메시지 접근
      } catch (error) {
        console.error('Error fetching data:', error);
        setServerResponse('Failed to fetch data');
      }
    };

    fetchData(); // 함수 실행
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div className="App">
      <p>ㅎㅇㅎㅇㅎㅇ{serverResponse}</p> {/* 서버 응답 출력 */}
    </div>
  );
}

export default App;
