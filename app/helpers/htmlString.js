import Ember from 'ember';

export function htmlString([content]/*, hash*/) {

    let str0 = "background-colorasdfasdfasdf";
    let str1 = "background-color";
    let str2 = "";
    let ignore = true;
    str0.replace(new RegExp("background-color"), "");

    console.log(str0);
    return Ember.String.htmlSafe(content);  
}

export default Ember.Helper.helper(htmlString);
