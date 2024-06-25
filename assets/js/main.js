// ◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️スクロールオブサーバー◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️
// Work画像（.img-cover）
document.addEventListener('DOMContentLoaded', function () {
  const cb = function (el, isIntersecting) {
      if(isIntersecting) {
          el.classList.add("inview");
      }
  }
  const so = new ScrollObserver('.img-cover', cb);
});

// skill ライン（.skill__line）
document.addEventListener('DOMContentLoaded', function () {
  const cb = function (el, isIntersecting) {
      if(isIntersecting) {
          el.classList.add("inview");
      }
  }
  const so = new ScrollObserver('.title__line', cb);
});

// .strengths 中身（.strengths__cnt）
document.addEventListener('DOMContentLoaded', function () {
  const cb = function (el, isIntersecting) {
      if(isIntersecting) {
          el.classList.add("inview");
      }
  }
  const so = new ScrollObserver('.strengths__cnt', cb);
});

// ブラーアニメーション（.js__blur）
document.addEventListener('DOMContentLoaded', function () {
  const cb = function (el, isIntersecting) {
      if(isIntersecting) {
          el.classList.add("inview");
      }
  }
  const so = new ScrollObserver('.js__blur', cb);
});

// フェードインアニメーション（.js__fadein）
document.addEventListener('DOMContentLoaded', function () {
  const cb = function (el, isIntersecting) {
      if(isIntersecting) {
          el.classList.add("inview");
      }
  }
  const so = new ScrollObserver('.js__fadein', cb);
});

// MOTOKAWANAOアニメーション（.line span）
document.addEventListener('DOMContentLoaded', function () {
  const cb = function (el, isIntersecting) {
      if(isIntersecting) {
          el.classList.add("inview");
      }
  }
  const so = new ScrollObserver('.line span', cb);
});





// ◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️画面切替◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️
const target = document.querySelectorAll('.section__bg')
const targetArray = Array.prototype.slice.call(target);

const options = {
  root: null,
  rootMargin: '0px 0px',
  threshold: .2
};

const observer = new IntersectionObserver(callback, options)
targetArray.forEach((targets) => {
  observer.observe(targets)
});

function callback(active) {
  active.forEach(function(entry, i) {
    const target = entry.target;
    if (entry.isIntersecting && !target.classList.contains('is-active')) {
      const delay = i * 100
      setTimeout(function(){
        target.classList.add('is-active');
      },delay);
      observer.unobserve(target);
    }
  });
};


// ◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️Aboutブラー◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️

  document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.about-text, .about-img, .about-title');

    function handleScroll() {
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add('visible');
        }
      });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初回チェック
  });




// ◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️マウスカーソル◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️
    let cursorR = 4;  //カーソルの半径
    const cursor = document.getElementById('cursor');  //カーソル用のdivを取得
    const stalker = document.getElementById('stalker'); //ストーカー用のdivを取得

    //マウスに追従させる処理
    document.addEventListener('mousemove', function (e) {
        stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
        cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    });

    //aタグにホバー中かどうかの判別フラグ
    let hovFlag = false;

//aタグにホバーしたときに、ストーカーにクラスを追加
const linkElem = document.querySelectorAll('a');
for (let i = 0; i < linkElem.length; i++) {
    linkElem[i].addEventListener('mouseover', function (e) {
        hovFlag = true;

        // work-list__item内のaタグの場合
        if (this.closest('.work-list__item')) {
            stalker.classList.add('work-item-hover');
        } else {
            // それ以外のaタグの場合
            stalker.classList.add('hov_');
        }
    });

    linkElem[i].addEventListener('mouseout', function (e) {
        hovFlag = false;
        
        // work-list__item内のaタグの場合
        if (this.closest('.work-list__item')) {
            stalker.classList.remove('work-item-hover');
        } else {
            // それ以外のaタグの場合
            stalker.classList.remove('hov_');
        }
    });
}


// ◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️ハンバーガーメニュー◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️
const trigger = document.querySelector(".trigger");
const body = document.querySelector("body");

// ハンバーガーボタンがクリックされたときの処理
trigger.addEventListener("click", () => {
  body.classList.toggle("open");
});

// メニュー内のリンクがクリックされたときの処理
const gnavItems = document.querySelectorAll(".gnav__item a");
gnavItems.forEach(item => {
  item.addEventListener("click", () => {
    body.classList.remove("open");
  });
});



// ◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️3Dガラス◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️
// 複数の .strengths__item 要素を取得
const strengthsItems = document.querySelectorAll(".strengths__item");

// 各要素に対して VanillaTilt を適用
strengthsItems.forEach(item => {
  VanillaTilt.init(item, {
    max: 25,
    speed: 400
  });
});



// ◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️パララックス◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️
document.addEventListener('DOMContentLoaded', function() {
  const profile = document.querySelector('.profile');
  const footer = document.querySelector('.footer');
  const windowHeight = window.innerHeight;

  // 初期状態ではfooterを非表示にする
  footer.style.display = 'none';

  window.addEventListener('scroll', function() {
      const scrollAmount = window.scrollY;

      // スクロールバーが上半分の場合
      if (scrollAmount < windowHeight / 2) {
          // .profileを表示し、.footerを非表示にする
          profile.style.display = 'block';
          footer.style.display = 'none';
      }
      // スクロールバーが下半分の場合
      else {
          // .profileを非表示にする
          profile.style.display = 'none';

          // 画面が最上部になる直前に.profileを再表示する
          if (scrollAmount < windowHeight) {
              profile.style.display = 'block';
          } else {
              // .footerを表示する
              footer.style.display = 'block';
          }
      }
  });
});


// ◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️ローディング◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️





// ◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️ ScrollRevealアニメーション (ふわっと出る)◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️
ScrollReveal({ reset: false, distance: "60px" });

// Workトップ
ScrollReveal().reveal('.site-img', {
  delay: 700,
  origin: "top",
  duration: 2000,
  beforeReveal: function (el) {
      el.style.visibility = 'visible';
  }
});
ScrollReveal().reveal('.site-mockup', {
  delay: 1200,
  origin: "right",
  duration: 2000,
  beforeReveal: function (el) {
      el.style.visibility = 'visible';
  }
});
// Video トップ
ScrollReveal().reveal('.work-video .work-top__wrap h3, .work-video .work-top__wrap p', {
  delay: 200,
  origin: "left",
  duration: 2000,
  beforeReveal: function (el) {
      el.style.visibility = 'visible';
  }
});
ScrollReveal().reveal('.video-mockup', {
  delay: 700,
  origin: "bottom",
  duration: 2000,
  beforeReveal: function (el) {
      el.style.visibility = 'visible';
  }
});


