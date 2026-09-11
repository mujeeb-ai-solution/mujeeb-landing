/* MUJEEB REDESIGN — restrained interactions */

// scroll progress + navbar
(() => {
  const bar = document.getElementById('scrollProgress');
  const nav = document.getElementById('navbar');
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
    nav?.classList.toggle('scrolled', window.scrollY > 24);
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// mobile nav
(() => {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');
  toggle?.addEventListener('click', () => menu?.classList.toggle('open'));
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
})();

// reveal
(() => {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -35px 0px' });
  items.forEach(el => obs.observe(el));
})();

// smooth anchors
(() => {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 75;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

// counters
(() => {
  const counters = document.querySelectorAll('.counter');
  const locale = () => window.MujeebLang?.current === 'en' ? 'en-US' : 'ar-EG';
  const run = el => {
    const end = Number(el.dataset.target || 0);
    const start = performance.now();
    const dur = 1200;
    const step = now => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(end * eased).toLocaleString(locale());
      if (p < 1) requestAnimationFrame(step);
      else el.dataset.done = '1';
    };
    requestAnimationFrame(step);
  };
  const obs = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { run(e.target); obs.unobserve(e.target); }
  }), { threshold: .45 });
  counters.forEach(c => obs.observe(c));
  window.MujeebLang?.onChange(() => counters.forEach(el => {
    if (el.dataset.done === '1') el.textContent = Number(el.dataset.target || 0).toLocaleString(locale());
  }));
})();

// floating WhatsApp
(() => {
  const wa = document.getElementById('waFloat');
  const update = () => wa?.classList.toggle('visible', window.scrollY > 500);
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// Pricing toggle
(() => {
  const toggle = document.getElementById('billingToggle');
  const monthly = document.getElementById('monthlyLabel');
  const yearly = document.getElementById('yearlyLabel');
  if (!toggle) return;
  let isYearly = false;
  toggle.addEventListener('click', () => {
    isYearly = !isYearly;
    toggle.classList.toggle('active', isYearly);
    monthly?.classList.toggle('active', !isYearly);
    yearly?.classList.toggle('active', isYearly);
    document.querySelectorAll('.monthly-price').forEach(el => el.classList.toggle('hidden', isYearly));
    document.querySelectorAll('.yearly-price').forEach(el => el.classList.toggle('hidden', !isYearly));
  });
})();

// FAQ
(() => {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q?.addEventListener('click', () => {
      const willOpen = !item.classList.contains('open');
      items.forEach(other => {
        other.classList.remove('open');
        const oa = other.querySelector('.faq-a');
        if (oa) oa.style.maxHeight = null;
      });
      if (willOpen && a) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });
  window.MujeebLang?.onChange(() => {
    const open = document.querySelector('.faq-item.open .faq-a');
    if (open) open.style.maxHeight = open.scrollHeight + 'px';
  });
})();

// Live WhatsApp demo
(() => {
  const box = document.getElementById('waMessages');
  if (!box) return;
  const scenarios = {
    sales: [
      {from:'bot', ar:'أهلاً! كيف أقدر أساعدك اليوم؟', en:'Hi! How can I help you today?'},
      {from:'user', ar:'عندكم المنتج باللون الأسود؟', en:'Do you have the product in black?'},
      {from:'bot', ar:'نعم، متوفر حالياً. هل أرسل لك المقاسات والأسعار؟', en:'Yes, it is available. Want me to send sizes and prices?'},
      {from:'user', ar:'نعم لو سمحت', en:'Yes please'},
      {from:'bot', ar:'أكيد 👌 أرسلت لك الخيارات. أقدر أيضاً أسجل الطلب الآن إذا حبيت.', en:'Done 👌 I sent the options. I can also place the order now if you want.'}
    ],
    support: [
      {from:'bot', ar:'مرحباً، كيف أقدر أساعدك؟', en:'Hello, how can I help?'},
      {from:'user', ar:'طلبي تأخر، وين وصل؟', en:'My order is late. Where is it?'},
      {from:'bot', ar:'أرسل رقم الطلب وسأتحقق منه مباشرة.', en:'Send the order number and I will check it right away.'},
      {from:'user', ar:'#10482', en:'#10482'},
      {from:'bot', ar:'الطلب خرج للتوصيل وسيصل اليوم بين 4 و6 مساءً.', en:'It is out for delivery and should arrive today between 4 and 6 PM.'}
    ],
    booking: [
      {from:'bot', ar:'أهلاً 👋 هل تريد حجز موعد؟', en:'Hi 👋 Would you like to book an appointment?'},
      {from:'user', ar:'نعم، غداً بعد العصر', en:'Yes, tomorrow afternoon'},
      {from:'bot', ar:'متاح 4:30 أو 6:00. أي وقت يناسبك؟', en:'4:30 or 6:00 are available. Which works for you?'},
      {from:'user', ar:'4:30', en:'4:30'},
      {from:'bot', ar:'تم الحجز ✓ سأرسل لك التأكيد والتفاصيل الآن.', en:'Booked ✓ I will send your confirmation and details now.'}
    ]
  };
  let timers = [];
  let current = 'sales';
  const lang = () => window.MujeebLang?.current === 'en' ? 'en' : 'ar';
  const clear = () => { timers.forEach(clearTimeout); timers = []; box.querySelectorAll('.wa-msg,.wa-typing').forEach(n => n.remove()); };
  const add = (from, text) => {
    box.querySelector('.wa-typing')?.remove();
    const el = document.createElement('div');
    el.className = `wa-msg ${from}`;
    el.textContent = text;
    box.appendChild(el);
    box.scrollTop = box.scrollHeight;
  };
  const typing = () => {
    box.querySelector('.wa-typing')?.remove();
    const el = document.createElement('div');
    el.className = 'wa-typing'; el.innerHTML = '<i></i><i></i><i></i>';
    box.appendChild(el); box.scrollTop = box.scrollHeight;
  };
  const run = key => {
    clear(); current = key;
    let t = 350;
    scenarios[key].forEach((m, i) => {
      if (m.from === 'bot') { timers.push(setTimeout(typing, t)); t += 500; }
      timers.push(setTimeout(() => add(m.from, m[lang()]), t));
      t += i === 0 ? 1000 : 1200;
    });
    timers.push(setTimeout(() => run(key), t + 2600));
  };
  document.querySelectorAll('.scenario-btn').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.scenario-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    run(btn.dataset.scenario);
  }));
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { run(current); obs.disconnect(); }
  }, { threshold: .25 });
  obs.observe(document.getElementById('demo'));
  window.MujeebLang?.onChange(() => run(current));
})();

// Contact form — same Web3Forms pattern as the old page.
(() => {
  const form = document.getElementById('contactForm');
  const btn = document.getElementById('submitBtn');
  const text = document.getElementById('submitText');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  // Replace with your key from web3forms.com. Until then the form behaves as a visual demo.
  const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';
  const configured = WEB3FORMS_ACCESS_KEY && !WEB3FORMS_ACCESS_KEY.startsWith('YOUR_');

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = new FormData(form);
    if (!data.get('fullName')?.trim() || !data.get('phone')?.trim() || !data.get('email')?.trim()) return;
    btn.disabled = true;
    const original = text.textContent;
    text.textContent = window.MujeebLang?.current === 'en' ? 'Sending...' : 'جارٍ الإرسال...';

    if (configured) {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST', headers: {'Content-Type':'application/json', Accept:'application/json'},
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: 'New lead from Mujeeb',
            from_name: 'Mujeeb Website',
            name: data.get('fullName'), company: data.get('company') || '', phone: data.get('phone'),
            email: data.get('email'), service: data.get('service') || '', message: data.get('message') || ''
          })
        });
        const json = await res.json();
        if (!json.success) throw new Error(json.message || 'Submission failed');
      } catch (err) {
        btn.disabled = false; text.textContent = original; alert(window.MujeebLang?.current === 'en' ? 'Something went wrong. Please try again.' : 'حدث خطأ. حاول مرة أخرى.'); return;
      }
    }

    form.style.display = 'none';
    success?.classList.add('visible');
  });
})();
