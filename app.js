// Assignment 21

// event
// 1. Show an alert box on click on a link.
function box(){
    alert("hello everyone!")
}

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user. 

function imgs(){
    alert("thanks for purchasing from us")
}

// <!-- 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted. -->

function deleteName(button){
    var row= button.parentNode.parentNode;
    row.parentNode.parentChild(row)
}