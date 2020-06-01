let $latest_serms = $('#latest-serms');

for(let i = sermons.length -3; i < sermons.length; i++){
    $('#audio_controls').attr('style', '');
    let sermonContent = `
            <div class="single-sermons">
                <div class="sermons-content d-flex align-items-center">
                    <div class="sermons-thumbnail bg-img l-sermons" style="background-image: url(${sermons[i].background_image});"></div>
                        <div class="sermons-text">
                            <a href="#">
                                <h6>${sermons[i].title}</h6>
                            </a>
                            <p>By ${sermons[i].pastor}</p>
                            <p class="date"></p>
                            <p>${sermons[i].content_snippet}</p>
                        </div>
                    </div>
                    <!-- Audio Player -->
                    <div class="sermons-audio-player d-flex align-items-center">
                    ${sermons[i].audio_or_video_url ? `<audio preload="auto" controls id="audio_controls">
                        <source src=${sermons[i].audio_or_video_url}>
                    </audio>` : ""}
                    ${sermons[i].text_content ? `<div class="see-more-btn">
                        <a href="sermons.html" type="button">See More</a>
                    </div>` : ""}
                </div>
            </div>`;
            
        $latest_serms.append(sermonContent);
            
       
};

$(window).on('shown.bs.modal', function() { 
    let close = document.querySelector('#scrollUp');
    close.style.display ='none';
 });
 
 
 
