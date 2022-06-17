// Add your code here

const submitData= (name,email)=>{
        method: "POST",
        headers; {"Content-Type"; "application/json",
                   "Accept"; "application/json"
                }
    body: JSON.stringify()
    .then(response=> response.json())
    .then(object=>document.body.innerHTML = object["id"])
    .catch(error =>document.body.innerHTML =error.message)
};
    



