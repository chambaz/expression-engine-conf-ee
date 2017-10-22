import Vue from 'vue/dist/vue.esm'

// create new Vue componnt
Vue.component('contact-form', {
  // available props
  props: ['heading', 'body', 'buttonText'],

  // build initial field data object
  data: function() {
    return {
      firstName: {
        value: '',
        userInput: false
      },
      lastName: {
        value: '',
        userInput: false
      },
      email: {
        value: '',
        userInput: false
      },
      message: {
        value: '',
        userInput: false
      }
    }
  },

  // calculate validity of each field
  computed: {
    firstNameValid: function() {
      return !!this.firstName.value.length
    },
    lastNameValid: function() {
      return !!this.lastName.value.length
    },
    emailValid: function() {
      return this.email.value.length && this.email.value.match(/.+@.+\..+/)
    },
    messageValid: function() {
      return !!this.message.value.length
    }
  },

  // on submit mark each field as having user interaction
  // therefore showing error class if invalid
  methods: {
    submit: function(e) {
      e.preventDefault()
      this.firstName.userInput = true
      this.lastName.userInput = true
      this.email.userInput = true
      this.message.userInput = true
    }
  },

  // show error classes if user has interacted and field is invalid
  // on focus update user input to true
  template: `
    <div class="contact-form">
      <div class="contact-form__inner">
        <h2 class="contact-form__heading">{{heading}}</h2>
        <div class="contact-form__body" v-html="body"></div>
        <form class="contact-form__form">
          <ul class="contact-form__fields">
            <li class="contact-form__field contact-form__field--inline">
              <input class="contact-form__input" v-model="firstName.value" v-on:focus="firstName.userInput = true" v-bind:class="{ 'contact-form__input--error': firstName.userInput && !firstNameValid }" type="text" placeholder="First name" />
              <input class="contact-form__input" v-model="lastName.value" v-on:focus="lastName.userInput = true" v-bind:class="{ 'contact-form__input--error': lastName.userInput && !lastNameValid }" type="text" placeholder="Last name" />
            </li>
            <li class="contact-form__field"><input class="contact-form__input" v-model="email.value" v-on:focus="email.userInput = true" v-bind:class="{ 'contact-form__input--error': email.userInput && !emailValid }" type="email" placeholder="Email" /></li>
            <li class="contact-form__field"><textarea class="contact-form__input" v-model="message.value" v-on:focus="message.userInput = true" v-bind:class="{ 'contact-form__input--error': message.userInput && !messageValid }" rows="6" placeholder="Message"></textarea></li>
          </ul>
          <input class="button contact-form__submit" type="submit" v-on:click="submit" v-bind:value="buttonText" />
        </form>
      </div>
    </div>
  `
})
