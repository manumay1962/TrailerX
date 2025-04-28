import axios from "../../utils/axios";
import { loadpeople } from "../reducers/peopleSlice";
export { removepeople } from "../reducers/peopleSlice";

export const asyncloadperson = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);


    let theultimatedetail = {
      detail: detail.data,
      externalid: externalid.data,
      combinedCredits:combinedCredits.data,
      tvCredits:combinedCredits.data,
        movieCredits:combinedCredits.data
    };
    dispatch(loadpeople(theultimatedetail));
  } catch (error) {
    console.log("Error :", error);
  }
};
