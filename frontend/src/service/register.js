import conf from "../conf/conf.js";

export class RegisterService {
    async createOutEntry(rollNo){
        const response=await fetch(`${conf.serverApi}/${conf.version}/register/create-out-entry`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({rollNo})
        })
        return response
    }

    async createInEntry(rollNo){
        const response=await fetch(`${conf.serverApi}/${conf.version}/register/create-in-entry`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({rollNo})
        })
        return response
    }
}

const registerService=new RegisterService();
export default registerService;