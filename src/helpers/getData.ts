import { Country } from "../ts";

const basicUrl = "https://restcountries.com/v3.1/all"
export const getData = async(): Promise<Country[]> =>{
   let start:number = Math.floor(Math.random()*249)
   const response = await fetch(basicUrl);
   const data = await response.json();
   return await data.slice(start,start+2)
}