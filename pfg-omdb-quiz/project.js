const globalRef =
['0289043','1139797','5700672','1457767','6644200','0435625','1591095','1922777','0387654','1127180',
'3289956','0463854','0263488','0338095','0363547','0844479','0073195','0070047','0080761','0087800'];

const globalMovies = [];
const badActor = ['Ryan Reynolds', 'Samantha Mathis', 'Jared Leto', 'Jennifer Connelly', 'Kiefer Sutherland', 'Anthony Hopkins', 'Steve Buscemi'];

const rando = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1));
}
const choose = () => {
  return document.getElementById('pickme').textContent;
}

$(() => {
    let currentImg = 0;
    const $carouselImg = $('.carousel-images').children();
    const $imageLength = $($carouselImg).length - 1;

  $.ajax(
    {
      url: 'http://www.omdbapi.com/?apikey=718f1911&i=tt'+ globalRef[rando(0, globalRef.length-1)],    //used a small array of actuual horro movies tto be poulled from API
      success: (data) => {
        globalMovies.push(data); //unable to sift the omdb and need more time to work with filtering
        let goodActor = globalMovies[0].Actors.split(',');    //splits actor into separate array to oull from
        let movieTitle = globalMovies[0].Title;
        for (let i = 0; i < 3; i++) {
          // const $button = $('<button>').addClass('chosen').text(goodActor[i]).appendTo('ul');
          const $button = $('<button>').text(goodActor[i]).appendTo('.chosen'+i);

        }
        const $buttonFake = $('<button>').attr('onclick', 'choose()').attr('id', 'pickme').text(badActor[rando(0,badActor.length - 1)]).appendTo('.chosen3');
        $('.question').append('Which actor/actress DID NOT star in '+movieTitle+'?');
      }
    })

  $('.next').on('click', () => {

    $($carouselImg).eq(currentImg).hide();//hides currently displayed image
      if(currentImg < $imageLength) { //if shown image is not last
        currentImg++; //iterate to next image
      } else {
        currentImg = 0; //reset to first image
      }
    $($carouselImg).eq(currentImg).show();
  })

  $('.previous').on('click', () => {

    $($carouselImg).eq(currentImg).hide();//hides currently displayed image
      if(currentImg > 0) { //if shown image is not last
      currentImg--; //iterate to next image
      } else {
      currentImg = $imageLength; //reset to first image
      }
    $($carouselImg).eq(currentImg).show();
  })

  $('#ulChosen').on('click', (event) => {
    if(badActor.includes(event.target.textContent)) {
      document.location.href = 'index2.html';
    } else {
      alert('WRONG! Please Try again.');
    }
  })
});
