(function (doc) {
    const _questionToggle = doc.querySelectorAll(".question-text");

    // adds event listener to each arrow
    _questionToggle.forEach((arrow) => {
        arrow.addEventListener("click", toggleQuestion);
    });

    // toggles the question, rotates the arrow
    function toggleQuestion() {
        this.querySelector(".question").classList.toggle("selected");
        this.querySelector("img").classList.toggle("rotate");

        this.parentElement.querySelector(".answer-text").classList.toggle("show");
    }

})(document);