let $sermons_element = $("#sermons-container");
let $audio_controls = $("#audio-controls");
let $sermon_modal = $("#sermon-modal");

let $app = $("#app");

let d; //see more link id // pastor_id
let m; //modal id //sermon id
let modalSermons;

/*const pastors = ['Apostle J.C. Uka', 'Pastor Samuel Affiah',
    'Pastor Mrs Delphine Uka'];*/
const pastors = [1, 2, 3];
const pastorUka = 1;
const pastorAffiah = 2;
const pastorDelphine = 3;

const sermonsByPastorUka = sermons.filter(
  (sermon) => sermon.pastor_id === pastors[0]
);
console.log(sermonsByPastorUka);

const sermonsByPastorAffiah = sermons.filter(
  (sermon) => sermon.pastor_id === pastors[1]
);
console.log(sermonsByPastorAffiah);

const sermonsByPastorDelphineUka = sermons.filter(
  (sermon) => sermon.pastor_id === pastors[2]
);
console.log(sermonsByPastorDelphineUka);

//console.log(sermons.length);
const $pagination_element = $("#pagination");

let current_page = 1;
let rows = 6;

function DisplaySermons(sermons, wrapper, rows_per_page, page) {
  wrapper.empty();
  //console.log(wrapper.innerHTML);
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedSermons = sermons.slice(start, end);

  for (let i = 0; i < paginatedSermons.length; i++) {
    let sermon = paginatedSermons[i];

    if (sermon.audio_or_video_url === "") {
      //console.log(sermon.title + ' is not an audio sermon');
    }
    //console.log(sermon);

    let sermonContent = `
            <div class="single-sermons col-md-6">
                <div class="sermons-content d-flex align-items-center">
                    <div class="sermons-thumbnail bg-img l-sermons" style="background-image: url(${
                      sermon.background_image
                    });"></div>
                        <div class="sermons-text">
                            <a href="#">
                                <h6 id="title">${sermon.title}</h6>
                            </a>
                            <p id="pastor">By ${sermon.pastor}</p>
                            <p class="date" id="date"></p>
                            <p id="content-snippet">${
                              sermon.content_snippet
                            }</p>
                        </div>
                    </div>
                    <!-- Audio Player -->
                    <div class="sermons-audio-player d-flex align-items-center">
                    ${
                      sermon.audio_or_video_url
                        ? `<audio preload="auto" controls id="audio-controls">
                        <source src=${sermon.audio_or_video_url}>
                    </audio>`
                        : ""
                    }
                    ${
                      sermon.text_content
                        ? `<div class="see-more-btn">
                        <a href="#" type="button" data-toggle="modal" data-id=${sermon.pastor_id} data-target=#${sermon.id} class='open-dialog'>See More</a>
                    </div>`
                        : ""
                    }
                </div>
            </div>
            
            <div id=${sermon.id}  class="modal fade right" ${(m =
      sermon.id)} tabindex="-1" role="dialog">
                <div class="modal-dialog-full-width modal-dialog momodel modal-fluid" role="document">
                    <div class="modal-content-full-width modal-content">
                        <div class="modal-header-full-width modal-header text-center">


                        <div class="mh-bg-img" style="background-image: url(${
                          sermon.background_image
                        });">
                            <button type="button" class="close " data-dismiss="modal" aria-label="Close">
                                <span style="font-size: 1.3em;" aria-hidden="true">&times;</span>
                            </button>
                            <div class="container h-100">
                            
                                <div class="row h-100 align-items-center">
                                    <div class="col-12 col-md-12">
                                        <div class="breadcumb-text">
                                        ${
                                          sermon.audio_or_video_url
                                            ? `<audio preload="auto" controls id="audio-controls">
                                        <source src=${sermon.audio_or_video_url}>
                                    </audio>`
                                            : ""
                                        }
                                            <!-- <h2>${sermon.title}</h2>
                                            <p>By ${sermon.pastor}</p> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                        <div class="modal-body">
                        <p id="content" class="align-justify">${
                          sermon.text_content
                        } </p>
                        <div id=\"app\"></div>
                        </div>
                        <div class="modal-footer" id=\"sermon-modal\">
                    
                        <button type="button" class="btn btn-default btn-modal-close" data-dismiss="modal">Back to All sermons</button>
                        </div>
                    </div>
                </div>
            </div>`;
    $("#audio-controls").attr("style", "");
    wrapper.append(sermonContent);
  }
}

function SetupPagination(sermons, wrapper, rows_per_page) {
  wrapper.empty();

  let page_count = Math.ceil(sermons.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i, sermons);
    wrapper.append(btn);
  }
}

function PaginationButton(page, sermons) {
  let button = document.createElement("button");
  button.innerText = page;
  //console.log("page:", page);
  //console.log("current page:", current_page);
  if (current_page == page) {
    button.classList.add("active");
  }

  button.addEventListener("click", function () {
    current_page = page;

    DisplaySermons(sermons, $sermons_element, rows, current_page);

    let current_btn = document.querySelector(".pagenumbers button.active");
    current_btn.classList.remove("active");

    button.classList.add("active");
    //window.location.reload();
  });

  return button;
}

DisplaySermons(sermons, $sermons_element, rows, current_page);
SetupPagination(sermons, $pagination_element, rows);

$("body").on("hide.bs.modal", function () {
  $("audio").each(function () {
    this.pause();
    this.currentTime = 0;
  });
  //alert("hi");
});

$(document).on("click", ".open-dialog", function () {
  d = $(this).data("id");
});

$(window).on("shown.bs.modal", function () {
  let close = document.querySelector("#scrollUp");
  close.style.display = "none";
  //    //let m = $(this).attr('id');
  //     console.log('m', m);
  //     console.log('d', d);
  //     if(d == pastors[0]){
  //         sermonsByPastorUka.forEach(ser =>{
  //             $(`#${m}`).find("#sermon-modal").append(`<p>${ser.title}</p>`);
  //         })
  //     }else if(d == pastors[1]){
  //         sermonsByPastorAffiah.forEach(ser =>{
  //             $(`#${m}`).find("#sermon-modal").append(`<p>${ser.title}</p>`);
  //         })
  //     }else if(d == pastors[2]){
  //         sermonsByPastorDelphineUka.forEach(ser =>{
  //             $(`#${m}`).find("#sermon-modal").append(`<p>${ser.title}</p>`);
  //         })
  //     }
});
