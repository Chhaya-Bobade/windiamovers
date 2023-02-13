let modalBox = document.getElementById("modalbox");
function showModal (){
    setTimeout(() =>{
        modalBox.style.display = "block";
    },1000)
}
function closeModal(){
    modalBox.style.height = "0px";
    modalBox.style.width = "0px";
    modalBox.style.display = "none";
}