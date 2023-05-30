// import { fetchBreeds } from './JS/cat-api';

// const refs = {
//   selectBreed: document.querySelector('.breed-select'),
// };

// fetchBreeds()
//   .then(data => {
//     createMarkup(data);
//   })
//   .catch(error => {
//     console.log('error');
//   });

// // console.log(breedsArray);

// function createMarkup(data) {
//   const breedsArray = data.map(({ name, id }) => {
//     return `<option value="${id}">${name}</option>`;
//   });
//   refs.selectBreed.insertAdjacentHTML('beforeend', breedsArray);
//   // refs.selectBreed.innerHTML = breedsArray.join('');
// }

// // refs.selectBreed.addEventListener('change', handleChangeSelect);

// // function handleChangeSelect(event) {
// //   const urlSearchByBreeds = `https://api.thecatapi.com/v1/images/search?breed_ids=${event.target.value}`;
// //   const options = {
// //     headers: {
// //       'x-api-key':
// //         'live_EEbvOb60XL9UgLJJ7bv9kNbMuHwRbvWrsXT5YGAW7rBTMnO7j1Xmegr3LLfBWJjJ',
// //     },
// //   };
// //   if (event.target.value !== '') {
// //     fetch(urlSearchByBreeds, options)
// //       .then(response => {
// //         if (!response.ok) {
// //           throw new Error(response.status);
// //         }
// //         return response.json();
// //       })
// //       .then(data => {
// //         createMarkup(data);
// //       });
// //   }
// // }

// const urlSearchByBreeds = `https://api.thecatapi.com/v1/images/search?breed_ids=abys`;
// const options = {
//   headers: {
//     'x-api-key':
//       'live_EEbvOb60XL9UgLJJ7bv9kNbMuHwRbvWrsXT5YGAW7rBTMnO7j1Xmegr3LLfBWJjJ',
//   },
// };

// fetch(urlSearchByBreeds, options)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//     console.log(data[0].url);
//     console.log(data[0].breeds[0].name);
//     console.log(data[0].breeds[0].description);
//     console.log(data[0].breeds[0].temperament);
//   })
//   .catch(error => {
//     console.log('error');
//   });
