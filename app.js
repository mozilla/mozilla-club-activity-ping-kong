(function() {

    // Used to hold information from aside.md and activity.md
    var data = {
        config: {},
        activity: {},
        currentLocale: "en"
    };

    // Returns the path for a given file with locale.
    function getPathForLocale(inPath, inLocale) {
        var locale = inLocale || data.currentLocale;
        return "activity-data/content/" + locale + "/" + inPath;
    }

    function isLocaleAvailable(inLocale) {
        console.log("checking if locale: " + inLocale + " is available");
        if (!data.locales) {
            console.log("no locales found");
            return false;
        }

        for(var i = 0, len = data.locales.length; i < len; i++) {
            if (data.locales[i].code == inLocale) {
                console.log("locale found!");
                return true;
            }
        }

        return false;
    }

    function switchLocale(inLocale) {
        if (isLocaleAvailable(inLocale)) {
            console.log("switching current locale to", inLocale);
            data.currentLocale = inLocale;
            bindActivityData();
            return true;
        } else {
            return false;
        }
    }

    function isDefaultBrowserLanguageLocaleAvailable() {
        var locale = window.navigator.language;
        console.log("isDefaultBrowserLanguageLocaleAvailable:", locale);


        // check for full locale available.
        if (isLocaleAvailable(locale)) {
            return locale;
        }

        // check if language locale is available
        if (isLocaleAvailable(locale.substring(0,2))) {
            return locale.substring(0,2);
        }

        return false;
    }

    function isLocaleSetOnAddress() {
        var locale = window.location.hash.substring(1);
        console.log("isLocaleSetOnAddress:", locale);

        // check for full locale available.
        if (isLocaleAvailable(locale)) {
            return locale;
        }

        // check if language locale is available
        if (isLocaleAvailable(locale.substring(0,2))) {
            return locale.substring(0,2);
        }

        return false;
    }

    function setDefaultLocale() {
        data.currentLocale = isLocaleSetOnAddress() || isDefaultBrowserLanguageLocaleAvailable() || "en";

        console.log("locale set to:", data.currentLocale);
    }

    // Builds the top menu
    function bindNavigationData() {
        var source = $("#navigation-template").html();
        var template = Handlebars.compile(source);

        console.log("Binding navigation data...");

        $("#navigation").html(template(data));


        $("#locales-switch").change(function() {
            var newLocale = $(this).val();
            var text = $(this).text();

            console.log("Switching locale callback");
            switchLocale(newLocale);

            return true;
        });
    }

    // Builds the left sidebar
    function bindAsideData() {
        var source = $("#aside-template").html();
        var template = Handlebars.compile(source);

        console.log("Loading aside.md markdown file...");

        function successfulyLoadedMarkdownFile(markdownData) {
            var asideData = metaMarked(markdownData);

            data.activity.aside = asideData.html;

            console.log("Binding aside data...");

            $(".aside").html(template(data));
        }

        $.ajax({
            url: getPathForLocale("aside.md", null),
            type: 'get',
            dataType: 'html',
            success: successfulyLoadedMarkdownFile
        });

    }

    function bindLocaleData() {
        var source = $("#locales-bar-template").html();
        var template = Handlebars.compile(source);

        console.log("Loading locales.json file...");

        function successfulyLoadedLocalesFile(locales) {

            data.locales = locales;

            setDefaultLocale();

            bindActivityData();
        }

        $.ajax({
            url: "activity-data/locales.json",
            type: 'get',
            dataType: 'json',
            success: successfulyLoadedLocalesFile
        });
    }

    // Builds the main content area
    function bindActivityData() {
        var source = $("#activity-template").html();
        var template = Handlebars.compile(source);

        console.log("Loading activity.md markdown file...");

        function successfulyLoadedMarkdownFile(markdownData) {
            var activityData = metaMarked(markdownData);
            data.activity.activity = activityData.html;
            data.activity.meta = activityData.meta;

            console.log("Binding activity data...");
            console.log("meta", activityData.meta);

            document.title = "Activity: " + activityData.meta.title;

            $(".main").html(template(data));

            // Fix some CSS stuff because markdown can't handle paragraph classes

            $(".activity-instructions > p:nth-child(4)").addClass("lead");
            $(".activity-instructions > p:nth-child(5)").addClass("leadTime");
            $(".activity-instructions > hr + p").addClass("time");


            // All other data is only inserted after the succesful insertion of the main content area
            bindNavigationData();
            bindAsideData();
            bindFooterData();

        }

        $.ajax({
            url:  getPathForLocale("activity.md", null),
            type: 'get',
            dataType: 'html',
            success: successfulyLoadedMarkdownFile
        });

    }

    // Build the footer data
    function bindFooterData() {
        var source = $("#footer-template").html();
        var template = Handlebars.compile(source);

        console.log("Binding footer data...");

        $(".footer").html(template(data));
    }

    // Handlebar helpers
    Handlebars.registerHelper('competencyButton', function (competency) {

        var source = $("#competency-button-template").html();
        var template = Handlebars.compile(source);
        var data = {competency: competency};

        console.log("competency: ", competency);

        return template(data);
    });

    Handlebars.registerHelper('toLowerCase', function (str) {
        return str.toLowerCase();
    });

    Handlebars.registerHelper('selectIfCurrentLocale', function(str) {
        if (str == data.currentLocale) {
            return "selected";
        } else {
            return "";
        }
    });


    // Start the app.
    bindLocaleData();

}());