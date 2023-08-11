
const check_user_exist= async()=>
{
    try{
        const res = await fetch('http://localhost:3000/api/user',{cache:'no-store'})
        const response = await res.json()
        while(response == 'undefined'){
            throw new Error('loading...')
        }
        return response
    }catch(err){
        console.log(err)
    }
}

export default check_user_exist