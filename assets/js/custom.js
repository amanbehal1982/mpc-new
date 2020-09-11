window.onscroll = function() { stickyMenu() };
var mainNav = document.getElementById("main-header");

function stickyMenu() {
    if (window.pageYOffset > 15) {
        mainNav.classList.add("fixedMenu");
    } else {
        mainNav.classList.remove("fixedMenu");
    }
}

$.validator.setDefaults({
    submitHandler: function() {}
});
$().ready(function() {
    $("#signupForm").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            phone: "required",
            password: {
                required: true,
                minlength: 5
            },
            confirmpassword: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            agree: "required"
        },
        messages: {
            name: "Please enter your firstname",
            email: "Please enter a valid email address",
            phone: "Please enter a valid phone number",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirmpassword: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            agree: "Please agree with the Terms & Condition"
        }
    });
    $("#loginForm").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            email: "Please enter a valid email address",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            }
        }
    });
});

$(".show-password, .hide-password").on('click', function() {
    var passwordId = $(this).parents('.form-group').find('input').attr('id');
    if ($(this).hasClass('show-password')) {
        $("#" + passwordId).attr("type", "text");
        $(this).parent().find(".show-password").hide();
        $(this).parent().find(".hide-password").show();
    } else {
        $("#" + passwordId).attr("type", "password");
        $(this).parent().find(".hide-password").hide();
        $(this).parent().find(".show-password").show();
    }
});