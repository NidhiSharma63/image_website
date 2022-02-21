// console.log()
let imageContainer = document.querySelector(".imageContainer");
const imageArr = [
  "./assets/images/img1.jpeg",
  "./assets/images/img2.jpeg",
  "./assets/images/img3.jpeg",
  "./assets/images/img4.jpeg",
  "./assets/images/img5.jpeg",
  "./assets/images/img6.jpeg",
  "./assets/images/img7.jpeg",
  "./assets/images/img8.jpeg",
  "./assets/images/img9.jpeg",
  "./assets/images/img10.jpeg",
];
function loadImage() {
  for(let i=0;i<imageArr.length;i++){
    let Div = document.createElement("div");
    Div.setAttribute("class", "imgDiv");
    let imgtag = document.createElement("img");
    imgtag.src = imageArr[i];
    Div.appendChild(imgtag);
    imageContainer.appendChild(Div)
  }
}
window.onload=loadImage()
function getimage() {
  (url =
    "https://api.unsplash.com/search/photos?query=" +
    input.value +
    "&per_page=130&client_id=5OXcnxdQpZLtAG0_jRNpqEQhTlUOQL3TKviFAUbBKm8"),
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.results.forEach((element) => {
          let srorce = element.urls.regular;
          console.log(srorce);
          let Div = document.createElement("Div");
          Div.setAttribute("class", "imgDiv");
          let img = document.createElement("img");
          img.src = `${element.urls.regular}`;
          Div.appendChild(img);
          document.querySelector(".imageContainer").appendChild(Div);
        });
      });
}
document.getElementById("btn").addEventListener("click", getimage);
