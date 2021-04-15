

document.addEventListener("DOMContentLoaded", () => {

    // As a user, I should be able to type a task into the input field.
    // As a user, I should be able to click some form of a submit button.
    // As a user, the task string that I provided should appear on the DOM after the submit button has been activated.

    //stretch goals send all the RESTFUL
    const catForm = document.querySelector("#create-cat-form")
    
    catForm.addEventListener("submit", (e) => {
       e.preventDefault()
     
      const formInput = document.querySelector("#new-cat-description")
      console.log(formInput.value);
      const p = document.querySelector("#cat-p")
     
      p.innerText = formInput.value
    //   ul.appendChild(li)
        console.log(p)
    })
    
    
    const webForm = document.querySelector("#create-web-form")
    
    webForm.addEventListener("submit", (e) => {
       e.preventDefault()
     
      const webformInput = document.querySelector("#new-web-description")
      console.log(webformInput.value);
      const ul = document.querySelector("ul")
      const li = document.createElement("li")
      const icon = document.createElement("div")
      icon.setAttribute("class", "icon")
      li.appendChild(icon)

      const aTag = document.createElement('a');
      aTag.setAttribute('href',`${webformInput.value}`);
      aTag.innerText = "visit";
      icon.appendChild(aTag);
      
      // li.innerText = webformInput.value
      ul.appendChild(li)
        console.log(li)
    })
    
      
    })
