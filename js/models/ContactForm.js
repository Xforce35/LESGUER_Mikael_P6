class ContactForm {
  constructor (namePhotographer) {
      this.namePhotographer = namePhotographer
  }

  openModal() {
    const modal = document.getElementById("contact_modal");
    const nameHeader = document.getElementById("contact-me-name");
    modal.setAttribute("aria-hidden", "false")
    modal.style.display = "block";

    nameHeader.innerText = `${this.namePhotographer}`;
    // this.closeModal();
    this.keyboard();
    this.listenForm();
  }

  closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = 'none';
  }
    
  keyboard() {
    document.addEventListener('keydown', (key) => {
      if (key.code == "Escape") {
        this.closeModal ();
        }            
      });
  }


  listenForm() {
    document.getElementById('first').addEventListener('input', () => {
      this.validateFirstName();
    })

    document.getElementById('last').addEventListener('input', () => {
      this.validateLastName();
    })

    document.getElementById('email').addEventListener('input', () => {
      this.validateEmail();
    })

    document.getElementById('message').addEventListener('input', () => {
      this.validateMessage();
    })

    document.getElementById("contact_modal").addEventListener("submit", (event) => {
      event.preventDefault();
      if (this.validateFirstName() && this.validateLastName() && this.validateEmail () && this.validateMessage ())
        {
        this.submit();
        }
        else 
          alert('Merci de corriger les erreurs afficher')
        })

    document.querySelector('.modal_cross').addEventListener('click', () => {
      this.closeModal();
    })
    }

  submit() {
    const submit = document.getElementById("contact_modal");
    const inputs = document.querySelectorAll(".text-control");

    submit.addEventListener("submit", (event) => {
      event.preventDefault();
      let first = document.getElementById('first').value;
      let last = document.getElementById('last').value;
      let email = document.getElementById('email').value
      let message = document.getElementById('message').value

      const payLoad = {
        first,
        last,
        email,
        message,
        };
              
        console.log(payLoad);
              
        inputs.forEach((input) => {
        // Exception ici, car on veut justement reset input (donc "reassign du vide")
        // eslint-disable-next-line no-param-reassign
        input.value = "";
        });
        this.closeModal();
        })
  }

  validateFirstName () {
    let el = document.getElementById('first')
    let name = el.value;

    if (name.length > 0 && name.length < 2) {
      this.ShowError (el, "Veuillez entrer 2 caractères ou plus pour le nom.");
      return false
      }
    if (
      !name.match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)) {
      this.ShowError (el, "Le nom doit contenir des lettres uniquement.");
      return false
      }
    this.hideError (el);
    return true
  };

  validateLastName () {
    let el = document.getElementById('last')
    let name = el.value;

    if (name.length > 0 && name.length < 2) {
      this.ShowError (el, "Veuillez entrer 2 caractères ou plus pour le nom.");
      return false
      }
    if (
      !name.match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)) {
      this.ShowError (el, "Le nom doit contenir des lettres uniquement.");
      return false
      }
    this.hideError (el);
    return true
  };

  validateEmail () {
    let el = document.getElementById('email')
    let name = el.value

    if (!name.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      this.ShowError (el, "Le Mail n'est pas valide.");
      return false
      }
    this.hideError (el);
    return true
  };

  validateMessage () {
    let el = document.getElementById('message')
    let name = el.value;

    if (name.length > 0 && name.length < 2) {
      this.ShowError(el, "Veuillez entrer 2 caractères ou plus pour votre message." );
      return false
      }
    else if (!name.match(/^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð !?,.'-]+$/u)) {
      this.ShowError (el, "Le message ne doit pas contenir de caractères spéciaux.");
      return false
      } 
    this.hideError(el);
    return true
  };

  ShowError(el, message) {
    let name = el.getAttribute('id');
    el.classList.add("error");
    document.querySelector(`#error-${name}`).innerText = message;
    document.querySelector(`#error-${name}`).classList.add("error-message");
  }

  hideError(el) {
    let name = el.getAttribute('id');
    el.classList.remove("error");
    document.querySelector(`#error-${name}`).innerText = '';
  }

}

export default ContactForm