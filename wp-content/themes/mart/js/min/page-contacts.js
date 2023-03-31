(function () {


    var animationElements = querySelectorAsArray('.onload-animation');
    var onloadAnimationStep = 150;
    window.pageOnLoadAnimationCallback = function () {
        animateElements(animationElements, onloadAnimationStep);
    };
    window.pageOnLoadAnimationTimeout = (animationElements.length + 1) * onloadAnimationStep;




    window.initMap = function () {

        var mapStyles = [
            {
                stylers: [
                    { hue: "#1dbdcf" },
                    { saturation: -60 },
                    { lightness: -20 },
                    { gamma: 1.51 }
                ]
            }
        ];
        var styledMapType = new google.maps.StyledMapType(mapStyles, {name: "Styled Map"});


        var point = {lat: 46.417654, lng: 30.719374};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: point,
            mapTypeControl: false,
            streetViewControl: false
        });

        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');

        var image = {
            url: document.querySelector('base').href + 'wp-content/themes/mart/images/page-contacts/pin.png',
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(44, 57),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(22, 57)
        };

        var marker = new google.maps.Marker({
            icon: image,
            position: point,
            map: map
        });
    };
    var googleMapsAPI = document.createElement('script');
    googleMapsAPI.type = 'text/javascript';
    googleMapsAPI.defer = true;
    googleMapsAPI.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDSeDWWPyfeBds4adrm-x2ucW5o6JuR5lo&callback=initMap';
    document.body.appendChild(googleMapsAPI);

})();



