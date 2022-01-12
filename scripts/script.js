const navList = document.getElementById("nav-lists");
const navbar_container = document.getElementById("navbar_container")

const flip_card = document.getElementById("flip-card")

function Show() {
    navList.classList.add("_Menus-show");
}

function Hide() {
    navList.classList.remove("_Menus-show");
}

window.onscroll = () => {
    if (window.scrollY > 200) {
        navbar_container.classList.add('nav_colored');
    } else {
        navbar_container.classList.remove('nav_colored');
    }
};

flip_card.addEventListener("click", () => {

    let flip_card_inner = document.getElementsByClassName('flip-card-inner');

    if (flip_card_inner[0].style.transform == "") {
        document.getElementsByClassName('flip-card-inner')[0].style.transform = "rotateY(180deg)";
    } else {
        document.getElementsByClassName('flip-card-inner')[0].style.transform = "rotateY(0deg)";
        document.getElementsByClassName('flip-card-inner')[0].style.transform = "";
    }

})

let showcase_content_header = document.getElementById("showcase_content_header")

extract = showcase_content_header.textContent;

// set the element to blank
showcase_content_header.textContent = "";


// every letter from the extracted text will now be part of a span HTML element
for (t of extract) {
    showcase_content_header.innerHTML += "<span class='showcase_content_header_letter'>" + t + "</span>"
}

let char = 0

setInterval(function () {
    if (char < extract.length) {
        const span = showcase_content_header.querySelectorAll('.showcase_content_header_letter')[char];
        span.classList.add("animate");
        char++;
    }
}, 80)

function navigateTo(navigatingClassName) {
    // console.log(document.getElementsByClassName(navigatingClassName))
    let scrollDiv = document.getElementsByClassName(navigatingClassName)[0].offsetTop - 75;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth' });

    Hide();
}

const timeline = document.getElementById('timeline')

let roadmap_counter = 0

for (let key in core_values) {
    roadmap_counter += 1

    let value = core_values[key]

    if (roadmap_counter % 2 == 0) {
        timeline.innerHTML += `
            <div class="container right">
                <div class="roadmap_content">
                    <h2>${key}</h2>
                    <p>${value}</p>
                </div>
            </div>
        `
    } else {
        timeline.innerHTML += `
            <div class="container left">
                <div class="roadmap_content">
                    <h2>${key}</h2>
                    <p>${value}</p>
                </div>
            </div>
        `
    }

    // console.log(key, ":", value)
}

var xValues = ["Charity","Marketing","Liquidity"];
var yValues = [4,4,5];
var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
];

new Chart("myChart", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },

    options : {
        elements : {
            arc : {
                borderWidth: 0,
            }
        },

        legend: {
            display: true,
            labels: {
                fontColor: 'rgb(255, 255, 255)',
                fontFamily: 'Poppins'
            }
        }
    }
});