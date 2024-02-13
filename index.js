$(".noButton").mouseover(function () {
    const container = $(".main");
    const noButton = $(".noButton");
    
    containerWidth = container.width();
    containerHeight = container.height();
    noButtonWidth = noButton.width();
    noButtonHeight = noButton.height();

    maxX = containerWidth - noButtonWidth;
    maxY = containerHeight - noButtonHeight;
    
    newX = Math.floor(Math.random() * maxX);
    newY = Math.floor(Math.random() * maxY);

    $(".noButton").css("position", "absolute");
    $(".noButton").css("top", newY + "px");
    $(".noButton").css("left", newX + "px")
})

$(".yesButton").on("click", function () {
    $(".gif").css("background", "url(https://i.pinimg.com/originals/1b/46/c9/1b46c98e7f0ccb10573df26af9d1a34e.gif)");
    $(".gif").css("background-size", "cover");
    $(".gif").css("background-repeat", "no-repeat");
    $(".askOutText > p").text("I LOVE YOU!!!!");
    $(".yesButton, .noButton").css("display", "none");
})

