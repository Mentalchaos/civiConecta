const session = {
  get storage() {
    return window.sessionStorage;
  },
  save(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  },
  restore(key) {
    if (!(key in this.storage)) {
      return undefined;
    }

    const item = this.storage.getItem(key);
    return JSON.parse(item);
  },
  remove(key) {
    this.storage.removeItem(key);
  }
};

export default session;
