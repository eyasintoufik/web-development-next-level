{
    ///

    const user = {
        id: 234, 
        name:{
            firstName: 'Mezba', 
            MiddleName: 'Ul', 
            lastName: 'Persian',
        },
        contactNo : '2345123345',
        address: 'uganda',
    }
    //destructuring 
    const {id, name: {MiddleName}} = user; 
    
    
    //array destructuring : 

    const myFriends :string[] = ['joey', 'phebe', 'ross', 'rachel ', 'chandler', 'Monica']; 
    const [,,bestFriend ,...rest] = myFriends; 





    //
}