import axios from "axios";

export const BASE_URL_RESCUES = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/rescues`;
export const BASE_URL_RACETRACKS = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/racetracks`;
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};

export const grabRescues = async () => {
  const response = await axios.get(BASE_URL_RESCUES, config);
  return response.data.records;
};

export const grabRacetracks = async () => {
  const response = await axios.get(BASE_URL_RACETRACKS, config);
  return response.data.records;
};

export const postRescue = async (body) => {
  const response = await axios.post(BASE_URL_RESCUES, { fields: body }, config);
  return response.data;
};
