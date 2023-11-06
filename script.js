const text = document.getElementById("testimonial-text");
const title = document.getElementById("title");
const name = document.getElementById("name");
const img = document.getElementById("display-img");
const sliderContainer = document.querySelector(".container");

let slide = 0;

const data = [
  {
    img: "./images/image-tanya.jpg",
    alt: "Tanya",
    name: "Tanya Sinclair",
    title: "UX Engineer",
    text: "“I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.”",
  },
  {
    img: "./images/image-john.jpg",
    alt: "John",
    name: "John Tarkpor",
    title: "Junior Front-end Developer",
    text: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
  },
];

function showTestimonial(){   
    const currentTestimonial = data[slide];
    text.textContent = currentTestimonial.text;
    title.textContent = currentTestimonial.title;
    name.textContent = currentTestimonial.name;
    img.src = currentTestimonial.img;
    img.alt = currentTestimonial.alt;
    console.log(currentTestimonial);
}

function prevTestimonial() {
    document.getElementById("prev").addEventListener("click", () =>{
        if (slide > 0){
            slide--;
        } else{
            slide++;
        }
        showTestimonial();
    });
};

function nextTestimonial(){
    document.getElementById("next").addEventListener("click", () =>{
        if (slide == 0){
            slide++;
        } else{
            slide--;
        }
        showTestimonial();
    });
};

    sliderContainer.addEventListener("keydown", function(e){
        if (e.keyCode == 37 || e.key == "ArrowLeft") {
            prevTestimonial();
        } else if (e.keyCode == 39 || e.key == "ArrowRight") {
          nextTestimonial();
        }
    });

showTestimonial();
prevTestimonial();
nextTestimonial();
 