/**
 * Created by sandeep_gupta on 11/15/2016.
 */

var UserReminderArray_background = [];

chrome.storage.sync.get('Stored_ReminderArray_key', function (obj) {

    console.log(obj);

    // if(obj.Stored_ReminderArray_key ==undefined ||  obj.Stored_ReminderArray_key.length == 0)
    // {
    //     obj = {Stored_ReminderArray_key:UserReminderArray};
    //
    // }
    // else{

        UserReminderArray_background = obj.Stored_ReminderArray_key;
    // }



});

$(document).ready(function(){

    console.log(UserReminderArray_background);
    // for(var i=0;i<UserReminderArray_background.length;++i)
    // {
    //
    //    setTimeout(function () {
    //        alert("Reminder: " + UserReminderArray_background[0].ReminderText);
    //
    //    },UserReminderArray_background[i].ReminderTimer);
    //
    // }

    UserReminderArray_background.forEach(function (item, index) {
        setTimeout(function () {
                   alert("Reminder: " + item.ReminderText);

               },item.ReminderTimer);

    });



});