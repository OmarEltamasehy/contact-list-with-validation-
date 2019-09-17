
let id = 1;

let contactListArr = []

 contact = {
    id : "",
    name:"" ,
    mail:"",
    phone:""
}



let contactList = {
    
    contactName:"",
    contact : "",

    addContact : function addContact(){

                
        let name = document.getElementById('name').value
        let mail = document.getElementById('mail').value
        let phone = document.getElementById('phone').value


        // set contact obj by user value
        contact.id = id;
        contact.name = name;
        contact.mail = mail;
        contact.phone = phone;
    
        // push contacts to contactList object then push into array 
        contactList.contactName = contact.name ;
        contactList.contact = contact;
        contactListArr.push(contactList);
        //console.log( contactListArr[0]);
        
        //console.log(contact);
        console.log(contactListArr);
        id++;
        
    },
    removeContact : function removeContact( id ){},
    editContact : function editContact (id, updateObj){},
    getContact : function getContact (id){},
    getAllContacts : function getAllContacts (){},
}







var btn = document.getElementById('addBtn');
btn.onclick = function(){
    //Validate()
    contactList.addContact();
  
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