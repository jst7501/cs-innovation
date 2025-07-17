/* temhafull2-N1 */
(function() {
  $(function() {
    $(".temhafull2-N1[id=\'phmD6kxSBx\']").each(function() {
      const $block = $(this);
      let isMobileMenuInitialized = false;
      let isDesktopMenuInitialized = false;
      // 모바일 메뉴 초기화
      function initMobileMenu() {
        if (isMobileMenuInitialized) return;
        const $btnMomenu = $block.find(".btn-momenu");
        $btnMomenu.off("click").on("click", function() {
          if ($block.hasClass("block-active")) {
            $block.removeClass("block-active");
          } else {
            $block.addClass("block-active");
          }
          $block.find(".header-gnbitem").removeClass("item-active");
          $block.find(".header-sublist").removeAttr("style");
        });
        // header-gnbitem 클릭 이벤트
        $block.find(".header-gnbitem").each(function() {
          const $this = $(this);
          const $thisLink = $this.find(".header-gnblink");
          const $sublist = $this.find(".header-sublist");
          if ($sublist.length) {
            $thisLink.off("click").on("click", function(event) {
              event.preventDefault();
              const $clickedItem = $(this).parents(".header-gnbitem");
              if (!$clickedItem.hasClass("item-active")) {
                $block.find(".header-gnbitem").removeClass("item-active");
                $block.find(".header-sublist").stop().slideUp(300);
              }
              $clickedItem.toggleClass("item-active");
              $sublist.stop().slideToggle(300);
            });
          }
        });
        isMobileMenuInitialized = true;
      }
      // 데스크탑 메뉴 초기화
      function initDesktopMenu() {
        if (isDesktopMenuInitialized) return;
        $block.find(".header-gnbitem").each(function() {
          const $this = $(this);
          const $thisLink = $this.find(".header-gnblink");
          $thisLink.off("click");
        });
        isDesktopMenuInitialized = true;
      }
      // 해상도에 따른 메뉴 처리
      function handleResize() {
        if (window.innerWidth <= 992) {
          if (!isMobileMenuInitialized) {
            initMobileMenu();
          }
          isDesktopMenuInitialized = false;
        } else {
          if (!isDesktopMenuInitialized) {
            initDesktopMenu();
          }
          isMobileMenuInitialized = false;
        }
      }
      // 스크롤 시 메뉴 처리
      function handleScroll() {
        $(window).scroll(function() {
          if ($(window).scrollTop() > 0) {
            $block.addClass("header-top-active");
          } else {
            $block.removeClass("header-top-active");
          }
        });
      }
      handleScroll();
      // 전체 메뉴 열기/닫기 처리
      function handleFullMenu() {
        $block.find(".btn-allmenu").on("click", function() {
          $block.find(".header-fullmenu").addClass("fullmenu-active");
        });
        $block.find(".fullmenu-close").on("click", function() {
          $block.find(".header-fullmenu").removeClass("fullmenu-active");
        });
        $block.find(".fullmenu-gnbitem").each(function() {
          const $this = $(this);
          $this.on("mouseover", function() {
            if (window.innerWidth > 992) {
              $this.find(".fullmenu-gnblink").addClass("on");
            }
          });
          $this.on("mouseout", function() {
            if (window.innerWidth > 992) {
              $this.find(".fullmenu-gnblink").removeClass("on");
            }
          });
        });
      }
      handleFullMenu();
      // 리사이즈 시마다 메뉴 동작 초기화
      $(window).on("resize", function() {
        handleResize();
      });
      handleResize();
    });
  });
})();
/* temhafull2-N2 */
(function() {
  $(function() {
    $(".temhafull2-N2[id=\'ACMD6kXttM\']").each(function() {
      const $block = $(this);
      $block.find(".contents-next-btn").on("click", function() {
        const nextBlock = $block.next();
        if (nextBlock.length) {
          $("html, body").animate({
            scrollTop: nextBlock.offset().top
          }, 600);
        }
      });
    });
  });
})();
/* temhafull2-N3 */
(function() {
  $(function() {
    $(".temhafull2-N3[id=\'aAMD6kXTYp\']").each(function() {
      const $block = $(this);
      // Swiper
      const swiper = new Swiper(".temhafull2-N3[id=\'aAMD6kXTYp\'] .contents-swiper", {
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 0,
        parallax: true,
        effect: "fade",
        loop: true,
        fadeEffect: {
          crossFade: true,
        },
        navigation: {
          nextEl: ".temhafull2-N3[id=\'aAMD6kXTYp\'] .swiper-button-next",
          prevEl: ".temhafull2-N3[id=\'aAMD6kXTYp\'] .swiper-button-prev",
        },
        pagination: {
          el: ".temhafull2-N3[id=\'aAMD6kXTYp\'] .swiper-pagination",
          clickable: true,
          type: "bullets",
        },
      });
    });
  });
})();
/* temhafull2-N4 */
(function() {
  $(function() {
    $(".temhafull2-N4[id=\'Yzmd6Kxu60\']").each(function() {
      const $block = $(this);
      // Swiper
      const swiper = new Swiper(".temhafull2-N4[id=\'Yzmd6Kxu60\'] .contents-swiper", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 0,
        pagination: {
          el: ".temhafull2-N4[id=\'Yzmd6Kxu60\'] .swiper-pagination",
          clickable: true,
          type: "bullets",
        },
      });
    });
  });
})();
/* temhafull2-N5 */
(function() {
  $(function() {
    $(".temhafull2-N5[id=\'HjMD6kxUgn\']").each(function() {
      const $block = $(this);
      // Swiper
      const swiper = new Swiper(".temhafull2-N5[id=\'HjMD6kxUgn\'] .contents-swiper", {
        slidesPerView: "auto",
        // loop: true,    
        spaceBetween: 0,
        speed: 600,
        freeMode: true,
      });
    });
  });
})();
/* temhafull2-N7 */
(function() {
  $(function() {
    $(".temhafull2-N7[id=\'UOMD6Kxuw7\']").each(function() {
      const $block = $(this);
      // Images List
      $block.find(".contents-list").each(function() {
        const $contentsList = $(this);
        const $contentsItems = $contentsList.children(".contents-item");
        const itemCount = $contentsItems.length;
        // Images Loop
        for (let i = itemCount - 1; i >= 0; i--) {
          $contentsList.prepend($contentsItems.eq(i).clone());
        }
        for (let i = 0; i < itemCount; i++) {
          $contentsList.append($contentsItems.eq(i).clone());
        }
        const itemWidth = $contentsItems.outerWidth(true);
        $contentsList.css("width", itemWidth * itemCount * 3);
        let currentPos = -itemWidth * itemCount;
        $contentsList.css("transform", `translateX(${currentPos}px)`);
        // Images Animation
        function animate() {
          currentPos -= 1;
          if (currentPos <= -itemWidth * itemCount * 2) {
            currentPos = -itemWidth * itemCount;
          }
          $contentsList.css("transform", `translateX(${currentPos}px)`);
          requestAnimationFrame(animate);
        }
        animate();
      });
    });
  });
})();
