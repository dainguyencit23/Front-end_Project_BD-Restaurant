// Home Slider
let slider = document.querySelector(".top-header");
let leftBtn = document.querySelector(".fa-angle-left");
let rightBtn = document.querySelector(".fa-angle-right");
let dots = document.querySelectorAll(".dot");
const images = [
    "./image/slider-1.jpg",
    "./image/slider-2.jpg",
    "./image/slider-3.jpg"
]

let current = 0
function showSlide(index) {
    slider.style.backgroundImage = `url(${images[index]})`
    dots.forEach(dot => {
        dot.classList.remove("active")
    })
    dots[index].classList.add("active")
}
leftBtn.addEventListener("click", () => {
    current--
    if (current < 0) {
        current = images.length - 1
    }
    showSlide(current)
})
rightBtn.addEventListener("click", () => {
    current++
    if (current >= images.length) {
        current = 0
    }
    showSlide(current)
})
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        current = index
        showSlide(current)
    })
})
setInterval(() => {
    current++
    if (current >= images.length) {
        current = 0
    }
    showSlide(current)
}, 5000)
showSlide(current);
//======================================================
// Review Slider
const reviewSlides = document.querySelectorAll(".review-slide");
const reviewDots = document.querySelectorAll(".review-dot");
const reviewSlider = document.querySelector(".review-slider");
let currentIndex = 0;
let startX = 0;
let endX = 0;
function showReviewSlide(index) {
    reviewSlides.forEach(slide => {
        slide.classList.remove("active");
    });
    reviewDots.forEach(dot => {
        dot.classList.remove("active");
    });
    reviewSlides[index].classList.add("active");
    reviewDots[index].classList.add("active");
}

function nextReviewSlide() {
    currentIndex++;
    if (currentIndex >= reviewSlides.length) {
        currentIndex = 0;
    }
    showReviewSlide(currentIndex);
}

function prevReviewSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = reviewSlides.length - 1;
    }
    showReviewSlide(currentIndex);
}

reviewDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {
        currentIndex = index;
        showReviewSlide(currentIndex);
    });
});

setInterval(nextReviewSlide, 5000);
reviewSlider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});
reviewSlider.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
        nextReviewSlide();
    }
    if (endX - startX > 50) {
        prevReviewSlide();
    }
});

showReviewSlide(currentIndex);
// ==============================================
document.addEventListener("DOMContentLoaded", () => {
    // Reservation Form Submit
    const dateInput = document.getElementById("date");
    const timeInput = document.getElementById("time");
    const sizeSelect = document.getElementById("size");
    const bookBtn = document.getElementById("bookBtn");
    const icons = document.querySelectorAll(".input-group .icon");
    const dateIcon = icons[0];
    const timeIcon = icons[1];

    function openPicker(input) {
        if (input.showPicker) {
            input.showPicker();
        } else {
            input.focus();
        }
    }

    dateIcon.addEventListener("click", () => openPicker(dateInput));
    timeIcon.addEventListener("click", () => openPicker(timeInput));

    dateInput.addEventListener("click", () => openPicker(dateInput));
    timeInput.addEventListener("click", () => openPicker(timeInput));

    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);

    bookBtn.addEventListener("click", (e) => {
        e.preventDefault();

        let valid = true;

        document.querySelectorAll(".input-group").forEach(group => {
            group.style.borderColor = "#ccc";
        });

        if (!dateInput.value) {
            alert("Please select Date!");
            dateInput.parentElement.style.borderColor = "red";
            valid = false;
            return;
        }

        if (!timeInput.value) {
            alert("Please select Time!");
            timeInput.parentElement.style.borderColor = "red";
            valid = false;
            return;
        }

        if (sizeSelect.value === "Party Size") {
            alert("Please select Party Size!");
            sizeSelect.parentElement.style.borderColor = "red";
            valid = false;
            return;
        }

        if (valid) {
            const confirmMsg =
                "Confirm Booking?\n\n" +
                "Date: " + dateInput.value + "\n" +
                "Time: " + timeInput.value + "\n" +
                "Party Size: " + sizeSelect.value;

            const isConfirmed = confirm(confirmMsg);

            if (isConfirmed) {
                alert("Successful Booking!");
            }
        }
    });

});
//=================================================
// Menu/Delete Button Mobile UI 
const menu = document.querySelector(".navigation-menu ul");
const overlay = document.querySelector(".overlay-main-header");
const openBtn = document.getElementById("menuToggle");
const closeBtn = document.getElementById("menuClose");
openBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.add("active");
    overlay.classList.add("active");
    openBtn.style.display = "none";
});
function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
}

closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeMenu();
    openBtn.style.display = "flex";

});

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        closeMenu();
    }
});
// ================================================
// go-to-top
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".go-to-top").fadeIn();
        } else {
            $(".go-to-top").fadeOut();
        }
    });
});
// ================================================
// Order Food
const orderButtons = document.querySelectorAll('.menu-order-btn');
orderButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const menuItem = this.closest('.menu-item');
        const name = menuItem.querySelector('.menu-name').innerText;
        const price = menuItem.querySelector('.menu-price').innerText;
        const confirmOrder = confirm(`Order Food: ${name} - ${price} ?`);
        if (confirmOrder) {
            alert('Successful Order!');
        }
    });
});
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const contactName = document.getElementById('name').value.trim();
    const contactEmail = document.getElementById('email').value.trim();
    if (contactName === '') {
        alert('Please enter your Name!');
        return;
    }
    if (contactEmail === '') {
        alert('Please enter your Email!');
        return;
    }
    const contactEmailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!contactEmailPattern.test(contactEmail)) {
        alert('Email is not valid!');
        return;
    }
    alert('Send Successfully!');
});
// =================================================
// Contact Us Form
const notifiForm = document.querySelector('.notifi-email');
notifiForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const notifiEmail = document.getElementById('notifi-email').value.trim();
    if (notifiEmail === '') {
        alert('Please enter your Email!');
        return;
    }
    const notifiEmailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!notifiEmailPattern.test(notifiEmail)) {
        alert('Email is not valid!');
        return;
    }
    alert('Successfully!');
})
