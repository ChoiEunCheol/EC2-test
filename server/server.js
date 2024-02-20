const express = require('express');
const app = express();
const port = 3000;
const path = require('path')

// 정적 파일을 제공하기 위한 폴더 설정
app.use(express.static(path.join(__dirname, "../client/build")));

// 기본 경로로 접근했을 때 응답
app.get('/test', (req, res) => {
    res.json('ㅎㅇ');
  });
// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행중입니다!`);
});
