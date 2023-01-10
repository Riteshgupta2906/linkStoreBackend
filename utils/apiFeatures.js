class apiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  filtering() {
    const query = { ...this.queryStr }; // here the new query is made from the req.query if we just assign it then it will br like passed by reference but it should be by value
    const excludedFields = ['page', 'sort', 'limit', 'fields']; // field we want to remove
    excludedFields.forEach((ele) => {
      delete query[ele];
    }); // looping through the  excluded fields and delete the unneccsary fields from the newly made query obj
    let queryStr = JSON.stringify(query);
    queryStr = JSON.parse(
      queryStr.replace(/\b(gte|gt|lte|le)\b/g, (match) => `$${match}`) // replacing gte with $gte because in mongodb query is done in this manner
    );
    this.query.find(queryStr);
    return this;
  }
  Sorting() {
    if (this.queryStr.sort) {
      const newQuery = this.queryStr.sort.split(',').join(' '); // split(','):-split the content wherever there is the comma and join(' ') joins the content with the space also replace can be used
      this.query.sort(newQuery);
    } else {
      this.query.sort('createdAt');
    }
    return this;
  }
  Selecting() {
    if (this.queryStr.fields) {
      const fields = this.queryStr.fields.split(',').join(' ');
      this.query.select(fields);
    } else {
      this.query.select('-__v');
    }
    return this;
  }
  Pagination() {
    const page = this.queryStr.page * 1 || 1;
    const limit = this.queryStr.limit * 1 || 100; //*1 is done to convert string to int
    const skip = (page - 1) * limit;
    this.query.skip(skip).limit(limit);
    return this;
  }
}
module.exports = apiFeatures;
