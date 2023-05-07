// (function () {
//   var body = document.querySelector("body");

//   var closesAttr = function (item, attr) {
//     var node = item;

//     while (node) {
//       var attrValue = node.getAttribute(attr);
//       if (attrValue) {
//         return attrValue;
//       }
//       node = node.parentElement;
//     }
//     return null;
//   };
//     while (node) {
//       var attrValue = node.getAttribute(attr);
//       if (attrValue) {
//         return attrValue;
//       }
//       node = node.parentElement;
//     }
//     return null;
//   };

//   var showPopup = function (target) {
//     target.classList.add("is-active");
//   };

//   var closePopup = function (target) {
//     target.classList.remove("is-active");
//   };

//   var toggleScroll = function () {
//     body.classList.toggle("no-scroll");
//   };

//   body.addEventListener("click", function (e) {
//     var target = e.target;
//     var popupCLass = closesAttr(target, "data-popup");

//     if (popupCLass === null) {
//       return;
//     }
//     e.preventDefault();
//     var popup = document.querySelector("." + popupCLass);

//     if (popup) {
//       showPopup(popup);
//       toggleScroll();
//     }
//   });
//   body.addEventListener("click", function (e) {
//     var target = e.target;

//     if (
//       target.classList.contains("popup-close") ||
//       target.classList.contains("popup__inner")
//     ) {
//       var popup = myLib.closestItemByClass(target, "popup");

//       closePopup(popup);
//       myLib.toggleScroll();
//     }
//   });

//   //   Что бы popup закрывался при нажатие на esc
//   body.addEventListener("keydown", function (e) {
//     if (e.keyCode !== 27) {
//       return;
//     }

//     var popup = document.querySelector(".popup.is-active");

//     if (popup) {
//       closePopup(popup);
//       toggleScroll();
//     }
//   });
// })();


;(function() {
  var showPopup = function(target) {
    target.classList.add('is-active');
  };

  var closePopup = function(target) {
    target.classList.remove('is-active');
  };

  myLib.body.addEventListener('click', function(e) {
    var target = e.target;
    var popupClass = myLib.closestAttr(target, 'data-popup');

    if (popupClass === null) {
      return;
    }

    e.preventDefault();
    var popup = document.querySelector('.' + popupClass);

    if (popup) {
      showPopup(popup);
      myLib.toggleScroll();
    }
  });

  myLib.body.addEventListener('click', function(e) {
    var target = e.target;

    if (target.classList.contains('popup-close') ||
        target.classList.contains('popup__inner')) {
          var popup = myLib.closestItemByClass(target, 'popup');

          closePopup(popup);
          myLib.toggleScroll();
    }
  });

  myLib.body.addEventListener('keydown', function(e) {
    if (e.keyCode !== 27) {
      return;
    }

    var popup = document.querySelector('.popup.is-active');

    if (popup) {
      closePopup(popup);
      myLib.toggleScroll();
    }
  });
})();