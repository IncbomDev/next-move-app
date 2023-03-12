setTimeout(function(){
  document.getElementById("loading-screen").classList.add("fadeOut");
  setTimeout(function(){
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main").style.display = "block";
    document.body.style.backgroundColor = '#332929';
  },1000);
}, 2000);


