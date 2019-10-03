
const url = "api/gen-qrcode";
const btn = document.querySelector("#generate");



btn.addEventListener("click", (event) => {
    event.preventDefault();
    const message = document.querySelector("#message").value;
    
    fetch(`${url}?message=${message}`)
        .then(res => res.json())
        .then(data => {
            // status success
            if (data.status === "success") {
                document.querySelector("#frame").outerHTML = data.value;
                document.querySelector("svg").setAttribute("id", "frame");
                console.log(data);
            } else {
                // status error
                console.log(data);
            }
        })
        .catch(err  => console.log(err))
});