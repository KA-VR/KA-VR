// var oauth = ChromeExOAuth.initBackgroundPage({
//   'request_url': 'https://www.google.com/accounts/OAuthGetRequestToken',
//   'authorize_url': 'https://www.google.com/accounts/OAuthAuthorizeToken',
//   'access_url': 'https://www.google.com/accounts/OAuthGetAccessToken',
//   'consumer_key': 'anonymous',
//   'consumer_secret': 'anonymous',
//   'scope': 'https://docs.google.com/feeds/',
//   'app_name': 'My Google Docs Extension'
// });
// function callback(resp, xhr) {
//   // ... Process text response ...
// };

// function onAuthorized() {
//   var url = 'https://docs.google.com/feeds/default/private/full';
//   var request = {
//     'method': 'GET',
//     'parameters': {'alt': 'json'}
//   };

//   // Send: GET https://docs.google.com/feeds/default/private/full?alt=json
//   oauth.sendSignedRequest(url, callback, request);
// };

// oauth.authorize(onAuthorized);

// chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
//   // Use the token.
//   console.log(token);
// });

// var client_id = 'hfegafmimahjokhlhchcmfgfkbcbkjok';
// var redirectUri = chrome.identity.getRedirectURL("oauth2");
// // var redirectUri = 'chrome-extension://hfegafmimahjokhlhchcmfgfkbcbkjok'; 
// var auth_url = "http://localhost:3000/auth/google?client_id=" + client_id + "&redirect_uri=" + redirectUri + "&response_type=token";

// chrome.identity.launchWebAuthFlow({'url':auth_url,'interactive':true}, function(redirect_url){
//   // window.locatio(redirect_url);
//   console.log({redirect: redirect_url});
// });
