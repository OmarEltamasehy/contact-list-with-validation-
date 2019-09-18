
let id = 1;

let contactListArr = []




let contactList = {
    
    "name":"",
    "contacts" : [],

    addContact : function addContact(){
        let contact = {};
                
       
        var name = document.getElementById('name').value
        var mail = document.getElementById('mail').value
        var phone = document.getElementById('phone').value


        // set contact obj by user value
        contact.id = id;
        contact.name = substring()//name;
        contact.mail = mail;
        contact.phone = phone;
    
        // push contact to contacts array
        this.contacts.push(contact);
        console.log(contactList);
        id++;
    },
    removeContact : function removeContact( id ){},
    editContact : function editContact (id, updateObj){},
    getContact : function getContact (id){},
    getAllContacts : function getAllContacts (){
        console.log(this.contacts);
        return this.contacts
    },
}







var btn = document.getElementById('addBtn');
btn.onclick = function(){
    substring()
    //checkPhoneAvailability();
    contactList.addContact();
}


var getContact = document.getElementById('getContact');
getContact.onclick = function(){
    contactList.getAllContacts();
}


function checkMail(){
    
}



function validateEmail(email) 
{
  var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  return re.test(email);
}

//function validateEmail(email) 
// {
//   var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
//   return re.test(email);
// }


function checkPhoneAvailability(){
   
    let phone2 = document.getElementById('phone')
    if (phone2.value.length != 11 )
     alert("the phone number should be 11 number")

}


function substring(){
    let name2 = document.getElementById('name').value
    let first = name2[0];
    
    var lastName = ""
    var fulName = ""

    for (let index = 0; index < name2.length; index++) {
        if( name2[index] == " " ){
            lastName =name2.substr(index , name2.length);
            fulName = first+""+"."+lastName;
        }
    }
    console.log("full name : " + fulName);
    return fulName;
}






// by eng ziad
// function ContactList(contactName,contact ){
//     this.contact = contact;
//     this.contactName = contactName;
// }


// by eng ziad
// function Contact (name, mail , phone){
//     this.name = name;
//     this.mail = mail;
//     this.phone = phone;
//     this.id;
// }




// by eng ziad
// let myConctact = new Contact(name, mail, phone);
// myConctact.id = id;
// let myContactList = new ContactList(name, myConctact);
// contactListArr.push(myContactList);
// console.log(contactListArr);
// id++;