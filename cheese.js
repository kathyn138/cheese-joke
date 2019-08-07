$(function () {
  async function getJoke() {
    let joke = await axios.get('https://icanhazdadjoke.com/search', { headers: { Accept: 'application/json' }, params: { limit: 10 } });

    for (const actualJoke in joke.data.results) {
      let aJoke = joke.data.results[actualJoke].joke;
      let thumbsUp = document.createElement('img');
      console.log(thumbsUp);
      thumbsUp.src ='arrow.png';
      
      $('.joke-container').append(`<div>${aJoke} <span>${thumbsUp}</span></div>`);
    }
  }

  $(window).on('load', getJoke())


})