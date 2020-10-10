const buton = document.querySelector("#buton");
const container = document.querySelector("#lyricsContainer");

function modifyState() {
  const lyricState = { current: "no lyrics" };
  window.history.pushState(lyricState, "with lyrics", "/lyrics.html");

  container.innerHTML = "Song lyrics";

  window.location.href = "#lyricsContainer";
}

buton.addEventListener("click", modifyState);
