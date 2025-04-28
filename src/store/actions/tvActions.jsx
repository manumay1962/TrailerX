import axios from "../../utils/axios";
import { loadtv } from "../reducers/tvSlice";
export {removetv} from "../reducers/tvSlice"

export const asyncloadtv = (id) =>async(dispatch,getState)=>{
    try {
        const detail =await axios.get(`/tv/${id}`);
        const externalid =await axios.get(`/tv/${id}/external_ids`);
        const recommendations=await axios.get(`/tv/${id}/recommendations`);
        const similar =await axios.get(`/tv/${id}/similar`);
        const translations =await axios.get(`/tv/${id}/translations`);

        const video =await axios.get(`/tv/${id}/videos`);
        const watchproviders =await axios.get(`/tv/${id}/watch/providers`);
        let theultimatedetail={
            detail:detail.data,
            recommendations: recommendations.data.results,
            externalid:externalid.data,
            similar:similar.data.results,
            video: video.data.results.find((m) =>m.type === "Trailer"),
            translations:translations.data.translations.map((t) => t.english_name),
            watchproviders: watchproviders.data.results.IN,
    
    
        };
        dispatch(loadtv(theultimatedetail))
    } catch (error) {
        console.log("Error :",error);
        
    }

    
}