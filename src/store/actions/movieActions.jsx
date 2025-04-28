import axios from "../../utils/axios";
import { loadmovie } from "../reducers/movieSlice";
export {removemovie} from "../reducers/movieSlice"

export const asyncloadmovie = (id) =>async(dispatch,getState)=>{
    try {
        const detail =await axios.get(`/movie/${id}`);
        const externalid =await axios.get(`/movie/${id}/external_ids`);
        const recommendations=await axios.get(`/movie/${id}/recommendations`);
        const similar =await axios.get(`/movie/${id}/similar`);
        const translations =await axios.get(`/movie/${id}/translations`);

        const video =await axios.get(`/movie/${id}/videos`);
        const watchproviders =await axios.get(`/movie/${id}/watch/providers`);
        let theultimatedetail={
            detail:detail.data,
            recommendations: recommendations.data.results,
            externalid:externalid.data,
            similar:similar.data.results,
            video: video.data.results.find((m) =>m.type === "Trailer"),
            translations:translations.data.translations.map((t) => t.english_name),
            watchproviders: watchproviders.data.results.IN,
    
    
        };
        dispatch(loadmovie(theultimatedetail))
    } catch (error) {
        console.log("Error :",error);
        
    }

    
}