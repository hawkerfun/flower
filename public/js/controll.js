const acction = function(){
  //$('.js-intro-continue')[0].click();
  require(['main_desktop_extended'], function(main_desktop_extended){
    main_desktop_extended.start();
    console.log(main_desktop_extended);
    //console.log(main_desktop_extended.transitioner.viewMap);
  });

  console.log('Happend');

};

setTimeout(acction, 2000);


//view/scene/flower_view
//view/common/base_flow_view
