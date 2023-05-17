$(function(){

    // list-group toggle
    var toggleBtn = $(".list_wrap li");
    var pageBtn = $(".page-link");
    var toggleText = $(".list_list").find("li");


    toggleText.hide();
    toggleBtn.on("click", function(){
        $(this).toggleClass("active");
        $(this).find("ul li").slideToggle();
    });

    pageBtn.on("click", function(){
        $(this).addClass("active");
    });

    pageBtn.on("mouseenter", function(){
        $(this).removeClass("active");
    });


    var modalBtn = $(".delete .bi-trash");
    modalBtn.on("click", function(){
        $(".modal").show();
    });

    var btnClose = $(".btn-close");
    var btnClose_02 = $(".btn-secondary")
    btnClose.on("click", function(){
        $(".modal").hide();
    })

    btnClose_02.on("click", function(){
        $(".modal").hide();
    })

    $(".calender").flatpickr(
        {
            dateFormat: "Y-m-d H:i",
        }
    );



    // Example starter JavaScript for disabling form submissions if there are invalid fields
    $(".submit_btn").on("click", function(){  
        'use strict'
    
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
    
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }
    
            form.classList.add('was-validated')
        }, false)
        })
    })()



})