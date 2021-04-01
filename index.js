const express = require('express');
const path = require('path');
const app = express()

// 미들웨어 함수를 특정 경로에 등록
app.get("/api/greeting", (req, res) => {
    res.send("Hello World!");
});

// 기본 포트를 app 객체에 설정
const PORT = process.env.PORT || 5000;
app.listen(PORT);

// 리액트 정적 파일 제공
app.use(express.static(path.join(__dirname, 'client/build')));


// 라우트 설정
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.use(express.static(path.join(__dirname, 'client/build')));

console.log(`server running at http ${PORT}`);