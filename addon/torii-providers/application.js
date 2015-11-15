import Ember from 'ember';
import { emberAjaxRequest } from 'ember-appbase/utils/ajax-request';

export default Ember.Object.extend({
  userService: Ember.inject.service(),
  open(credentials) {
    return emberAjaxRequest('POST', this.get('userService.loginUrl'), credentials);
  }
});
