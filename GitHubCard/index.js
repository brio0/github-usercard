import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/brio0')
  .then(res => {
    console.log(res.data)
    document.querySelector('.cards').appendChild(getCard(res.data))
  })
  .catch((error) => console.log('error'))
  .finally(() => { console.log('done!!') })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

function getCard(obj) {
  const card = document.createELement('div');
  const img = document.createELement('img');
  const cardInfo = document.createELement('div');
  const name = document.createELement('h3');
  const userName = document.createELement('p');
  const location = document.createElement('p')
  const profile = document.createElement('p');
  const profileLink = document.createELement('a');
  const followers = document.createElement('p');
  const follwing = document.createElement('p');
  const bio = document.createElement('p');

  img.src = obj.avatar.url;
  img.alt = 'git hub profile picture';
  name.textContent = obj.name;
  userName.textContent = obj.login;
  location.tetContent = obj.location;
  profile.textContent = 'Profile';
  profileLink.textContent = 'Link to profile';
  profileLink.href = obj.html_url;
  followers.textContent = obj.followers;
  following.textContent = obj.following;
  bio.textContent = obj.bio


  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(follwing);
  cardInfo.appendChild(bio);


  return card;


};

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
