const express =require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
        'id':1,
        'image':'https://placeimg.com/64/64/1',
        'name': '김윤수',
        'birthday': '991121',
        'gender':'남자',
        'job': '대학생'
      },
      {
        'id':2,
        'image':'https://placeimg.com/64/64/2',
        'name': '김윤호',
        'birthday': '980216',
        'gender':'남자',
        'job': '회사원'
      },
      {
        'id':3,
        'image':'https://placeimg.com/64/64/3',
        'name': '심세연',
        'birthday': '020316',
        'gender':'여자',
        'job': '대학생'
      }
      ])
});

app.listen(port, () => console.log(`Listening on port ${port}`));


