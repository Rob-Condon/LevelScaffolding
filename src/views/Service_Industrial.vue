
<template>
  <div class="wrapper" style="background-color: whitesmoke">
    <parallax class="section page-header header-filter" id="Para" :style="headerStyle" style="box-shadow: 0 80px 60px 0 black; max-height: 70vh; background-position: 0 0" >
    <div style="background-color: rgba(0,0,0,0.4); position: absolute; top: 0; width: 100%; height: 100%"></div>
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100 "
            id="TitlePop"
          >
            <h1 id="title" class="title"><span style="color: #00b8d4; font-weight: bold"> Industrial </span></h1>
            <div id="Line"></div>
            <h4 id="titleDesc">
              We specialise in residential scaffolding that provides for safe, complaint, and convenient working at height. We understand specific access requirements for different trades and design scaffolding accordingly, using versatile Ringlock scaffolding system
            </h4>
            <br />
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div style="position: relative" class="section">
        <div id="Rscaff"></div>
        <div id="Lscaff"></div>
        <div class="container" style="max-width: 1500px">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-90 md-xsmall-size-100 mx-auto text-left"
            >
              <h1  class="title text-left">Our <span style="font-weight: bold; color: #00b0ff;">Origins</span></h1>
              <h3 style="color: black" class="description text-left">
                <br>
                Our scaffolding work ranges from general maintenance, major shut downs and all out of hours call outs due to breakdowns and/or maintenance.
                <br><br>
                We do everything from new/existing homes to rebuilds. We can provide diverse solutions any need. Making sure you and your employees are safe and have the easiest time working possible. Unlike those who
                would have more generalized solutions. And with constant training and development we are always making sure to keep upto date with what is safest and what makes it easy for anyone to work on.
                <br><br><br>
              </h3>

            </div>
          </div>
        </div>
      </div>
      <div class="section contactStrip" style="padding-top: initial">
        <div class="container" id="Service-Container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2  class="title text-center">Our <span style="font-weight: bold; color: #00b0ff;">Principles</span></h2>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100 feature" style="position: relative">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>schedule</md-icon>
                  </div>
                  <h4 style="margin: initial;" class="info-title Ctitle">Speed</h4>
                  <p>
                    Why your fast?
                  </p>
                </div>
              </div>

              <div class="md-layout-item md-medium-size-33 md-small-size-100 feature" style="position: relative">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>support_agent</md-icon>
                  </div>
                  <h4 style="margin: initial;" class="info-title Ctitle">Support</h4>
                  <p>
                    Open to changes on site? that kinda thing maybe?
                  </p>

                </div>
              </div>

              <div class="md-layout-item md-medium-size-33 md-small-size-100 feature" style="position: relative">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>place</md-icon>
                  </div>
                  <h4 style="margin: initial;" class="info-title Ctitle">Local</h4>
                  <p>
                    Keeping it local
                  </p>
                </div>
              </div>

              <div class="md-layout-item md-medium-size-33 md-small-size-100 feature" style="position: relative">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>health_and_safety</md-icon>
                  </div>
                  <h4 style="margin: initial;" class="info-title Ctitle">Safety</h4>
                  <p>
                    we put safety first and foremost?
                  </p>

                </div>
              </div>

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
        default: require("../assets/img/JobB.jpg")
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
      OpeningTimeLine.to('#Para', 0.3, { opacity: 1 }).from('#Line', 1, {
        width: 0,
        ease: Back.easeOut.config(0.5)
      }, '+=0.5').from(
        '#title', 1, {
          translateY: -50,
          opacity: 0,
          ease: Back.easeOut.config(0.5)
        }).from('#titleDesc', 1, { translateY: 50, opacity: 0 }, '-=1').from(
        '#PhoneBtn', 1, { opacity: 0 }, '-=1');

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
  .info {
    padding: initial;
  }
  .contactStrip {
    background-color: rgba(0,0,0,0.1);
    box-shadow: 0 0 20px rgba(0,0,0,0.9);
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
}
</style>
