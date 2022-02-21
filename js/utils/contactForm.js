class ContactForm {
  constructor(namePhototgrapher) {
    this.namePhotographer = namePhototgrapher
    // console.log(namePhototgrapher)
    
  }
    // start () {
    //           this.openModal();
    //           this.closeModal();
    //              this.keyboard();
    //              this.checkInputs();
              
              
    // }
    openModal() {
      const modal = document.getElementById("contact_modal");
      const nameHeader = document.getElementById("contact-me-name");
	    modal.style.display = "block";
      nameHeader.innerText = `${this.namePhotographer}`;
      this.closeModal();
      this.keyboard();
      this.checkInputs();
      
    }
    
    closeModal() {
        document.querySelector('.modal_cross').addEventListener('click', () => {
            const modal = document.getElementById("contact_modal");
            modal.style.display = 'none';
        })
    }

    keyboard() {
        document.addEventListener('keydown', (key) => {
            if (key.code == "Escape") {
                let modal = document.getElementById("contact_modal");
                modal.style.display = 'none';
            }            
        })
    }

    checkInputs() {
            // const submit = document.getElementById("contact_modal");
            const inputs = document.querySelectorAll(".text-control");

            let first;
            let last;
            let email;
            let yourMessage;

            const errorDisplay = (tag, message, valid) => {
            const container = document.querySelector(`#${tag}`);
            const span = document.querySelector(`#${tag} +span`);
            // console.log(tag);
            if (!valid) {
                container.classList.add("error");
                span.classList.add("error-message");
                span.textContent = message;
            } else {
                container.classList.remove("error");
                span.textContent = message;
            }
        };
        
        const firstChecker = (value) => {
            if (value.length > 0 && value.length < 2) {
              errorDisplay(
                "first",
                "Veuillez entrer 2 caractères ou plus pour le prénom."
              );
              first = null;
            } else if (
              !value.match(
                /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
              )
            ) {
              errorDisplay("first", "Le prénom doit contenir des lettres uniquement.");
              first = null;
            } else {
              errorDisplay("first", "", true);
              first = value;
            }
          };
          
          const lastChecker = (value) => {
            if (value.length > 0 && value.length < 2) {
              errorDisplay("last", "Veuillez entrer 2 caractères ou plus pour le nom.");
              last = null;
            } else if (
              !value.match(
                /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
              )
            ) {
              errorDisplay("last", "Le nom doit contenir des lettres uniquement.");
              last = null;
            } else {
              errorDisplay("last", "", true);
              last = value;
            }
          };
          
          const emailChecker = (value) => {
            if (
              !value.match(
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
              )
            ) {
              errorDisplay("email", "L'adressse Mail n'est pas valide.");
              email = null;
            } else {
              errorDisplay("email", "", true);
              email = value;
            }
          };
          
          const yourMessageChecker = (value) => {
            if (value.length > 0 && value.length < 2) {
              errorDisplay(
                "message",
                "Veuillez entrer 2 caractères ou plus pour votre message."
              );
              yourMessage = null;
            } else if (
              !value.match(
                /^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð !?,.'-]+$/u
              )
            ) {
              errorDisplay(
                "message",
                "Le message ne doit pas contenir de caractères spéciaux."
              );
              yourMessage = null;
            } else {
              errorDisplay("message", "", true);
              yourMessage = value;
            }
          };
          
          inputs.forEach((input) => {
            input.addEventListener("input", (e) => {
              switch (e.target.id) {
                case "first":
                  firstChecker(e.target.value);
                  break;
                case "last":
                  lastChecker(e.target.value);
                  break;
                case "email":
                  emailChecker(e.target.value);
                  break;
                case "message":
                  yourMessageChecker(e.target.value);
                  break;
                default:
              }
            });
          });
          this.submit();
          // submit.addEventListener("submit", (event) => {
          //   event.preventDefault();
          
          //   if (!first) {
          //     errorDisplay("first", "Veuillez completer ce champ.");
          //   }
          //   if (!last) {
          //     errorDisplay("last", "Veuillez completer ce champ.");
          //   }
          //   if (!email) {
          //     errorDisplay("email", "Veuillez completer ce champ.");
          //   }
          //   if (!yourMessage) {
          //     errorDisplay("message", "Veuillez completer ce champ.");
          //   }
          
            // if (first && last && email && yourMessage) {
            //   const dataUser = {
            //     first,
            //     last,
            //     email,
            //     yourMessage,
            //   };
              
            //   console.log(dataUser);
            //   first = null;
            //   last = null;
            //   email = null;
            //   yourMessage = null;
            //   inputs.forEach((input) => {
                
            //     input.value = "";
            //   });
            //     document.querySelector('.contact_button').addEventListener('click', () => {
            //     const modal = document.getElementById("contact_modal");
            //     modal.style.display = 'none';
            // })
            // }
    }
    submit () {
      const submit = document.getElementById("contact_modal");

            let first;
            let last;
            let email;
            let yourMessage;
            


      submit.addEventListener("submit", (event) => {
        console.log('123');
        event.preventDefault();
      
        
        if (first && last && email && yourMessage) {
          
          const dataUser = {
            
            first,
            last,
            email,
            yourMessage,
          };
          
          console.log(dataUser);
          first = null;
          last = null;
          email = null;
          yourMessage = null;
          inputs.forEach((input) => {
            
            input.value = "";
          });
        }
      })
    }
}

export default ContactForm