function pageCtrl($scope) {
    $scope.navs = [
        {
            "name": "Base",
            "link": "/simple/base.html"
        },
        {
            "name": "Typography",
            "link": "/simple/typography.html"
        },
        {
            "name": "Grids",
            "link": "/simple/grids.html"
        },
        {
            "name": "Buttons",
            "link": "/simple/buttons.html"
        },
        {
            "name": "Menus",
            "link": "/simple/menus.html"
        },
        {
            "name": "Icons",
            "link": "/simple/icons.html"
        },
        {
            "name": "Carousel",
            "link": "/simple/carousel.html"
        },
        {
            "name": "Compass",
            "link": "/simple/compass.html"
        }
    ];
    $scope.about = {
        "headline": "Simple",
        "describe": "A set of small, responsive CSS modules that you can use in every web project."
    };
    $scope.base = {
        "headline": "Base",
        "describe": "Leveraging Normalize.css, an HTML5-ready alternative to CSS resets."
    };
    $scope.Typography = {
        "headline": "Typography",
        "describe": "Global CSS settings, fundamental HTML elements styled and enhanced with extensible classes."
    };
    $scope.Grids = {
        "headline": "Grids",
        "describe": "Global CSS settings, fundamental HTML elements styled and enhanced with extensible classes."
    };
    $scope.Buttons = {
        "headline": "Buttons",
        "describe": "Global CSS settings, fundamental HTML elements styled and enhanced with extensible classes."
    };
    $scope.Menus = {
        "headline": "Menus",
        "describe": "Global CSS settings, fundamental HTML elements styled and enhanced with extensible classes."
    };
    $scope.Icons = {
        "headline": "Icons",
        "describe": "Global CSS settings, fundamental HTML elements styled and enhanced with extensible classes."
    };




    $scope.logo = {
        "name": "Simple Css",
        "link": "/simple/about.html"
    };

    $scope.footer = '@ 2013 AKQA SH TECHNOLOGY';
}