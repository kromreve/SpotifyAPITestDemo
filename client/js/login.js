document.addEventListener('DOMContentLoaded', function () {
  const loginButton = document.getElementById('login-button');
  loginButton.addEventListener('click', function () {
    // Redirect to the Spotify authorization URL
    // Replace CLIENT_ID and REDIRECT_URI with your actual values
    const CLIENT_ID = 'b68cdab7b33d4656a3e514c08a3598b5';
    const REDIRECT_URI = 'http://127.0.0.1:5500/SpotifyAPITestDemo/index.html';

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=user-read-private%20user-read-email`;
    window.location.href = authUrl;
  });
});