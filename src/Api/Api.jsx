import axios from "axios";

export function base() { 
    return 'https://api.shinewoods.heptotechnologies.org/users';
}

export const getRole = async () => {
  const res = await axios.get(`${base()}/get/roles`);
  return res.data;
};

export const getRelation = async () => {
  const res = await axios.get(`${base()}/get/relationships`);
  return res.data;
};

export const emailVerify = async (data) => {
    console.log('data in api', data);
  const res = await axios.post(`${base()}/email/verification`, data);
  return res.data;
};




