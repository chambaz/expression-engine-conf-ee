import Vue from 'vue/dist/vue.esm'

Vue.component('styleguide-nav', {
  data: function() {
    return {
      active: false
    }
  },
  methods: {
    activate: function(e) {
      e.preventDefault()
      this.active = !this.active
    }
  },
  template: `
    <div class="styleguide-nav" v-bind:class="{ 'styleguide-nav--active': active }">
      <a v-on:click="activate" class="styleguide-nav__hamburger" href="#">
        <img class="styleguide-nav__hamburger-img" src="/img/hamburger.svg" />
      </a>

      <ul class="styleguide-nav__list">
        <li class="styleguide-nav__item">
          <a class="styleguide-nav__link" href="#rich-text">Rich Text</a>
        </li>
        <li class="styleguide-nav__item">
          <a class="styleguide-nav__link" href="#cta-pane">CTA Panel</a>
        </li>
        <li class="styleguide-nav__item">
          <a class="styleguide-nav__link" href="#image-copy">Image Copy</a>
        </li>
        <li class="styleguide-nav__item">
          <a class="styleguide-nav__link" href="#quote">Quote</a>
        </li>
        <li class="styleguide-nav__item">
          <a class="styleguide-nav__link" href="#team-members">Team Members</a>
        </li>
        <li class="styleguide-nav__item">
          <a class="styleguide-nav__link" href="#contact-form">Contact Form</a>
        </li>
      </ul>
    </div>
  `
})
