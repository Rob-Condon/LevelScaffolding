
<template>
  <div class="wrapper" style="background-color: whitesmoke">
    <parallax id="para" class="section page-header header-filter" :style="headerStyle" style="box-shadow: 0 80px 60px 0 black; max-height: 70vh;" >
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100 "
          >
            <h1 id="title" class="title"><span style="color: #00b8d4; font-weight: bold"> Get</span> In Touch</h1>
            <div id="Line"></div>
            <h4 id="titleDesc">
              Get in touch with the team at level scaffolding. Call, Email or even text we will get in touch ASAP. For a site visit or just a free quote,
            </h4>
            <br />
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section contactStrip">
        <div class="container" id="Service-Container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2  class="title text-center">Quick <span style="font-weight: bold; color: #00b0ff;">Details</span></h2>
            </div>
          </div>
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
                    Neil: 027 233 7233 <br>
                    Corey: 0210 245 2955
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
      </div>

      <div class="section section-contacts">
        <div id="Rscaff"></div>
        <div id="Lscaff"></div>
        <div class="container" style="padding-bottom: 10vh">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
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
        default: require("../assets/img/ContactUsBackground.png")
      },
    },
    data() {
      return {
        name: null,
        email: null,
        message: null,
        classicModal: false,
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
.section {
  position: relative;
  padding: 10px 0;
}


</style>
