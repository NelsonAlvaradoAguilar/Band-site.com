let showsArray = [{
    date: 'Mon Sept 06 2021',
    venue: 'Ronal Lane',
    location: 'San Francisco,CA'
},
{
    date: 'Tue Sept 21 2021',
    venue: 'Ronal Lane',
    location: 'San Francisco,CA'
},
{
    date: 'Fri Oct 15 2021',
    venue: 'View Lounge',
    location: 'San Francisco,CA'
},
{
    date: 'Sat Nov 06 2021',
    venue: 'Hyatt Agency',
    location: 'San Francisco,CA'
},
{
    date: 'Fri Nov 26 2021',
    venue: 'Moscow Center',
    location: 'San Francisco,CA'
},
{
    date: 'Wed Dec 15 2021',
    venue: 'Press Club',
    location: 'San Francisco,CA'
}


]

const $showsContainer = document.getElementById('showsContainer');
$showsContainer.classList.add('shows');
const $title = document.createElement('h1');
$showsContainer.appendChild($title);
$title.insertAdjacentText('beforeend', 'Shows');





let displayShows = function () {


    showsArray.forEach(e => {

        const $divUl = document.createElement("div"),
            $ul = document.createElement('ul'),
            $liDate = document.createElement('li'),
            $spanDate = document.createElement('span'),
            $liVenue = document.createElement('li'),
            $spanVenue = document.createElement('span'),
            $liLocation = document.createElement('li'),
            $spanLocation = document.createElement('span'),
            $buyButton = document.createElement('a'),
            $devider = document.createElement("div")
            ;

        $showsContainer.appendChild($divUl);
        $divUl.appendChild($ul);
        $divUl.appendChild($devider);
        $ul.appendChild($liDate);
        $ul.appendChild($spanDate);
        $ul.appendChild($liVenue);
        $ul.appendChild($spanVenue);
        $ul.appendChild($liLocation);
        $ul.appendChild($spanLocation);
        $ul.appendChild($buyButton);

        $divUl.insertAdjacentElement('afterbegin', $ul);
        $ul.insertAdjacentElement('afterend', $buyButton);
        $liDate.insertAdjacentHTML('afterbegin', 'Date');
        $spanDate.insertAdjacentHTML('afterbegin', e.date);
        $liVenue.insertAdjacentHTML('beforeend', 'Venue');
        $spanVenue.insertAdjacentHTML('beforeend', e.venue);
        $liLocation.insertAdjacentHTML('beforeend', 'Location');
        $spanLocation.insertAdjacentHTML('beforeend', e.location);
        $buyButton.insertAdjacentText('beforeend', "BUY TICKETS");
        $ul.insertAdjacentElement('beforeend',$buyButton)

        //adding classname//
        $liDate.classList.add("shows__subtitle");
        $spanDate.classList.add("shows__date-info");

        $liVenue.classList.add("shows__subtitle");
        $spanVenue.classList.add("shows__venue-info");

        $liLocation.classList.add("shows__subtitle");
        $spanLocation.classList.add("shows__location-info");

        $buyButton.classList.add("shows__btnbuy");

        $ul.classList.add("shows__tour");
        $devider.classList.add("shows__devider");
        $divUl.classList.add("shows__list");


        $showsContainer.appendChild($divUl);
    });




   
    

    
};


document.addEventListener('DOMContentLoaded',  ()=> {
    const $showsList = document.querySelectorAll('.shows__list');
  
    $showsList.forEach(i => {
      i.addEventListener('click', function () {
       $showsList.forEach(el => el.classList.remove('shows__list--selected'));
        i.classList.add('shows__list--selected');
      });
    });
  });
  

$title.classList.add('shows__title');
const $iframe = document.getElementById("iframe");
$iframe.classList.add("hero__songToPlay");
$iframe.setAttribute("loading","eager");




displayShows();






