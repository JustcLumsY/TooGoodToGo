
const model = {
    
    app : {
        currentpage: '', 
        currentUser: '',   
},

// Inputs 
inputs: 
{
    
    newAd: // <---- Sendes til activeAd
    {   id: 1,
        name: '',
        image: '', 
        details: '', 
        datePosted: 'newDateFunction', 
        dateExpired: '', 
        zipCode: '', 
        phoneNumber: '', 
        allergyID:[''] 
    },
      
    
    newUser: // <--- Sendes til activeUser
    [
{       id: 'samme ID som ActiveUser', 
        userName: '', 
        userPw: '', 
        adress: '', 
        zipCode: '', 
        tlf: ''
} 
    ],
},
    //Felles data
    users: 
    [
{        id: 1, 
         userName: 'Geir', 
         userPw: '112', 
         zipCode: '6430', 
         tlf: '45932881',
}, 
         
    ],

    allergies: [
        {id: 1, type: 'Melk'},
        {id: 2, type: 'Egg'},
        {id: 3, type: 'Gluten'},
        {id: 4, type: 'Nøtter'},
    ],
    
    ads: [
    {   id: 1,
        user: 1, 
        isActive: true,//false om aniansen er aktiv/ikke aktiv
        name: '',
        image: '',
        details: '',
        datePosted: 'newDateFunction',
        dateExpired: '',
        zipCode: '',
        phoneNumber: '',
        allergyID:[2,3],
        orderedById: 1,
    },

],

    chatBox: [
        {from: 1, to: 2, text:'', ad: 1}
    ],

};


// annonser som får melding
// Nice to have Chatbox
