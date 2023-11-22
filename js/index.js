// console.log("this is my script")
let result = {
  "tag": "",
  "free": true,
  "role": false,
  "user": "dillu",
  "email": "dillu@gmail.com",
  "score": 0.48,
  "state": "undeliverable",
  "domain": "gmail.com",
  "reason": "invalid_mailbox",
  "mx_found": true,
  "catch_all": null,
  "disposable": false,
  "smtp_check": false,
  "did_you_mean": "",
  "format_valid": true
}




submitBtn.addEventListener("click", async (e) => {
  e.preventDefault()
  console.log("Clicked")
  let key = "ema_live_SseVejLbKtrU11voudhYEqwVCVBscpaAr44Q5fyI"

  let email = document.getElementById("EmailID").value

  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`

  let res = await fetch(url)
  //  .catch(error=>{
  //   console.error('Error:',error)
  //  })

   let result = await res.json()

  let str = ""
  for (key of Object.keys(result)) {
    if(result[key]!=="" && result[key]!==" "){
    str = str + `<div>${key}: ${result[key]}</div>`
     }
  }

  //console.log(str)
  resultCont.innerHTML = str

})