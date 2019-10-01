app = {};

app.seeInfo = function () {
    $(`.resume`).on(`click`, function() {
        let bio = $(this).attr(`id`);

        if ($(`.${bio}`).hasClass(`seeInfo`)) {
            $(`.bio`).removeClass(`seeInfo`);
            $(`.resume`).removeClass(`clickedBio`);
        } else {
            $(`.bio`).removeClass(`seeInfo`);
            $(`.${bio}`).addClass(`seeInfo`);
            $(`.resume`).addClass(`clickedBio`);
            $(this).removeClass(`clickedBio`);
        }
        
    })
}

app.smoothScroll = function () {
    $(`.navBar a`).on(`click`, function() {
        event.preventDefault();
        let scrollTo = this.hash
        $(`html`).animate({
            scrollTop: $(scrollTo).offset().top + -104
        }, 800);
    })
    
}

// INIT FUNCTION
app.init = function () {
    app.seeInfo();
    app.smoothScroll();
};

// DOCUMENT READY
$(function () {
    app.init()
});