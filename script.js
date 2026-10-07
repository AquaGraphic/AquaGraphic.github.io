/* ====== EDIT THESE ====== */
var WHATSAPP = "https://wa.me/201014200259"; // your number, country code first, digits only
var LINKS = {
  li: "https://www.linkedin.com/in/akram-elgamaal-b6287b441",
  ig: "https://www.instagram.com/eyesofaqua",
  be: "https://www.behance.net/akramelgamaal",
};
/* images: paths to the files in the images/ folder, relative to index.html */
var PROJECTS = [
  {
    t: "Self Harm Awareness Month\n(2nd post)",
    cat: "IFMSA-Egypt",
    c: "Continuing the campaign to put a spotlight on important statistics in Egypt and worldwide.",
    images: [
      "images/selfharm-2nd-post/01.jpg",
      "images/selfharm-2nd-post/02.jpg",
      "images/selfharm-2nd-post/03.jpg",
      "images/selfharm-2nd-post/04.jpg",
      "images/selfharm-2nd-post/05.jpg",
      "images/selfharm-2nd-post/06.jpg",
      "images/selfharm-2nd-post/07.jpg",
      "images/selfharm-2nd-post/08.jpg",
    ],
  },
  {
    t: "Self Harm Awareness Month\n(1st post)",
    cat: "IFMSA-Egypt",
    c: "In collaboration with SWG teammates, we researched some examples from Egyptian cinema to support our vision about such a concerning topic.",
    images: [
      "images/selfharm-1st-post/01.webp",
      "images/selfharm-1st-post/02.webp",
      "images/selfharm-1st-post/03.webp",
      "images/selfharm-1st-post/04.webp",
      "images/selfharm-1st-post/05.webp",
      "images/selfharm-1st-post/06.webp",
      "images/selfharm-1st-post/07.webp",
      "images/selfharm-1st-post/08.webp",
      "images/selfharm-1st-post/09.webp",
    ],
  },
  {
    t: "Shouman Summer Training 2026",
    cat: "MSSA-mansoura",
    c: "The most remarkable highlight of my career with MSSA-mansoura so far. A 13 single-paged-post campaign to engage members and trainees and encourage them to be part of the process and gain clinical experience. The campaign was appreciated and caught eyes.",
    images: [
      "images/shouman-summer-training-2026/01.webp",
      "images/shouman-summer-training-2026/02.webp",
      "images/shouman-summer-training-2026/03.webp",
      "images/shouman-summer-training-2026/04.webp",
      "images/shouman-summer-training-2026/05.webp",
      "images/shouman-summer-training-2026/06.webp",
      "images/shouman-summer-training-2026/07.webp",
      "images/shouman-summer-training-2026/08.webp",
      "images/shouman-summer-training-2026/09.webp",
      "images/shouman-summer-training-2026/10.webp",
      "images/shouman-summer-training-2026/11.webp",
      "images/shouman-summer-training-2026/12.webp",
    ],
  },
  {
    t: "Blood Donation day",
    cat: "MSSA-mansoura",
    c: "1 donation = up to 3 lives saved.",
    images: [
      "images/blood-donation-day/01.webp",
      "images/blood-donation-day/02.webp",
      "images/blood-donation-day/03.webp",
      "images/blood-donation-day/04.webp",
    ],
  },
  {
    t: "Zero Discrimination day",
    cat: "MSSA-mansoura",
    c: "Discrimination is one of the most concerning issues that the audience need to be oriented about.",
    images: [
      "images/zero-discrimination-day/01.webp",
      "images/zero-discrimination-day/02.webp",
      "images/zero-discrimination-day/03.webp",
      "images/zero-discrimination-day/04.webp",
      "images/zero-discrimination-day/05.webp",
      "images/zero-discrimination-day/06.webp",
    ],
  },
  {
    t: "Universal Health Coverage",
    cat: "MSSA-mansoura",
    c: "This is the third post of a very important campaign that was designed in collaboration with other highly skilled teammates.",
    images: [
      "images/universal-health-coverage/01.webp",
      "images/universal-health-coverage/02.webp",
      "images/universal-health-coverage/03.webp",
      "images/universal-health-coverage/04.webp",
      "images/universal-health-coverage/05.webp",
    ],
  },
  {
    t: "16 DoA against GBV (extra)",
    cat: "MSSA-mansoura",
    c: "Another post from the 16 Days of Activism campaign for MSSA-mansoura.",
    images: [
      "images/16doa-against-gbv-extra/01.webp",
      "images/16doa-against-gbv-extra/02.webp",
      "images/16doa-against-gbv-extra/03.webp",
      "images/16doa-against-gbv-extra/04.webp",
      "images/16doa-against-gbv-extra/05.webp",
    ],
  },
  {
    t: "16 DoA against GBV",
    cat: "MSSA-mansoura",
    c: "Aiming to increase awareness about GBV, I worked on a campaign to call for activism and this is its first post.",
    images: [
      "images/16doa-against-gbv/01.webp",
      "images/16doa-against-gbv/02.webp",
      "images/16doa-against-gbv/03.webp",
      "images/16doa-against-gbv/04.webp",
      "images/16doa-against-gbv/05.webp",
      "images/16doa-against-gbv/06.webp",
      "images/16doa-against-gbv/07.webp",
    ],
  },
  {
    t: "International Tolerance day",
    cat: "MSSA-mansoura",
    c: "My first project for MSSA-mansoura to celebrate the international day of tolerance on November 16th.",
    images: [
      "images/international-tolerance-day/01.webp",
      "images/international-tolerance-day/02.webp",
      "images/international-tolerance-day/03.webp",
      "images/international-tolerance-day/04.webp",
      "images/international-tolerance-day/05.webp",
      "images/international-tolerance-day/06.webp",
      "images/international-tolerance-day/07.webp",
    ],
  },
  {
    t: "Luna Dulces",
    cat: "Brand Identities",
    c: "Full brand identity for a Patisserie.",
    images: [
      "images/luna-dulces/01.png",
      "images/luna-dulces/02.png",
      "images/luna-dulces/03.png",
      "images/luna-dulces/04.png",
      "images/luna-dulces/05.png",
      "images/luna-dulces/06.png",
    ],
  },
];
/* ======================== */
var SLIDE_MS = 1000,
  RESUME_MS = 1400;

document.getElementById("wa").href = WHATSAPP;
document.getElementById("wa-nav").href = WHATSAPP;
["li", "ig", "be"].forEach(function(k) {
  document.getElementById(k).href = LINKS[k];
});

function placeholder(p, s) {
  var h = 195 + ((p * 23 + s * 31) % 40);
  var shapes = [
    "radial-gradient(circle at 70% 30%,rgba(255,255,255,.55) 0 14%,transparent 15%),",
    "repeating-linear-gradient(90deg,rgba(255,255,255,.18) 0 10px,transparent 10px 28px),",
    "radial-gradient(circle at 25% 75%,rgba(16,16,16,.55) 0 22%,transparent 23%),",
  ];
  return (
    shapes[(p + s) % 3] +
    "linear-gradient(" +
    (120 + s * 40) +
    "deg,hsl(" +
    h +
    ",85%,58%),hsl(" +
    (h - 30) +
    ",70%,16%))"
  );
}

var CATS = ["IFMSA-Egypt", "MSSA-mansoura", "Brand Identities"],
  grids = {};
var catsEl = document.getElementById("cats");
CATS.forEach(function(name) {
  var sec = document.createElement("section");
  sec.className = "cat" + (name === "Brand Identities" ? " wide" : "");
  sec.setAttribute("aria-label", name);
  sec.innerHTML =
    '<h3 class="cat-title"><span><span class="hl">' +
    name.slice(0, 2) +
    "</span>" +
    name.slice(2) +
    '</span></h3><div class="grid"></div>';
  catsEl.appendChild(sec);
  grids[name] = sec.querySelector(".grid");
});
PROJECTS.forEach(function(p, pi) {
  var n = p.images.length || 3;
  var card = document.createElement("article");
  card.className = "card glass";
  var slides = "",
    dots = "";
  for (var i = 0; i < n; i++) {
    slides += p.images.length
      ? '<div class="slide"><img src="' +
      p.images[i] +
      '" decoding="async" alt="' +
      p.t.replace(/\n/g, " ") +
      ", image " +
      (i + 1) +
      '"></div>'
      : '<div class="slide" role="img" aria-label="' +
      p.t +
      " placeholder " +
      (i + 1) +
      '" style="background:' +
      placeholder(pi, i) +
      '"></div>';
    dots +=
      '<button type="button" aria-label="Show slide ' +
      (i + 1) +
      '"' +
      (i === 0 ? ' aria-current="true"' : "") +
      "></button>";
  }
  card.innerHTML =
    '<div class="slider"><div class="track">' +
    slides +
    '</div><div class="dots">' +
    dots +
    "</div></div>" +
    '<div class="meta"><h3>' +
    p.t.replace(/\n/g, "<br>") +
    "</h3><p>" +
    p.c +
    "</p></div>";
  grids[p.cat].appendChild(card);
  initSlider(card.querySelector(".slider"), n, pi);
});

function initSlider(el, n) {
  var track = el.querySelector(".track"),
    dots = el.querySelectorAll(".dots button");
  var idx = 0,
    hover = false,
    center = false,
    focus = false,
    paused = false,
    timer = null,
    resumeT = null,
    startX = 0;
  function go(i) {
    idx = (i + n) % n;
    track.style.transform = "translateX(" + -idx * 100 + "%)";
    dots.forEach(function(d, k) {
      if (k === idx) d.setAttribute("aria-current", "true");
      else d.removeAttribute("aria-current");
    });
  }
  /* shows slide 1 at rest; advances one slide per second only while the visitor is on this project */
  function sync() {
    var near = hover || center || focus;
    var on = near && !paused && !document.hidden;
    if (on && !timer) {
      timer = setInterval(function() {
        go(idx + 1);
      }, SLIDE_MS);
    }
    if (!on && timer) {
      clearInterval(timer);
      timer = null;
    }
    if (!near && idx !== 0) {
      go(0);
    }
  }
  function release() {
    clearTimeout(resumeT);
    resumeT = setTimeout(function() {
      paused = false;
      sync();
    }, RESUME_MS);
  }
  el.addEventListener("pointerenter", function(e) {
    if (e.pointerType === "mouse" || e.pointerType === "pen") {
      hover = true;
      sync();
    }
  });
  el.addEventListener("pointerleave", function(e) {
    if (e.pointerType === "mouse" || e.pointerType === "pen") {
      hover = false;
      sync();
    }
  });
  el.addEventListener("focusin", function() {
    focus = true;
    sync();
  });
  el.addEventListener("focusout", function() {
    focus = false;
    sync();
  });
  el.addEventListener("pointerdown", function(e) {
    startX = e.clientX;
    paused = true;
    clearTimeout(resumeT);
    sync();
  });
  el.addEventListener("pointerup", function(e) {
    var dx = e.clientX - startX;
    if (Math.abs(dx) > 35) {
      go(idx + (dx < 0 ? 1 : -1));
    }
    release();
  });
  el.addEventListener("pointercancel", release);
  dots.forEach(function(d, k) {
    d.addEventListener("click", function() {
      go(k);
      paused = true;
      release();
      sync();
    });
  });
  document.addEventListener("visibilitychange", sync);
  /* touch screens have no hover: a project that rests in the middle of the screen counts as "stopped on" */
  if (
    window.matchMedia("(hover: none)").matches &&
    "IntersectionObserver" in window
  ) {
    new IntersectionObserver(
      function(entries) {
        center = entries[0].isIntersecting;
        sync();
      },
      { rootMargin: "-38% 0px -38% 0px", threshold: 0 },
    ).observe(el);
  }
}
