let video_src = ""; //"https://www.youtube.com/embed/L_hFw_cWg9U";
let iframeDiv = $("#iF");

if (video_src) {
  iframeDiv.append(`
        <div
    class="container section-heading"
    style="text-align: center; background-color: #dcb972;"
  >
    <h3 style="color: #0a1768;">Live From Church</h3>
  </div>

  <div class="iframe-container col-12 col-lg-12">

    <iframe
      width="100%"
      height="100%"
      src=${video_src}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    </div>`);
}
