export const logged_user = 'logged'
export function getProfileStorage(auth:boolean = true){
  const user = localStorage.getItem(logged_user)
  if (user==null && auth) throw new Error("Veuillez-vous connecter")
  if (user==null) return null
  return JSON.parse(user)
}
export function logOut(){
  localStorage.removeItem(logged_user);
}
