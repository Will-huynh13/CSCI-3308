var cardID = 0;
function addCard(interest)
{
    var tweet = $('<div class="card-body text-right" id =card'+cardID+'><button type="button" class="btn btn-danger btn-sm btn-circle" onclick="deleteCard(card'+cardID+')"></button><img class="card-img-top" src="https://cdn2.iconfinder.com/data/icons/social-media-square-set/960/Twitter_Sq-512.png"><div class="card-body"><h5 class="card-title">Tweet</h5><p class="card-text">Sample tweet will go home!</p></div></div>');
    tweet.appendTo(interest);
    cardID++;
}

function deleteCard(id)
{
    $(id).remove();
    cardID--;
}