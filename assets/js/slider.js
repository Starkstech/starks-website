const images = [
  {"item":"assets/images/entrance-starks-landing.jpg"},
  {"item":"assets/images/entrance-starks-landing.jpg"},
  {"item":"assets/images/entrance-starks-landing.jpg"}
 ]

    var i = 0;
    function iterate() {

    if ( i >= images.length) {
        i = 0;
    }
      // console.log(images[i].item)
      // console.log(document.getElementById('Image'))
      document.getElementById('Image').style.background="linear-gradient(180deg, rgba(48, 39, 66, 0.863) 0%, rgba(38, 27, 58, 0.719) 100%),  url("+images[i].item+") no-repeat contain";
      i++;
    }
  setInterval( iterate, 5000 );

   i = 0;
  const next = () => {
    i = i + 1;
    i = i % images.length;
    document.getElementById('Image').style.background="linear-gradient(180deg, rgba(48, 39, 66, 0.863) 0%, rgba(38, 27, 58, 0.719) 100%),  url("+images[i].item+") no-repeat contain";
  }

 const prev = () => {
  i = i - 1;
  i = i % images.length;
  document.getElementById('Image').style.background="linear-gradient(180deg, rgba(48, 39, 66, 0.863) 0%, rgba(38, 27, 58, 0.719) 100%),  url("+images[i].item+") no-repeat contain";

}