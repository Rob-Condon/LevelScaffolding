<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="#/">
              Home Page
            </a>
          </li>
          <li>
            <a href="#/AboutUs">
              About Us
            </a>
          </li>
          <li>
            <a>
              Services
            </a>
          </li>
          <li>
            <a href="#/ContactUs">>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }} by
        <a href="https://www.inhouseweb.nz/" target="_blank">In House Web</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
