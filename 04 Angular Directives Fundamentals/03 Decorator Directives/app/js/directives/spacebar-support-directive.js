app.directive('spacebarSupport', function() {
    return {
        restrict: 'A',
        link: function(scope, el, attrs) {

            console.info('scope', scope);
            console.warn('el', el);
            console.log('attrs', attrs);

            $('body').on('keypress', function(evt) {
                var videoElement = el[0];
                console.log('videoElement', videoElement);
                console.log('evt.keyCode', evt.keyCode);
                if (evt.keyCode === 32) {
                    if (videoElement.paused) {
                        videoElement.play();
                    } else {
                        videoElement.pause();
                    }
                }
            })
        }
    }
})


// Instead of returning an object in a directive, return a function

/*app.directive('spacebarSupport', function() {
    return function(scope, el, attrs) {

            console.info('scope', scope);
            console.warn('el', el);
            console.log('attrs', attrs);

            $('body').on('keypress', function(evt) {
                var videoElement = el[0];
                console.log('videoElement', videoElement);
                console.log('evt.keyCode', evt.keyCode);
                if (evt.keyCode === 32) {
                    if (videoElement.paused) {
                        videoElement.play();
                    } else {
                        videoElement.pause();
                    }
                }
            })
        }

})*/

