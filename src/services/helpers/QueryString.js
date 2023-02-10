class QueryString {
  constructor(additionalConstraints = []) {
    this._list = [];
    this._additionalConstraints = additionalConstraints;
  }

  add(key, value) {
    if (value && value !== 'all' && !this._additionalConstraints.includes(value)) {
      this._list.push(`${key}=${value}`);
    }

    return this;
  }

  get query() {
    return this.toString();
  }

  toString() {
    return this._list.filter(x => !!x).join('&');
  }
}

export default QueryString;
