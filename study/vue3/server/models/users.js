const fs = require('fs');
const { resolve } = require('path');

let from = (path) => {
  let data;
  path = resolve(__dirname, '../tables/users.json');
  try {
    data = fs.readFileSync(path, {
      encoding: 'utf-8',
    });
    data = JSON.parse(data) || [];
  } catch (err) {
    data = [];
  }

  return {
    insert(item) {
      item.id = Date.now() + '';
      item.avatar = 'https://picsum.photos/100';

      data.push(item);
      try {
        fs.writeFileSync(path, JSON.stringify(data));
      } catch (err) {
        console.error(err);
        return false;
      }

      return true;
    },
    findAll(name) {
      return name ? data.filter((user) => user.name.includes(name)) : data;
    },
    findById(id) {
      return data.filter((item) => item.id === id)[0];
    },
    findByName(name) {
      return data.filter((user) => user.name === name);
    },
    findByPage({ page = 1, pageSize = 5 }) {
      let start = (page - 1) * pageSize;
      return {
        list: data.slice(start, start + pageSize),
        page: {
          page,
          pageSize,
          pages: Math.ceil(data.length / pageSize),
          total: data.length,
        },
      };
    },
    remove(id) {
      data = data.filter((item) => item.id !== id);
      try {
        fs.writeFileSync(path, JSON.stringify(data));
      } catch (err) {
        return false;
      }

      return true;
    },
    update(v) {
      let index = data.findIndex((item) => item.id === v.id);
      data.splice(index, 1, { ...data[index], ...v });

      try {
        fs.writeFileSync(path, JSON.stringify(data));
      } catch (err) {
        return false;
      }

      return true;
    },
    login({ name, password }) {
      let res = data.filter(
        (item) => item.name === name && item.password === password
      );
      return res.length > 0 ? res[0] : false;
    },
  };
};

module.exports = {
  insert(user) {
    return from('../tables/users.json').insert(user);
  },
  findAll(name) {
    return from('../tables/users.json').findAll(name);
  },
  findByPage(opts) {
    return from('../tables/users.json').findByPage(opts);
  },
  findById(id) {
    return from('../tables/users.json').findById(id);
  },
  update(user) {
    return from('../tables/users.json').update(user);
  },
  remove(id) {
    return from('../tables/users.json').remove(id);
  },
  login(user) {
    return from('../tables/users.json').login(user);
  },
  existUser(name) {
    return !!from('../tables/users.json').findByName(name).length;
  },
};
