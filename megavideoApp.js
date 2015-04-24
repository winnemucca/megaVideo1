angular.module('megaVideoDemo', []).
	directive('megaVideo', function($sce) {
		return {
			restrict: 'E',
			templateUrl: 'mega-video.html',
			scope: true,

			link: function(scope, element, attrs) {
				// jquery find
				var videoPlayer = element.find('video')[0];
				// setting scope variable
				scope.sources = [];
				function processSources(){
					var sourceTypes = {
						webm: { type: 'video/webm'},
						mp4: { type: 'video/mp4'},
						ogg: { type: 'video/ogg'}
					}
					// for in loop for objects
					for (source in sourceTypes) {
						if (attrs.hasOwnProperty(source)) {
							scope.sources.push(
								{ type: sourceTypes[source].type, 
								  src: $sce.trustAsResourceUrl(attrs[source])
								}
							);

						}
					}
					
				}
				// looks for white listed source types in the elements attribute
				processSources();
				scope.video =  {
					
					play: function() {
						console.log(videoPlayer);
						videoPlayer.play();
						scope.video.status = 'play';

					},
					pause: function() {
						console.log('pause 1');
						videoPlayer.pause();
						scope.video.status = 'pause';
					},
					stop: function() {
						console.log('pause')
						videoPlayer.pause();
						videoPlayer.currentTime = 0;
						scope.video.status = 'stop'
                    },
                    togglePlay: function() {
                    	
                        scope.video.status == 'play' 
                        	? scope.video.pause() : scope.video.play();
                    },
                	width: attrs.width,
                	height: attrs.height
                };
			},

        }
    });
