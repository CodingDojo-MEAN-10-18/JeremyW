/* 
{
    "login": "jeremybwilson",
    "id": 5874843,
    "node_id": "MDQ6VXNlcjU4NzQ4NDM=",
    "avatar_url": "https://avatars3.githubusercontent.com/u/5874843?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jeremybwilson",
    "html_url": "https://github.com/jeremybwilson",
    "followers_url": "https://api.github.com/users/jeremybwilson/followers",
    "following_url": "https://api.github.com/users/jeremybwilson/following{/other_user}",
    "gists_url": "https://api.github.com/users/jeremybwilson/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jeremybwilson/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jeremybwilson/subscriptions",
    "organizations_url": "https://api.github.com/users/jeremybwilson/orgs",
    "repos_url": "https://api.github.com/users/jeremybwilson/repos",
    "events_url": "https://api.github.com/users/jeremybwilson/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jeremybwilson/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Jeremy Wilson",
    "company": null,
    "blog": "",
    "location": "Bellevue, WA",
    "email": null,
    "hireable": true,
    "bio": "Sr Web Producer, Web Developer\r\n",
    "public_repos": 62,
    "public_gists": 2,
    "followers": 1,
    "following": 2,
    "created_at": "2013-11-07T00:21:13Z",
    "updated_at": "2018-08-16T21:17:40Z"
}
*/
// Assignment: JavaScript Hoisting
// Objectives:
// 1. Practice using AJAX and writing asynchronous code.
// 2. Familiarity with callbacks.
// 3. Familiarity with DOM manipulation.
$(document).ready(function() {
    $('#username').submit(function () {
        if ($("input[name='username']").val()) {
            $.get("https://api.github.com/users/" + ($("input[name='username']").val()), displayName);
            event.preventDefault();
        }
    });
    function displayName(data) {
        if(data.name){
            document.getElementById('name').innerHTML = data.name
        } else {
            document.getElementById('name').innerHTML = 'Its a secret'
        }
    }
    $('#reset').click(function() {
        document.getElementById('reset').innerHTML = 'User data has been reset';
        $('#username')[0].reset();
        $('#username')[0].reset();
    })
});