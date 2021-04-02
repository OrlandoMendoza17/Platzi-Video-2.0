export const saveMyList = (playlist) =>{
  localStorage.setItem('myList', JSON.stringify(playlist))
}
export const getMyList = (playlist) =>{
  return JSON.parse(localStorage.getItem('myList'))
}