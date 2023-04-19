function Query() {
  this.filter = { status: { $ne: 0 } };
  this.projection = {};
  this.option = { skip: 0, limit: 100 };
}

module.exports.build = (reqQuery) => {
  let query = new Query();
  if (reqQuery && reqQuery.query) {
    let queryList = JSON.parse(reqQuery.query);
    for (let q in queryList) {
      query.filter[q] = queryList[q];
    }
  }
  if (reqQuery && reqQuery.select) {
    let selectList = reqQuery.select.split(",");
    selectList.forEach(function (select) {
      if (select != "password") {
        query.projection[select] = 1;
      }
    });
  }
  if (reqQuery && reqQuery.option) {
    let optionList = JSON.parse(reqQuery.option);
    for (let o in optionList) {
      query.option[o] = optionList[o];
    }
  }
  return query;
};
