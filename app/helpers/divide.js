import Ember from 'ember';

export function divide([num1, num2]/*, hash*/) {
  
  return num1/num2;
}

export default Ember.Helper.helper(divide);
