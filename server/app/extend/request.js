'use strict';
module.exports = {
  get token() {
    // console.log('header', this.header);
    return this.get('token');
  },
};
