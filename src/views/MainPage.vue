<template>
  <div id="parallax" class="background"></div>
  <div id="particles"></div>
  <div class="foreground"></div>
  <div class="main">
    <div class="overflow">
      <!-- <transition name="bounce"> -->
      <router-view :user="user"></router-view>
      <!-- </transition> -->
    </div>
  </div>
</template>
<script>
export default {
  props: ["user"],
  mounted() {
    this.loadBackGround();
  },
  methods: {
    loadBackGround() {
      // Let's define the required varibles such as the number of particles to be created and an array to hold the particles
      const particleContainer = document.getElementById("particles");
      const Nparticles = 100;
      let particles = [];

      // function to return a random number from a given min and max
      function rand(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

      // This constructor will generate the required information for each particle and it's html structure to be added to the document
      function createParticle(i) {
        this.id = i;
        this.width = rand(1, 20) + "px";
        this.height = this.width;
        this.x = rand(10, 90) + "%";
        this.delay = rand(1, 60) + "s";
        this.duration = rand(10, 60) + "s";
        this.html =
          '<span style=" width: ' +
          this.width +
          "; height: " +
          this.height +
          "; left: " +
          this.x +
          "; animation-delay: " +
          this.duration +
          "; animation-duration: " +
          this.duration +
          '; "></span>';
      }

      // Let's loop through till we reach the max number of particles and save them to the array and append them to the document
      while (particles.length <= Nparticles) {
        let Particle = new createParticle(particles.length);
        particles.push(Particle);
        particleContainer.innerHTML += Particle.html;
      }

      function parallax() {
        var body = document.body,
          bg = document.getElementById("parallax"),
          startX = 50,
          startY = 80,
          w = document.documentElement.offsetWidth,
          h = document.documentElement.offsetHeight;
        body.addEventListener("mousemove", function(evt) {
          var posX = Math.round((evt.clientX / w) * startX);
          var posY = Math.round((evt.clientY / h) * startY);
          bg.style.backgroundPosition = posX + "% " + posY + "%";
        });
      }

      parallax();

      // Hope you liked it and that has inspired you to create something awesome
    },
  },
};
</script>
