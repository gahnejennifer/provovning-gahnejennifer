// Token ligger i minnet (en variabel i modulen), inte i webblagring.
// Ett skript på sidan kan läsa localStorage/sessionStorage, men inte den här variabeln.
let token = null

export const getToken = () => token
export const setToken = (value) => {
  token = value || null
}