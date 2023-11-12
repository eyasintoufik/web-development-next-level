{
    //Learn spread operator : 
    const bros1: string[] = ['eyasin','miyasin', 'tiyasin', 'jiyasin']; 
    const bros2:string[] =['mizan', 'tizan', 'sizan']; 

    bros1.push(...bros2); /// here, ... is speared operator. it help, every single element add into next arry

    const mentors1 = {
        typescript:'Mezba', 
        redux:'Mir', 
        dbms:'Mizan'
    }
    const mentor2 ={
        prisma : 'firoz', 
        next: 'Tanmoy',
        clous: 'Nahid',
    }

    const mentorList ={
        ...mentors1,
        ...mentor2
    }




    /// learn rest operator : 


}