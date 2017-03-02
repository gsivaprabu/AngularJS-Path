# Decorator Directives - The Link Function

- Add spacebar key event play/pause the video
- Preload is none not loaded automatically
- Add the poster
- Decorative Directive going to modify the existing element.
- link object have three parameters [scope,element,attribute]
- Find the key press even i body using jQuery

```javascript
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
```