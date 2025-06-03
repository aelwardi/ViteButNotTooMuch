import gsap from 'gsap';

export function runGsapAnimations() {
  const mm = gsap.matchMedia();

  function homeScrollNavbar() {
    const nav = document.querySelector(".navbar");
    const currentScroll = window.pageYOffset;
    if (currentScroll > 10) {
      nav?.classList.add("scrolled");
      document.querySelector(".navbar-brand")!.setAttribute("style", "filter: invert(0)");
    } else {
      nav?.classList.remove("scrolled");
      document.querySelector(".navbar-brand")!.setAttribute("style", "filter: invert(1)");
    }
  }

  history.scrollRestoration = "manual";

  window.onload = () => {
    mm.add("(min-width: 2560px)", () => {
      gsap.fromTo(".foreground-image", { scale: 5, opacity: 0 }, {
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
        duration: 0.6,
        ease: "power2.out"
      });
    });

    function addAnimation(mm: gsap.MatchMedia, maxWidth: number, scaleX = 1, scaleY = 1, scale = 1) {
      mm.add(`(max-width: ${maxWidth}px)`, () => {
        gsap.fromTo(".foreground-image", { scale: 5, opacity: 0 }, {
          opacity: 1,
          scaleX,
          scaleY,
          scale,
          duration: 0.6,
          ease: "power2.out"
        });
      });
    }

    addAnimation(mm, 2560, 1.1, 1, 1);
    addAnimation(mm, 1890, 1.2, 1);
    addAnimation(mm, 1680, 1.4, 1, 1.1);
    addAnimation(mm, 1440, 1, 1, 1);
    addAnimation(mm, 1360, 1, 1, 1);
    addAnimation(mm, 905, 1);
    addAnimation(mm, 599, 1, 1.3);
    addAnimation(mm, 450, 1, 1);
    addAnimation(mm, 350, 1, 1.22);
  };
  gsap.fromTo(
    ".bottom-section-wrapper",
    { bottom: "-10rem" },
    {
      bottom: "3.5rem",
      duration: 1,
      ease: "power2.out",
      onComplete() {
        afterPageLoadAnimation();
      },
    }
  );

  gsap.fromTo(
    ".background-image",
    { scale: 1 },
    { scale: 1.1, duration: 1, ease: "power2.out" }
  );

  function afterPageLoadAnimation() {
    let scrollAnimation = true;
    document.body.style.overflow = "auto";
    // add scroll listener to the window
    window.addEventListener("scroll", () => {
      scrollAnimation && startScrollAnimation();
      scrollAnimation = false;
    });
  }
  function startScrollAnimation() {
    window.removeEventListener("scroll", () => {
      startScrollAnimation();
    });
    (document.querySelector("header") as HTMLElement | null)?.style.setProperty("opacity", "0");
    document.body.style.overflow = "hidden";

    mm.add("(min-width: 600px)", () => {
      gsap.to(".foreground-image", {
        scaleY: 100,
        scaleX: 135,
        opacity: 0,
        duration: 1,
        //delay: 1,
        ease: "power2.in",
      });
    });

    mm.add("(max-width: 599px)", () => {
      gsap.to(".foreground-image", {
        scale: 100,
        opacity: 0,
        translateY: "1000%",
        duration: 1,
        //delay: 1,
        ease: "power2.in",
      });
    });
    // disable window scroll

    gsap.to(".background-image", {
      scale: 1,
      duration: 1.5,
      delay: 0.5,
      ease: "power2.in",
      onComplete() {
        document.body.style.overflow = "auto";
      },
    });
    gsap.to(".bottom-section-wrapper .left-sub, .right-sub", {
      color: "#BABFBF",
      delay: 0.5,
      duration: 1,
      ease: "power2.out",
      onComplete() {
        const navbar = document.querySelector(".navbar") as HTMLElement | null;
        const navbarBrand = document.querySelector(".navbar-brand") as HTMLElement | null;
        const header = document.querySelector("header") as HTMLElement | null;

        navbar?.classList.remove("secondary");
        navbar?.classList.add("primary");

        navbarBrand?.style.setProperty("filter", "invert(1)");
        header?.style.setProperty("opacity", "1");
      },
    });
    gsap.to(".bottom-section-wrapper .h3", {
      color: "rgba(255, 255, 255, 1)",
      delay: 0.5,
      duration: 1,
      ease: "power2.out",
      onComplete() {
        mm.add("(min-width: 600px)", () => {
          gsap.to(".middle-section", {
            duration: 1,
            delay: 0.6,
            top: "35%",
            opacity: 1,
            ease: "power2.out",
          });
        });
        mm.add("(max-width: 599px)", () => {
          gsap.to(".middle-section", {
            duration: 1,
            delay: 0.6,
            top: "55%",
            opacity: 1,
            ease: "power2.out",
          });
        });
        gsap.to(".bottom-section-wrapper", {
          bottom: "-10rem",
          opacity: 0,
          delay: 0.5,
          duration: 1,
          ease: "power2.out",
          onComplete() {
            gsap.to(".foreground-image", { display: "none" });
            gsap.to(".bottom-section-wrapper", {
              display: "none",
            });
            gsap.to(".gradient-box", {
              duration: 0.2,
              opacity: 1,
              ease: "power2.out",
            });
            // gsap.fromTo(
            //   ".vertical-line",
            //   {
            //     opacity: 0,
            //   },
            //   {
            //     duration: 0.2,
            //     opacity: 1,
            //     ease: "power2.out",
            //   }
            // );
            // gsap.to( ".highlight-box", {
            //   duration: 0.2,
            //   translateY: "-161px",
            //   opacity: 1,
            //   ease: "power2.out",
            // } );
            gsap.to(".navbar-brand", {
              // filter: "invert(0)",
              ease: "power2.out",
            });

            window.addEventListener("scroll", () => {
              homeScrollNavbar();
            });
          },
        });
      },
    });
  }
}

const scroller = document.querySelectorAll(".scroller-text");
scroller.forEach((list) => {
  const scrollerElement = list as HTMLElement;
  const scrollerInner = scrollerElement.innerHTML.trim();
  let scrollerArray = scrollerInner.split("<br>");
  let scrollerAmt = scrollerArray.length;

  if (scrollerAmt == 7) {
    scrollerElement.style.animation = "slide-7 16s infinite reverse forwards";
  } else if (scrollerAmt == 6) {
    scrollerElement.style.animation = "slide-6 14s infinite reverse forwards";
  } else if (scrollerAmt == 5) {
    scrollerElement.style.animation = "slide-5 12s infinite reverse forwards";
  } else if (scrollerAmt == 4) {
    scrollerElement.style.animation = "slide-4 10s infinite reverse forwards";
  } else if (scrollerAmt == 3) {
    scrollerElement.style.animation = "slide-3 8s infinite reverse forwards";
  } else if (scrollerAmt == 2) {
    scrollerElement.style.animation = "slide-2 5s infinite reverse forwards";
  }
});

const screenWidth = window.innerWidth;

if (screenWidth < 600) {
  document.querySelector(".desktop-bg")?.remove();
} else {
  document.querySelector(".mobile-bg")?.remove();
}
