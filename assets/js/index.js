window.addEventListener("load", function(){
    const navBar = document.querySelectorAll(".nav-item");
    console.log(navBar);
     [...navBar].forEach((item) => 
     item.addEventListener("click",handleClick)
     );
     function handleClick(e){
        [...navBar].forEach((item) =>
        item.classList.remove("active"));
        e.target.classList.add("active");
     }
});
