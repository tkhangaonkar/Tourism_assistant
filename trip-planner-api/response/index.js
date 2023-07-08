const error = (message) => {
  return {
    status: 502,
    message,
  };
};

const notFound = (message = "Not found") => {
  return {
    status: 404,
    message,
  };
};

const success = (payload = null) => {
  return {
    status: 200,
    payload,
  };
};

module.exports = {
  error,
  notFound,
  success,
};
