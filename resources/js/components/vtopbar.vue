<script>
import simplebar from "simplebar-vue";

export default {
  data() {
    return {
      languages: [
      
     
      ],
      current_language: "en"
    };
  },
  components: { simplebar },
  methods: {
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */ !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
  
  }
};
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <a href="index.html" class="logo logo-dark">
            <span class="logo-sm">
              <img src="/assets/images/logo-sm-dark.png" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="/assets/images/logo-dark.png" alt height="20" />
            </span>
          </a>

          <a href="index.html" class="logo logo-light">
            <span class="logo-sm">
              <img src="/assets/images/logo-sm-light.png" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="/assets/images/logo-light.png" alt height="20" />
            </span>
          </a>
        </div>

        <button
          @click="toggleMenu"
          type="button"
          class="btn btn-sm px-3 font-size-24 header-item waves-effect"
          id="vertical-menu-btn"
        >
          <i class="ri-menu-2-line align-middle"></i>
        </button>

         <!-- App Search-->
         <form class="app-search d-none d-lg-block">
          <div class="position-relative">
              <input type="text" class="form-control" placeholder="Search...">
              <span class="ri-search-line"></span>
          </div>
      </form>

      <div class="dropdown dropdown-mega d-none d-lg-block ml-2">
        <button type="button" class="btn header-item waves-effect" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
            Mega Menu
            <i class="mdi mdi-chevron-down"></i> 
        </button>
        <div class="dropdown-menu dropdown-megamenu">
            <div class="row">
                <div class="col-sm-8">

                    <div class="row">
                        <div class="col-md-4">
                            <h5 class="font-size-14 mt-0">UI Components</h5>
                            <ul class="list-unstyled megamenu-list">
                                <li>
                                    <a href="javascript:void(0);">Lightbox</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Range Slider</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Sweet Alert</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Rating</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Forms</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Tables</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Charts</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-md-4">
                            <h5 class="font-size-14 mt-0">Applications</h5>
                            <ul class="list-unstyled megamenu-list">
                                <li>
                                    <a href="javascript:void(0);">Ecommerce</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Calendar</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Email</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Projects</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Tasks</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Contacts</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-md-4">
                            <h5 class="font-size-14 mt-0">Extra Pages</h5>
                            <ul class="list-unstyled megamenu-list">
                                <li>
                                    <a href="javascript:void(0);">Light Sidebar</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Compact Sidebar</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Horizontal layout</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Maintenance</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Coming Soon</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Timeline</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">FAQs</a>
                                </li>
                    
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="row">
                        <div class="col-sm-6">
                            <h5 class="font-size-14 mt-0">UI Components</h5>
                            <ul class="list-unstyled megamenu-list">
                                <li>
                                    <a href="javascript:void(0);">Lightbox</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Range Slider</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Sweet Alert</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Rating</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Forms</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Tables</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Charts</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-sm-5">
                            <div>
                                <img src="assets/images/megamenu-img.png" alt="" class="img-fluid mx-auto d-block">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
      </div>

      <div class="d-flex">
        <div class="dropdown d-inline-block d-lg-none ml-2">
          <button
            type="button"
            class="btn header-item noti-icon waves-effect"
            id="page-header-search-dropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="ri-search-line"></i>
          </button>
          <div
            class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
            aria-labelledby="page-header-search-dropdown"
          >
            <form class="p-3">
              <div class="form-group m-0">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search ..." />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="submit">
                      <i class="ri-search-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

      
        <b-dropdown
          class="d-none d-lg-inline-block d-lg-inline-block ml-1"
          menu-class="dropdown-menu-lg"
          right
          toggle-class="header-item noti-icon"
          variant="black"
        >
          <template v-slot:button-content>
            <i class="ri-apps-2-line"></i>
          </template>
          <div class="px-lg-2">
            <div class="row no-gutters">
              <div class="col">
                <a class="dropdown-icon-item" href="javascript: void(0);">
                  <img src="/assets/images/brands/github.png" alt="Github" />
                  <span>GitHub</span>
                </a>
              </div>
              <div class="col">
                <a class="dropdown-icon-item" href="javascript: void(0);">
                  <img src="/assets/images/brands/bitbucket.png" alt="bitbucket" />
                  <span>Bitbucket</span>
                </a>
              </div>
              <div class="col">
                <a class="dropdown-icon-item" href="javascript: void(0);">
                  <img src="/assets/images/brands/dribbble.png" alt="dribbble" />
                  <span>Dribbble</span>
                </a>
              </div>
            </div>

            <div class="row no-gutters">
              <div class="col">
                <a class="dropdown-icon-item" href="javascript: void(0);">
                  <img src="/assets/images/brands/dropbox.png" alt="dropbox" />
                  <span>Dropbox</span>
                </a>
              </div>
              <div class="col">
                <a class="dropdown-icon-item" href="javascript: void(0);">
                  <img src="/assets/images/brands/mail_chimp.png" alt="mail_chimp" />
                  <span>Mailchimp</span>
                </a>
              </div>
              <div class="col">
                <a class="dropdown-icon-item" href="javascript: void(0);">
                  <img src="/assets/images/brands/slack.png" alt="slack" />
                  <span>slack</span>
                </a>
              </div>
            </div>
          </div>
        </b-dropdown>

        <div class="dropdown d-none d-lg-inline-block ml-1">
          <button
            type="button"
            class="btn header-item noti-icon waves-effect"
            @click="initFullScreen"
          >
            <i class="ri-fullscreen-line"></i>
          </button>
        </div>

     
        <b-dropdown
          right
          variant="black"
          toggle-class="header-item"
          class="d-inline-block user-dropdown"
        >
          <template v-slot:button-content>
            <img
              class="rounded-circle header-profile-user"
              src="/assets/images/users/avatar-2.jpg"
              alt="Header Avatar"
            />
            <span class="d-none d-xl-inline-block ml-1">Kevin</span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </template>
          <!-- item-->
          <a class="dropdown-item" href="#">
            <i class="ri-user-line align-middle mr-1"></i>
           Profile          </a>
          <a class="dropdown-item" href="#">
            <i class="ri-wallet-2-line align-middle mr-1"></i>
            Mywallet
          </a>
          <a class="dropdown-item d-block" href="#">
            <span class="badge badge-success float-right mt-1">11</span>
            <i class="ri-settings-2-line align-middle mr-1"></i>
            Settings
          </a>
          <a class="dropdown-item" href="#">
            <i class="ri-lock-unlock-line align-middle mr-1"></i>
            Lockscreen
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item text-danger" href="/logout">
            <i class="ri-shut-down-line align-middle mr-1 text-danger"></i>
           logout
          </a>
        </b-dropdown>

        <div class="dropdown d-inline-block">
          <button
            type="button"
            class="btn header-item noti-icon right-bar-toggle waves-effect toggle-right"
            @click="toggleRightSidebar"
          >
            <i class="ri-settings-2-line toggle-right"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.notify-item {
  .active {
    color: #16181b;
    background-color: #f8f9fa;
  }
}
</style>