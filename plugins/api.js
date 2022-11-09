
export default function({$axios}){
$axios.onRequest((config) => {
    let token=localStorage.getItem('token')
config.headers.common['api-version'] ='1'  
if(token){
    config.headers.common['Authorization']=`Bearer ${token}`
}
})
}
