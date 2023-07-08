const validateRegisterFields = (data = {}) => {
  const { name, email, password, locationName, latitude, longitude } = data;
  const errors = {};
  if (!name) {
    errors.name = "Name is required";
  }
  if (!email) {
    errors.name = "Email number is required";
  }
  // if (!locationName || !latitude || !longitude) {
  //   errors.location = "Location access is disabled";
  // }
  return errors;
};

module.exports = { validateRegisterFields };
