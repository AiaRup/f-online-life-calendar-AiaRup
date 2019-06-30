function isSupported(storage) {
  try {
    const key = 'test';
    storage.setItem(key, key);
    storage.removeItem(key);
    return true;
  } catch (event) {
    return false;
  }
}

export { isSupported };
