import createSecureStore from "@neverdull-agency/expo-unlimited-secure-store";

const SecureStore = createSecureStore();

export const setItem = async (key, value) => {
  const data = JSON.stringify(value);
  await SecureStore.setItem(key, data);
  return true;
};

export const getItem = async (key) => {
  const data = await SecureStore.getItem(key);
  return JSON.parse(data);
};

export const removeItem = async (key) => {
  await SecureStore.removeItem(key);
  return true;
};
