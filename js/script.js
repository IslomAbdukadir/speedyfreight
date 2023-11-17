// burger menu

let list = document.querySelector(".header-list");

$(".menu").click(function () { 
    list.style.display = 'flex';   
    $(".header-link-exit").click(function () { 
        $(".header-list").hide();    
    }); 
});

// burger menu