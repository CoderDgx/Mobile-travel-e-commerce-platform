'use strict';
module.exports = {
  params(key) {
    const method = this.request.method;
    if (method === 'GET') {
      return key ? this.query[key] : this.query;
    }
    return key ? this.request.body[key] : this.request.body;
  },
  get username() {
    const token = this.request.header.token;
    const tokenCache = token
      ? this.app.jwt.verify(token, this.app.config.jwt.secret)
      : undefined;
    return tokenCache ? tokenCache.username : undefined;
  },
  get userId() {
    const token = this.request.header.token;
    const tokenCache = token
      ? this.app.jwt.verify(token, this.app.config.jwt.secret)
      : undefined;

    return tokenCache ? tokenCache.id : undefined;
  },
};
