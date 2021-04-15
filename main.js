// const getFavicons = require('get-website-favicon')

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
      const iconDiv = document.createElement("div")
      const icon = document.createElement("img")
      iconDiv.setAttribute("class", "iconDiv")
      icon.setAttribute("class", "icon")
      ul.appendChild(li)
      li.appendChild(iconDiv)
      iconDiv.appendChild(icon)
      

        
      ul.appendChild(li)
       const aTag = document.createElement("a")
      aTag.setAttribute("href", `${webformInput.value}`)
      aTag.innerText = "visit";
      iconDiv.appendChild(aTag);
      
     
      // console.log(li)

     
      // aTag.href = webformInput.value
      // const hyperLinkedImage = document.createElement("img")
      icon.src = "http://s2.googleusercontent.com/s2/favicons?domain_url=" + webformInput.value
      icon.width = "28"
      icon.height = "28"
      // icon.setAttribute("href", webformInput.value)
      // aTag.appendChild(hyperLinkedImage)
      // document.querySelector("div").appendChild(aTag)
      webformInput.value = "";
      catForm.value = "";
    })
      // const getFavicons = require('get-website-favicon')
      // getFavicons('${webformInput.value}').then(data=>{
      //   let imgUrl = data.icons[0].src
      //       imgUrl.setAttribute('href',`${webformInput.value}`)
      // }) 

    
      // li.innerText = webformInput.value

        // fetch(`${webformInput.value}`){
        //   .then()
        //   .then(data => //obj of data containing favicon that needs to be accessed )
        // }


  
    
      
    })


  //   var getFavicon = function(){
  //     var favicon = undefined;
  //     var nodeList = document.getElementsByTagName("link");
  //     for (var i = 0; i < nodeList.length; i++)
  //     {
  //         if((nodeList[i].getAttribute("rel") == "icon")||(nodeList[i].getAttribute("rel") == "shortcut icon"))
  //         {
  //             favicon = nodeList[i].getAttribute("href");
  //         }
  //     }
  //     return favicon;        
  // }


  
//   document.addEventListener("DOMContentLoaded", () => {

//     const webForm = document.querySelector("#create-web-form")
    
//     webForm.addEventListener("submit", (e) => {

        // e.preventDefault()
        // const webformInput = document.querySelector("#new-web-description")
        // const ul = document.querySelector("ul")
        // const li = document.createElement("li")
        // const aTag = document.createElement("a")
        // aTag.href = webformInput.value
        // const hyperLinkedImage = document.createElement("img")
        // hyperLinkedImage.src = "http://s2.googleusercontent.com/s2/favicons?domain_url=" + webformInput.value
        // hyperLinkedImage.width = "60"
        // hyperLinkedImage.height = "60
        // aTag.appendChild(hyperLinkedImage)
        // document.querySelector("div").appendChild(aTag)
        // webformInput.value = "";
//     });

// });