import gsap from "gsap";

const defaultChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function scrambleHoverAnimation(event) {
  const target = event.target.firstElementChild;
  if (!gsap.isTweening(target)) {
    gsap.to(target, {
      duration: 0.8,
      ease: "sine.in",
      scrambleText: {
        text: target.innerText,
        speed: 2,
        chars: defaultChars,
      },
    });
  }
}

export function scrambleAnimation(target, text, speed, chars) {
  if (!gsap.isTweening(target)) {
    gsap.to(target, {
      duration: 0.8,
      ease: "sine.in",
      scrambleText: {
        text,
        speed,
        chars: chars ? chars : defaultChars,
      },
    });
  }
}
