const cookie = {
  setCookie(key, value, expires) {
    function hoursToSeconds(hours) {
      const date = new Date();
      date.setHours(date.getHours() + hours);
      return date.toString();
    }

    const newCookie = '@key=@value;expires=@expires'
      .replace('@key', key)
      .replace('@value', value)
      .replace('@expires', expires || hoursToSeconds(12));

    document.cookie = newCookie;
  },
  getCookie(key) {
    const objCookie = document.cookie.split('; ')
      .reduce((obj, chunk) => {
        const parts = chunk.split('=');
        obj[parts[0]] = parts[1];
        return obj;
      }, {});

    return objCookie[key];
  },
  removeCookie(key) {
    this.setCookie(key, '', 'Thu, 01 Jan 1970 00:00:00 GMT');
  }
};

export default cookie;
