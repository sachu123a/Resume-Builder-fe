import axios from "axios"
import Axiosconfig from "./Axiosconfig"
import { BASEURL } from "./BaseURL"
export const addResume = async(reqBody)=>{
   return  await Axiosconfig('post',`${BASEURL}/resumeData`,reqBody)
}
export const getResumes =async()=>{
    return await Axiosconfig('get',`${BASEURL}/resumeData`)
}
export const deleteResume = async(id)=>{
    return await Axiosconfig('delete',`${BASEURL}/resumeData/${id}`,'')
}
export const getSingleResume = async(id)=>{
    return await Axiosconfig('get',`${BASEURL}/resumeData/${id}`,'')
}
export const updateResume = async(id,reqBody)=>{
    return await Axiosconfig('put',`${BASEURL}/resumeData/${id}`,reqBody)
}