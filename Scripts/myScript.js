// Function to redirect to a URL
function redirectTo(url) {
    window.location.href = url;
  }
  
  // Adding event listeners to elements
  document.addEventListener('DOMContentLoaded', function() {
    var IASBtn = document.getElementById('IASBtn');
    var PolarisOutpostBtn = document.getElementById('PolarisOutpostBtn');
    var CyberLemurXboxBtn = document.getElementById('CyberLemurXboxBtn');
    var CyberLemurSteamBtn = document.getElementById('CyberLemurSteamBtn');


  
    if (IASBtn) {
        IASBtn.addEventListener('click', function() {
        redirectTo('https://play.google.com/store/apps/details?id=com.ArcticSkyGames.ChooseYourAIAdventure'); // TODO: update to store page
      });
    }
    if (PolarisOutpostBtn) {
        PolarisOutpostBtn.addEventListener('click', function() {
        redirectTo('https://store.steampowered.com/app/2209080/Polaris_Outpost/'); 
      });
    }
    if (CyberLemurXboxBtn) {
        CyberLemurXboxBtn.addEventListener('click', function() {
        redirectTo('https://www.xbox.com/en-US/games/store/cyber-lemur/9PGJ5VXX7RPR'); 
      });
    }
    if (CyberLemurSteamBtn) {
        CyberLemurSteamBtn.addEventListener('click', function() {
        redirectTo('https://store.steampowered.com/app/877610/Cyber_Lemur/'); 
      });
    }

  });