import axios from "axios"

export const requestProductList = async (categoryId)=>{
    try{
        const response = await axios.get(`http://localhost:3001/product/list/${categoryId}`)        
        console.log('requestProductList...response..',response.data)  
        return response.data;
      }catch(error){
        console.log(error);
      }finally{

      }
}

export const requestProductRead = async (categoryId,detailId)=>{
    try{
        const response = await axios.get(`http://localhost:3001/product/read/${categoryId}/${detailId}`)       
        console.log('requestProductRead...response..',response.data)  
        return response.data;
      }catch(error){
        console.log(error);
      }finally{

      }
}
