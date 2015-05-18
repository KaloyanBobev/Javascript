'use srtict';
newspaperApp.controller('ContactsController', 
    function ContactsController($scope) {
       
    
        var myOptions = { 
            zoom: 16,
            center: new google.maps.LatLng(42.4182142, 25.615609500000005),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }; 
        $scope.map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
        $scope.marker = new google.maps.Marker({ 
            map: map,
            position: new google.maps.LatLng(42.4182142, 25.615609500000005)
        }); 
       var infowindow = new google.maps.InfoWindow({ content: "<b>&#1053;&#1040;&#1056;&#1054;&#1044;&#1053;&#1054; &#1063;&#1048;&#1058;&#1040;&#1051;&#1048;&#1065;&#1045; &bdquo;&#1044;&#1040;&#1057;&#1050;&#1040;&#1051; &#1055;&#1045;&#1058;&#1066;&#1056; &#1048;&#1042;&#1040;&#1053;&#1054;&#1042;&rdquo;</b><br/> &#1059;&#1083;.&rdquo;&#1061;&#1088;&#1080;&#1089;&#1090;&#1086; &#1041;&#1086;&#1090;&#1077;&#1074;&rdquo; 4 <br/>6000 &#1057;&#1090;&#1072;&#1088;&#1072; &#1047;&#1072;&#1075;&#1086;&#1088;&#1072;" });
        google.maps.event.addListener(marker, "click", function () {
            infowindow.open(map, marker);
        });
        infowindow.open(map, marker);
    
    google.maps.event.addDomListener(window, 'load', init_map);

});
   
       