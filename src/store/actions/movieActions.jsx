import axios from "../../utils/axios";
import { loadmovie } from "../reducers/movieSlice";
export {removemovie} from "../reducers/movieSlice"

export const asyncloadmovie = async(id) =>(dispatch,getState)=>{
    try {
        const detail = axios.get(`/movie/${id}`);
        const externalid = axios.get(`/movie/${id}/external_ids`);
        const recommendations= axios.get(`/movie/${id}/recommendations`);
        const similar = axios.get(`/movie/${id}/similar`);
        const video = axios.get(`/movie/${id}/videos`);
        const watchproviders = axios.get(`/movie/${id}/watch/providers`);
    } catch (error) {
        console.log("Error :",error);
        
    }
}