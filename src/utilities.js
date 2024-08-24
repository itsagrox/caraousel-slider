const fetchData= async ()=>{
    const data=await fetch('https://dog.ceo/api/breed/pitbull/images')
    const res= await data.json()
    return res
}
export default fetchData;
