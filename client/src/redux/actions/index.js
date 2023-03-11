import axios from "axios";

export const postPreference = () => {
  return async (dispatch) => {
    try {
      const json = await axios.post("/postpreferences");
      return dispatch({
        type:'POST_PREFERENCE',
        payload:json.data.id,
      });
    } catch (error) {
      return  alert('Error posting.');
    }
  };
};

// export const getPokemons = () => {
//   return async (dispatch) => {
//     try {
//       const json = await axios.get("/pokemons");
//       return dispatch({
//         type: "GET_POKEMONS",
//         payload: json.data,
//       });
//     } catch (error) {
//       alert('Fatal error, reload the page or try again later.')
//       return {
//       type: "GET_POKEMONS",
//       payload: 'error',
//     };
//     }
//   };
// };

// export function getTypes(){
//   return async function(dispatch) {
//     try {
//       const info = await axios.get("/types",{});
//       return dispatch({
//         type: "GET_TYPES",
//         payload: info.data,
//       });
//     } catch (error) {
//       alert('Fatal error, reload the page or try again later.')
//     }
//   };
// };

// export function filterCreated(payload){
//     try{
//       return{
//         type: 'FILTER_CREATED',
//         payload
//       }
//     }catch(error){
//     alert('Fatal error, reload the page or try again later.')
//     }
// };

// export function filterTypes(payload){
//     return{
//       type: 'FILTER_TYPES',
//       payload
//     }
// };  

// export function orderBySpeed(payload){
//   try{
//     return{
//       type: 'ORDER_BY_SPEED',
//       payload
//     }
//   }catch(error){
//     alert('Fatal error, reload the page or try again later')}
// }


// export function orderByName(payload){
//     try{
//       return{
//         type: 'ORDER_BY_NAME',
//         payload
//         }
//     }catch(error){
//     alert('Fatal error, reload the page or try again later.')
//     }
// };

// export function orderByAttack(payload){
//     try{
//       return{
//         type: 'ORDER_BY_ATTACK',
//         payload
//         }
//     }catch(error){
//     alert('Fatal error, reload the page or try again later.')
//     }
// };
  
// export function getPokemonByName(payload){
//   return async function(dispatch){
//     try{
//       var json = await axios.get("/pokemon?name=" + payload);
//       return dispatch({
//         type:"GET_POKEMON_BY_NAME",
//         payload: json.data
//       })
//     }catch(error) {alert('Error: Unknown Pokemon.');
//     return dispatch({
//       type:"GET_POKEMON_BY_NAME",
//       payload: 'error'
//     })}
//   }
// }

// export function getPokemonDetail(payload){
//   return async function (dispatch){
//     try{
//       var json = await axios.get("/pokemon/" + payload)
//       return dispatch({
//         type: "GET_POKEMON_DETAIL",
//         payload: json.data
//       })
//     }catch(error){
//       alert('Fatal error, reload the page or try again later.')
//     }
//   }
// }

// export function backgroundStyle(payload){
//   try{
//     return{
//       type: "BACKGROUND_STYLE",
//       payload
//       }
//   }catch(error){
//   alert('Fatal error, reload the page or try again later.')
//   }
// }

// export function cardSize(payload){
//   try{
//     return{
//       type: "CARD_SIZE",
//       payload
//         }
//   }catch(error){
//   alert('Fatal error, reload the page or try again later.')
//   }
// }

// export function loadingStatus(payload){
//   try{
//     return{
//       type:"LOADING",
//       payload
//         }
//   }catch(error){
//   alert('Fatal error, reload the page or try again later.')
//   }
// }