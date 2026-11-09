/* DIVAS - destaque animado Black Friday. Adicione este script antes de </body> no index.html. */
(() => {
  if (document.getElementById('divas-black-friday')) return;
  const style = document.createElement('style');
  style.textContent = `
  @keyframes bfGlow {0%,100%{text-shadow:0 0 8px #e8c5ff,0 0 22px #b66cff}50%{text-shadow:0 0 16px #fff,0 0 38px #d49aff,0 0 58px #9d52d1}}
  @keyframes bfPulse {0%,100%{transform:scale(1)}50%{transform:scale(1.055)}}
  @keyframes bfShine {0%{transform:translateX(-160%) rotate(18deg)}100%{transform:translateX(260%) rotate(18deg)}}
  @keyframes bfFloat {0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
  @keyframes bfTwinkle {0%,100%{opacity:.28;filter:brightness(.8);transform:scale(.82)}50%{opacity:1;filter:brightness(1.5);transform:scale(1.18)}}
  #divas-black-friday{position:relative;isolation:isolate;overflow:hidden;margin:0 auto 38px;padding:clamp(28px,5vw,54px) 22px;border-radius:26px;text-align:center;color:#fff;background:radial-gradient(circle at 15% 20%,#74439a 0,transparent 34%),radial-gradient(circle at 90% 85%,#9b5ac1 0,transparent 32%),linear-gradient(125deg,#160f20,#321844 55%,#171020);box-shadow:0 20px 55px #3b1d5540,0 0 0 3px #a96de633,0 0 24px #c78bff55;border:1px solid #dcb4ff99}
  #divas-black-friday:before{content:'';position:absolute;z-index:-1;inset:-40%;width:35%;background:linear-gradient(90deg,transparent,#ffffff26,transparent);animation:bfShine 5s ease-in-out infinite}
  #divas-black-friday .bf-lights{position:absolute;inset:9px;pointer-events:none;border-radius:19px;z-index:1}
  #divas-black-friday .bf-lights i{position:absolute;width:8px;height:8px;border-radius:50%;background:#f5dfff;box-shadow:0 0 7px 2px #e7baff,0 0 15px 4px #ad65e8;animation:bfTwinkle 1.8s ease-in-out infinite}
  #divas-black-friday .bf-lights i:nth-child(1){left:5%;top:0;animation-delay:0s}
  #divas-black-friday .bf-lights i:nth-child(2){left:25%;top:0;animation-delay:.35s}
  #divas-black-friday .bf-lights i:nth-child(3){left:50%;top:0;animation-delay:.7s}
  #divas-black-friday .bf-lights i:nth-child(4){right:5%;top:0;animation-delay:1.05s}
  #divas-black-friday .bf-lights i:nth-child(5){right:0;top:35%;animation-delay:.5s}
  #divas-black-friday .bf-lights i:nth-child(6){right:0;bottom:15%;animation-delay:1.2s}
  #divas-black-friday .bf-lights i:nth-child(7){left:5%;bottom:0;animation-delay:.85s}
  #divas-black-friday .bf-lights i:nth-child(8){left:0;top:60%;animation-delay:1.4s}
  #divas-black-friday .bf-spark{position:absolute;color:#f5dfff;font-size:22px;opacity:.75;animation:bfFloat 2.8s ease-in-out infinite}
  #divas-black-friday .bf-spark.one{left:8%;top:17%}#divas-black-friday .bf-spark.two{right:9%;top:22%;animation-delay:.7s}#divas-black-friday .bf-spark.three{left:15%;bottom:14%;animation-delay:1.2s}
  #divas-black-friday .bf-kicker{display:inline-block;padding:8px 15px;border:1px solid #f0d7ff99;border-radius:999px;background:#ffffff12;color:#f4ddff;font-size:11px;font-weight:800;letter-spacing:3px}
  #divas-black-friday h2{margin:17px 0 5px;color:#fff;font:700 clamp(34px,6vw,62px)/1.05 'Playfair Display',serif;letter-spacing:1px;animation:bfGlow 2.4s ease-in-out infinite}
  #divas-black-friday .bf-service{margin:8px 0 0;color:#f6eaff;font-size:clamp(17px,3vw,23px);font-weight:700;letter-spacing:1px}
  #divas-black-friday .bf-price{display:inline-block;margin:16px 0 10px;color:#f2d2ff;font-size:clamp(52px,9vw,82px);font-weight:800;line-height:1;animation:bfPulse 2s ease-in-out infinite}
  #divas-black-friday .bf-gift{max-width:520px;margin:4px auto 22px;padding:13px 18px;border:1px solid #f2d8ff70;border-radius:16px;background:linear-gradient(100deg,#ffffff1b,#c78bff2b);color:#fff;font-size:clamp(16px,2.5vw,21px);font-weight:800}
  #divas-black-friday .bf-gift small{display:block;margin-top:4px;color:#f1dfff;font-size:12px;font-weight:500}
  #divas-black-friday .bf-button{display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:14px 24px;border-radius:999px;background:linear-gradient(135deg,#f9edff,#d9b1f3);color:#45245f;font-weight:800;box-shadow:0 10px 28px #08030d55;transition:transform .2s,box-shadow .2s}
  #divas-black-friday .bf-button:hover{transform:translateY(-3px);box-shadow:0 14px 34px #08030d77}
  #divas-black-friday .bf-foot{margin:14px 0 0;color:#e7d2f3;font-size:11px}
  @media(prefers-reduced-motion:reduce){#divas-black-friday *,#divas-black-friday:before{animation:none!important;transition:none!important}}
  `;
  document.head.appendChild(style);
  const banner = document.createElement('section');
  banner.id = 'divas-black-friday';
  banner.setAttribute('aria-label','Oferta Black Friday DIVAS');
  banner.innerHTML = `<span class="bf-lights" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><span class="bf-spark one" aria-hidden="true">✦</span><span class="bf-spark two" aria-hidden="true">✧</span><span class="bf-spark three" aria-hidden="true">✦</span><div class="bf-kicker">✦ OFERTA ESPECIAL DIVAS ✦</div><h2>BLACK FRIDAY</h2><div class="bf-service">ESCOVA DE BOTOX</div><div class="bf-price">R$ 69,00</div><div class="bf-gift">🎁 GANHE HIDRATAÇÃO LABIAL!<small>Um mimo especial para completar seu momento de beleza.</small></div><a class="bf-button" target="_blank" rel="noopener" href="https://wa.me/5551991749541?text=Ol%C3%A1%2C%20DIVAS!%20Quero%20aproveitar%20a%20Black%20Friday%3A%20Escova%20de%20Botox%20por%20R%24%2069%2C00%20com%20hidrata%C3%A7%C3%A3o%20labial%20gr%C3%A1tis.%20Como%20fa%C3%A7o%20para%20agendar%3F">QUERO APROVEITAR ↗</a><p class="bf-foot">Consulte disponibilidade e agende pelo WhatsApp.</p>`;
  const hero = document.querySelector('.hero');
  if (hero) hero.insertAdjacentElement('afterend', banner);
  else document.querySelector('main')?.prepend(banner);
})();
