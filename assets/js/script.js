$(function () {

    //define rows to which cards will be appended
    const projectFeatures = $('.projectfeatures');
    const projectOther = $('.projectsother');
    const projectSoon = $('.comingsoon');

    // let title = ;

    function renderCards () {

        //define for loop for iterating through projects object and adding div and image elements to page
        for (let i = 0; i < projects.length; i++) {

            //create new column element and add class
            let newColumn = $("<div>").addClass("col-lg-4 col-md-6 col-sm-12 my-1");

            //create new card element and add class
            let newCardDiv = $("<div>").addClass("card card-hov bg-white text-white mw-100 mh-100");

            let newImg = $("<img>").addClass("card-img").attr("src", projects[i].screenshot).attr("alt", projects[i].image_alt);

            let newImgOverlay = $("<div>").addClass("card-img-overlay d-flex justify-content-center align-items-end");

            let newCardText = $("<p>").addClass("card-text p-2").text(projects[i].title).append("<br/>");

            let newCardLink = $("<a>").addClass("portfolio-link").attr("href", projects[i].app_link).text("App");

            let newRepoLink = $("<a>").addClass("portfolio-link").attr("href", projects[i].github_link).text("Repo");

            let newSeparator = $("<a>").attr("href", "#").attr("target", "_blank").text("  " + "|" + "  ");

            let newStrLink = $("<a>").addClass("stretched-link").attr("target", "_blank").attr("href", projects[i].stretched_link);

            let targetRow = "";

            //set targetRow based on category of project
            if (projects[i].category == "features") {

                targetRow = projectFeatures;

            } else if (projects[i].category == "other") {

                targetRow = projectOther;

            } else {

                targetRow = projectSoon;
                
            }

            //create new column
            targetRow.append(newColumn);

            //create new card div
            newColumn.append(newCardDiv);

            //add image and image overlay
            newCardDiv.append(newImg, newImgOverlay);

            //add contents of card div
            newImgOverlay.append(newCardText, newStrLink);

            //add links
            newCardText.append(newCardLink, newSeparator, newRepoLink);

        };

    }


    //when the portfolio page opens, render cards from data in projects object
    renderCards();

});