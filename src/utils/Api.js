export const API = 'http://localhost:3000/initalState';

export const getCategories = async () =>{
  const response = await fetch(API)
  const data = await response.json()
  return data;
}