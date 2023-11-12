{
    //Union

    // type FrontendDeveloper = 'fakibazDeveloper ' | 'juniorDeveloper'; 
    // type FullStackDeveloper = 'fakibazDeveloper ' | 'expert'; 

    type Developer = FrontendDeveloper | FullStackDeveloper; 

    const developer1 : FrontendDeveloper  = 'fakibazDeveloper ';  //
    const developer2 : Developer  = 'fakibazDeveloper ';//  

    type User = {
        name: string ; 
        email?: string; 
        gender : 'Male ' | 'Female'; 
        bloodGroup: "O+" | "A+" | "AB+",  
    }
    const user1 :User = {
        name:'eyasin ', 
        gender: 'Male ',
        bloodGroup: "AB+",  
    }





    ///intersection : 

    type FrontendDeveloper = {
        skills : string[];
        designation1 : 'Frontend Developer'; 
    }
    type BackendDeveloper = {
        skills : string[]; 
        designation2: 'Backend Developer'
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper ; 

    const FullStackDeveloper1 : FullStackDeveloper = {
        skills: ['HTML', 'CSS', 'EXPRESS'],
        designation1: 'Frontend Developer', 
        designation2: 'Backend Developer', 
    }
 } 