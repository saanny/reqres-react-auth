const config = {
  BASE_URL: mandatory("REACT_APP_BASE_URL"),
};

function mandatory(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`missing mandatory env value: ${key}`);
  }
  return value;
}

const { BASE_URL } = config;
export { BASE_URL };
