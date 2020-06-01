let $header_element = $('#Header');

let header = `<div class="faith-main-menu">
  <div class="classy-nav-container breakpoint-off">
    <div class="container">
      <!-- Menu -->
      <nav class="classy-navbar justify-content-between" id="faithNav">
        <!-- Logo -->
        <a
          class="nav-brand"
          href="index.html"
          
          ><img src="img/BBC-Logo-1.png" alt=""
        /></a>

        <!-- Navbar Toggler -->
        <div class="classy-navbar-toggler">
          <span class="navbarToggler"
            ><span></span><span></span><span></span
          ></span>
        </div>

        <!-- Menu -->
        <div class="classy-menu">
          <!-- Close Button -->
          <div class="classycloseIcon">
            <div class="cross-wrap">
              <span class="top"></span><span class="bottom"></span>
            </div>
          </div>

          <!-- Nav Start -->
          <div class="classynav">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">Who We are</a></li>
              <!-- <li><a href="blog.html">Blog</a></li> -->
              <li><a href="sermons.html">Sermons</a></li>
              <li><a href="ministries.html">Ministries</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <!-- Nav End -->
        </div>
      </nav>
    </div>
  </div>
</div>`;

$header_element.append(header);