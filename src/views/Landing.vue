
<template>
  <div class="wrapper" style="background-color: whitesmoke">
    <parallax class="section page-header header-filter" :style="headerStyle" style="box-shadow: 0 80px 60px 0 black;" >
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100 "
          >
            <h1 id="title" class="title"><span style="color: #00b8d4; font-weight: bold"> Level</span> Scaffolding</h1>
            <div id="Line"></div>
            <h4 id="titleDesc">
              Scaffolding solutions form residential to commercial. We are there to it up fast! Making sure your work site is safe!
              Check out exactly what services we do, and what best you need.
            </h4>
            <br />
            <md-button
              herf="/"
              onclick="window.open('tel:080053835')"
              class="md-info md-lg"
              target="_blank"
              id="PhoneBtn"
              style="border-radius: 500px"
              ><md-icon>phone</md-icon> 0800 538 358</md-button
            >
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container" id="Service-Container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2  class="title text-center"><span style="font-weight: bold; color: #00b0ff;">Services</span> we provide</h2>
              <h5 class="description">
                We here at level scaffolding have the safest and most cost effective scaffolding solutions.
                From Residential to Industrial, we have your back. Quickly adaptable to any changes on the site,
                without the massive upsurge in pricing that other companies do.
                Using tube and clip across the board, to make sure the scaffolding is as safe as can be and can adapt to a changing job.
              </h5>
            </div>
          </div>
          <div class="features text-center" id="allServices">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100 feature" style="position: relative">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>home</md-icon>
                  </div>
                  <h4 class="info-title">Residential</h4>
                  <p>
                    New builds, renovations and even for small touch ups. We provide cost effective and safe scaffolding fit for residential use. Using H-Frame scaffolding and nets to make sure its as safe as can be.
                  </p>
                </div>

                <div class="FeatureImage" id="SResdentail"></div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100 feature" style="position: relative">
                <div class="info">
                  <div class="icon icon-success">
                    <md-icon>business</md-icon>
                  </div>
                  <h4 class="info-title">Small Commercial</h4>
                  <p>
                    Save your time by allowing us to put up our scaffolding fast. Conforming to the highest industry standards making sure your jobs are started on time. With as little hassle as possible.
                  </p>
                </div>
                <div class="FeatureImage" id="SComercial"></div>
              </div>

              <div class="md-layout-item md-medium-size-33 md-small-size-100 feature" style="position: relative">
                <div class="info">
                  <div class="icon icon-danger">
                    <md-icon>engineering</md-icon>
                  </div>
                  <h4 class="info-title">Industrial</h4>
                  <p>
                   From urgent changes to the buildings and repairs. Or even full shut downs of the building for large scale changes, we can have scaffolding up ASAP.
                  </p>

                </div>
                <div class="FeatureImage" id="SIndustrial"></div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="section text-center carouselArea" id="carouselArea">
        <div class="container">
          <h2 style="margin: 0"  class="title">A <span style="color: #00b8d4">Glimpse</span> at Our Work</h2>
          <h3 style="margin-top: initial" class="text-center description carouselText">
            Click on any of the images to see a more in depth case study on our approach to the specific project at hand.
          </h3>
          <div class="team">
            <carousel
              :per-page="1"
              loop
              :speed="700"
              autoplay
              :autoplay-timeout="5000"
              :mouse-drag="true"
              navigationEnabled
              navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
              navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
              class="carousel"
            >
              <slide class="slide">

                <img :src="carousel1" alt="carousel1" />
                <div class="carousel-caption">
                  <h4>
                    <md-icon>location_on</md-icon>
                    Somewhere Beyond, United States
                  </h4>
                </div>
              </slide>
              <slide class="slide">

                <img :src="carousel2" alt="carousel2" />
                <div class="carousel-caption">
                  <h4>
                    <md-icon>location_on</md-icon>
                    Yellowstone National Park, United States
                  </h4>
                </div>
              </slide>
              <slide class="slide">

                <img :src="carousel3" alt="carousel3" />
                <div class="carousel-caption">
                  <h4>
                    <md-icon>location_on</md-icon>
                    Yellowstone National Park, United States
                  </h4>
                </div>
              </slide>
              <slide class="slide">

                <img :src="carousel4" alt="carousel4" />
                <div class="carousel-caption">
                  <h4>
                    <md-icon>location_on</md-icon>
                    Yellowstone National Park, United States
                  </h4>
                </div>
              </slide>
              <slide class="slide">

                <img :src="carousel5" alt="carousel5" />
                <div class="carousel-caption">
                  <h4>
                    <md-icon>location_on</md-icon>
                    Yellowstone National Park, United States
                  </h4>
                </div>
              </slide>
            </carousel>
            <img src="../assets/img/Site-Safe-logo.png" alt="SiteSafe" id="SiteSafe">
          </div>
        </div>
      </div>
      <div style="position: relative" class="section section-contacts">
        <div id="Rscaff"></div>
        <div id="Lscaff"></div>
        <div class="container" style="padding-bottom: 10vh">
          <div class="md-layout">
            <div class="md-layout-item md-size-80 md-xsmall-size-100 mx-auto">
              <div class="section contactStrip" style="padding: initial">
                  <div class="features text-center">
                    <div class="md-layout">
                      <div class="md-layout-item md-medium-size-100 md-small-size-100 feature" style="position: relative">
                        <div class="info">
                          <div  class="icon icon-info">
                            <md-icon style="font-size: 5.9rem;">place</md-icon>
                          </div>
                          <h4 style="margin: initial; font-size: 1.6rem" class="info-title Ctitle">Address</h4>
                          <p style="font-size: 1rem">
                            75 main south rd
                          </p>
                        </div>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-small-size-100 feature" style="position: relative">
                        <div class="info">
                          <div class="icon icon-info">
                            <md-icon>phone</md-icon>
                          </div>
                          <h4 style="margin: initial; font-size: 1.6rem" class="info-title Ctitle">Phone</h4>
                          <p style="font-size: 1rem">
                            Main Business: 0800 538 358 <br>
                          </p>
                        </div>
                      </div>

                      <div class="md-layout-item md-medium-size-33 md-small-size-100 feature" style="position: relative">
                        <div class="info">
                          <div class="icon icon-info">
                            <md-icon>email</md-icon>
                          </div>
                          <h4 style="margin: initial; font-size: 1.6rem"  class="info-title Ctitle">Email</h4>
                          <p style="font-size: 1rem">
                            office@levelscaffolding.co.nz
                          </p>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              <h2 class="text-center title">Contact <span style="color: #00b8d4">Us</span></h2>
              <h4  class="text-center description">
                From free quotes or just a question. Feel free to send us an email and we'll get back to you ASAP.
              </h4>

                <form class="contact-form">
                  <div class="md-layout">
                    <div class="md-layout-item md-size-50">
                      <md-field>
                        <label>Your Name</label>
                        <md-input v-model="name" type="text"></md-input>
                      </md-field>
                    </div>
                    <div class="md-layout-item md-size-50">
                      <md-field>
                        <label>Your Email</label>
                        <md-input v-model="email" type="email"></md-input>
                      </md-field>
                    </div>
                  </div>
                  <md-field maxlength="5">
                    <label>Your Message</label>
                    <md-textarea v-model="message"></md-textarea>
                  </md-field>
                  <div class="md-layout">
                    <div class="md-layout-item md-size-33 mx-auto text-center">
                      <md-button class="md-success">Send Message</md-button>
                    </div>
                  </div>
                </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {  TimelineMax, Back } from "gsap";
  export default {
    bodyClass: "landing-page",
    props: {
      header: {
        type: String,
        default: require("@/assets/img/Hotel-Scaffolding.png")
      },
    },
    data() {
      return {
        name: null,
        email: null,
        message: null,
        classicModal: false,
        isVisible: false,
        isVisible2: false,
        selectedDate: new Date("2018/03/26"),
        carousel1: require("@/assets/img/JobA.png"),
        carousel2: require("@/assets/img/JobB.png"),
        carousel3: require("@/assets/img/JobC.png"),
        carousel4: require("@/assets/img/JobD.png"),
        carousel5: require("@/assets/img/JobE.png")
      };
    },
    mounted() {

    var OpeningTimeLine = new TimelineMax({});
    OpeningTimeLine.to('#Para', 0.3, {opacity: 1}).from('#Line', 1, {width: 0, ease: Back.easeOut.config(0.5)}, '+=1').from(
      '#title', 1, {translateY: -50, opacity: 0, ease: Back.easeOut.config(0.5)}).from('#titleDesc', 1, {translateY: 50, opacity: 0}, '-=1').from(
      '#PhoneBtn', 1, {opacity: 0}, '-=1');

      var LogoStringTimeline = new TimelineMax({play: false, paused: true});
      LogoStringTimeline.from("#allServices", 2, {translateX: -2000,ease: Back.easeOut.config(0.7)}, '+=1');
      var GalleryTimeLine = new TimelineMax({play: false, paused: true});
      GalleryTimeLine.from("#carouselArea", 4, {opacity: 0, translateY: 1000, ease: Back.easeOut.config(0.2)}, '+=1');

      this.$nextTick(function(){
        window.addEventListener("scroll", function() {
          if(this.isVisible === false) {
            var rect = $('#allServices').getBoundingClientRect();
            var elemTop = rect.top;
            var elemBottom = rect.bottom;

            // Only completely visible elements return true:
            this.isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
          } else {
            LogoStringTimeline.play();
          }
          if(this.isVisible2 === false) {
            var rect2 = $('#carouselArea').getBoundingClientRect();
            var elemTop2 = rect2.top;
            var elemBottom2 = rect2.bottom;

            // Only completely visible elements return true:
            this.isVisible2 = (elemTop2 >= 200) && (elemBottom2 <= window.innerHeight);
          } else {
            GalleryTimeLine.play();
          }


        })
      });
    },
    computed: {
      headerStyle() {
        return {
          backgroundImage: `url(${this.header})`
        };
      }
    },
    methods: {
      classicModalHide() {
        this.classicModal = false;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @media (min-width: 1500px) {
    .md-toolbar-row, .section .container, .footer .container {
      max-width: 1440px;
    }
  }

  .info {
    padding: 10px 0 10px;
  }
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
  .LandingArea {
    background: rgba(0,0,100, 0.2);
    box-shadow: rgba(0,0,100,0.4) 0 0 200px;
  }
  #SComercial {
    background-image: url("../assets/img/Commercial-Scaffolding.png");
  }
  #SResdentail {
    background-image: url("../assets/img/Resdentail-Scaffolding.png");
  }
  #SIndustrial {
    background-image: url("../assets/img/Industrial-Scaffolding.png");
  }
  .feature:hover .FeatureImage {
    cursor: pointer;
    opacity: 1;
    filter: grayscale(0%);
  }
  .FeatureImage {
    transition: 0.5s;
    filter: grayscale(100%);
    opacity: 0.5;
    background-size: 100% 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .info p {
    color: black;
    background-color: rgba(255,255,255,0.65);
    box-shadow: rgb(255,255,255) 0 5px 50px 10px;
    padding: 5px;

  }
  @media (min-width:1400px){
    .feature {
      margin: 0 50px;
    }
    #Service-Container {
      max-width: 1400px;
    }
    .carousel {
      width: 1024px;
      height: 576px;
    }
  }
@media (max-width:1000px){
  .carousel {
    width: 80vw;
    height: auto;
  }
}
.slide img {
  transition: 1s;
  max-height: 70vh;
}
 .slide:hover img {
   transform: scale(1.2);
   z-index: -1;
 }
  .carouselArea {
    background-image: url("../assets/img/FlagWhite.png");
    background-size: 10% 10%;
    background-repeat: repeat;
    //box-shadow: inset black 10px 10px -10px 50px;
    box-shadow:inset 0 -3em 3em rgba(0,0,0,0.1),
    0 0  0 2px rgb(255,255,255),
    0.3em 0.3em 1em rgba(0,0,0,0.3),
    0 0  20px rgba(0,0,0,0.7);
  }
  .carouselText {
    padding-bottom: 30px;
    color: black;
  }

.carousel {
  padding: 20px;
  border-radius: 20px;
  background-color: rgba(0,0,0,0.1);
  box-shadow: inset 0 0 20px rgba(0,0,0,0.2);
  justify-self: center;
  align-self: center;
}
.team{
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
}
  #Line {
    width: 100%;
    height: 1px;
    background-color: #00b8d4;
    margin: initial;
    padding: initial;
  }
  #title {
    margin: initial;
    padding: initial;
    font-size: 4rem;
  }
@media (min-width:1000px){
  #ContactSplit {
    display: grid;
    grid-template-columns: 33% 33% 33%;
  }
  #Rscaff {
    position: absolute;
    height: 100%;
    width: 50px;
    top: 0;
    right: 0;
    background-image: url("../assets/img/Scaffold.png");
    background-size: 100% auto;
    background-repeat: repeat-y;
  }
  #Lscaff {
    position: absolute;
    height: 100%;
    width: 50px;
    top: 0;
    left: 0;
    background-image: url("../assets/img/Scaffold.png");
    background-size: 100% auto;
    background-repeat: repeat-y;
  }
  #SiteSafe {
    padding-top: 100px;
    width: 30%;
  }
}

</style>
