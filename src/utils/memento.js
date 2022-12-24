class Memento {
  constructor(key) {
    this.key = key;
  }

  isSerialized() {
    return this.key in sessionStorage;
  }

  serialize(institution) {
    sessionStorage.setItem(this.key, JSON.stringify(institution));
  }

  deserialize() {
    const obj = JSON.parse(sessionStorage.getItem(this.key))
    return new InstitutionManager(obj);
  }

  destroy() {
    sessionStorage.removeItem(this.key);
  }
}

export default Memento;
