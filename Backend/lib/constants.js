require("dotenv").config();

/* evn values*/
exports.port = process.env.PORT;
exports.ENV = process.env.ENV;
exports.mongo_url = process.env.MONGO_URL
exports.mysql = JSON.parse(process.env.MYSQL)


/*HTTP CODES*/
exports.BAD_REQUEST = 400;
exports.VALIDATION_ERROR = 412;
exports.NOT_FOUND = 404;
exports.NOT_ALLOWED = 405;
exports.INTERNAL_ERROR = 500;
exports.BAD_GATEWAY = 502;
exports.SUCCESS = 200;
exports.CREATED = 201;
exports.ACCEPTED = 202;
exports.CONFLICT = 409;
exports.UNAUTHORIZED = 401;
exports.FORBIDDEN = 403;
exports.TOO_LARGE = 413;
exports.REDIRECT = 302;

/*Response Messages*/
exports.SUCCESS_MSG = "success";
exports.ERROR_MSG = "error";
exports.DB_ERROR = "Database Error";
exports.INTERNAL_SERVER_ERROR = "Internal Server Error";
exports.ERR_CREATING = "Error in Creating";
exports.ERR_FETCHING = "Error in Fetching";
exports.ERR_UPDATING = "Error in Updating";
exports.ERR_DELETING = "Error in Deleting";
exports.CREATION_SUCCESS = "Created Successfully";
exports.DELETION_SUCCESS = "Deleted Successfully";
exports.UPDATION_SUCCESS = "Updated Successfully";