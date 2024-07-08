import RequestError from "../errors/RequestError.js"

async function page(req, res, next) {
  try {
    let { pageSize = 5, page = 1, ordering = "_id:1" } = req.query;
    let [sortField, sort] = ordering.split(":");
    pageSize = parseInt(pageSize);
    page = parseInt(page);
    sort = parseInt(sort);
    const result = req.result;

    if (pageSize > 0 && page > 0) {
      const paginatedResult = await result.find()
        .sort({ [sortField]: sort })
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .exec();
      res.status(200).json(paginatedResult);
    } else {
      next(new RequestError());
    }
  } catch (e) {
    next(e);
  }
}

export default page;
