import Ember from 'ember';
import { emberAjaxRequest } from 'ember-appbase/utils/ajax-request';

export default Ember.Object.extend({
  open(credentials) {
    return emberAjaxRequest("POST", this.get('userService.registrationUrl'), credentials);
  }
});
