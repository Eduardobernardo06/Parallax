(function($){
    var contentWaypoint = function(){
        $('.element-animate').waypoint( function( direction ){
            console.log(direction);
            console.log(this);
            console.log(this.element);
            
            var $element = $(this.element);
            let effect = $element.data('animate-effect') || 'fadeInUp';
            
            
    
            
            if(direction === 'down' && !$element.hasClass('element-animated')){
               $element.remove('element-animate').addClass('element-animated ' + effect)
               }
        }, {
           offset: '90%'
        })
    }
    
    contentWaypoint()
})(jQuery)