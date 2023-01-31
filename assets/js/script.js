$(document).ready(function(){

    //awaiting save button clicks
    $(".saveBtn").on("click", function(){
        console.log(`It's been saved`);

        let timeBlock = $(this).parent().attr("id")
        let content = $(this).siblings(".description")

        localStorage.setItem(timeBlock, content);

        $(".notification").addClass('appear');

        setTimeout(function(){
            $(".notification").removeClass('appear');

        }, 4000)

    })
})