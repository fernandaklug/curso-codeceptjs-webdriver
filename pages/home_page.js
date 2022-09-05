const { I } = inject();

module.exports = {

  // insert your locators and methods here

  fields:{

  },

  button: {
    loginButton: '.login'
  },

  messages:{

  },

  accessLoginPage(){
    I.click(this.button.loginButton)
  }
  
}
