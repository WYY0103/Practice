const express = require('express');
const bodyParser = require('body-parser');
const userModel = require('./models/users');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/users', (req, res) => {
  let { name } = req.query;
  res.json({
    code: 200,
    msg: '查询成功',
    data: userModel.findAll(name),
  });
});

app.post('/register', (req, res) => {
  // console.log(req.body);
  if (userModel.existUser)
    return res.json({
      code: 405,
      msg: '用户名已存在',
    });
  res.json(
    userModel.insert(req.body)
      ? { code: 200, msg: '注册成功' }
      : {
          code: 400,
          msg: '注册失败，请检查网络',
        }
  );
});

app.post('/login', (req, res) => {
  // console.log(req.body);
  let user = userModel.login(req.body);
  res.json(
    user
      ? { code: 200, msg: '登录成功', data: user }
      : {
          code: 400,
          msg: '用户名或密码错误',
        }
  );
});

app.post('/users/insert', (req, res) => {
  // console.log(req.body);
  res.json(
    userModel.insert(req.body)
      ? { code: 200, msg: '操作成功' }
      : {
          code: 400,
          msg: '操作失败，请稍后重试',
        }
  );
});

app.get('/users/page', (req, res) => {
  res.json({
    code: 200,
    msg: '操作成功',
    data: userModel.findByPage(req.query),
  });
});

app.delete('/users/delete', (req, res) => {
  // console.log(req.body);
  let { id } = req.body;
  res.json(
    userModel.remove(id)
      ? { code: 200, msg: '删除成功' }
      : { code: 400, msg: '删除失败' }
  );
});

app.post('/users/update', (req, res) => {
  res.json(
    userModel.update(req.body)
      ? { code: 200, msg: '修改成功' }
      : { code: 400, msg: '修改失败，请检查网络' }
  );
});

app.get('/users/id', (req, res) => {
  let { id } = req.query;
  let user = userModel.findById(id);

  res.json(
    user
      ? {
          code: 200,
          msg: '成功',
          data: user,
        }
      : {
          code: 400,
          msg: '用户不存在',
        }
  );
});

app.use((req, res) => {
  res.json({
    code: 404,
    msg: '没有当前API',
  });
});

app.listen(3000, () => {
  console.log(`Server was started at port <3000>`);
});
