define(["./date_format_module"], function(dateFormatModule) {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dateFormat = new dateFormatModule();

    function checkIfInPast(start) {
        var classToAdd = "current";

        if (start < new Date())
            classToAdd = 'past-event';

        return classToAdd;
    }

    var templateModule = function() {

        this.createEventHtml = function(title, start, id) {

            var classToAdd = checkIfInPast(start);
            var weekday = dayNames[start.getDay()];
            var time = dateFormat.time(start);

            return  `<li id="event${id}"class="list-group-item event-list ${classToAdd} hide">
                        <h6>
                            ${title} <br/><small class="text-muted">${weekday + " at " + time}</small>
                            <a href="#" class="favorite-toggle star empty" data-id="${id}"></a>
                        </h6>
                    </li>`;
        }

        this.createEmptyState = function() {
            var emptyHtml = `<div id="empty-state-container" class="text-center ml-auto mr-auto">
                                <h6>Oh no, you have no favorites.</h6>
                                <div class="big-star mt-4 mb-4"></div>
                                <p>Go to All and add favorites by tapping the star on the right.</p>
                            </div>`;
            return `<li>${emptyHtml}<li>`;
        }

        this.createNoLocalStorageState = function() {
            var emptyHtml = `<div id="empty-state-container" class="text-center ml-auto mr-auto">
                                <h6>Oh no, your browser does not have local storage.</h6>
                                <p> We don&#39;t want to annoy users with creating an account. As a result, we require local storage to run this app. We apologize for the inconvenience.</p>
                            </div>`;
            return `<li>${emptyHtml}<li>`;
        }


    };

    return templateModule;

  });
