(function () {
  const EN = {
    'nav.home': 'Home',
    'nav.demo': 'Live Demo',
    'nav.problem': 'The Problem',
    'nav.solution': 'Why Us',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'cta.start': 'Get Started',

    'hero.badge': 'Your smart assistant on WhatsApp and your digital channels',
    'hero.title': 'Automate conversations<br />that grow <span class="gradient-text">your business</span>',
    'hero.sub': 'Mujeeb helps you reply, book, and follow up with customers automatically — from the first question to an order or booking.',
    'hero.ctaDemo': 'See the Demo',
    'hero.ctaForm': 'Book Your Session',
    'hero.p1': 'Built for your business.',
    'hero.p2': 'Prepared for Arabic.',
    'hero.p3': 'Supervised by your team.',

    'demo.tag': 'Live Demo',
    'demo.title': 'See <span class="gradient-text">Mujeeb</span> in action',
    'demo.sub': 'This live example shows how Mujeeb helps with replies, qualification, and booking. The idea is simple: the customer asks, and Mujeeb follows up quickly and clearly until the next action is completed.',
    'demo.st1': 'Average reply time',
    'demo.st2': 'Always available',
    'demo.st3': 'Arabic + dialects',
    'demo.try': 'Try a scenario:',
    'demo.sales': 'Sales',
    'demo.support': 'Support',
    'demo.booking': 'Booking',
    'demo.waname': 'Mujeeb — Business Assistant',
    'demo.online': 'Online now',
    'demo.today': 'Today',
    'demo.type': 'Type a message...',

    'problem.tag': 'The Problem',
    'problem.title': 'Customers do not wait. A late reply = <span class="gradient-text">a lost deal</span>.',
    'problem.sub': 'Most customers expect a reply within minutes. When you are late, they go straight to your competitor — after-hours messages, repeated questions, and unanswered bookings mean opportunities slip away every day.',
    'problem.hl': '5 <span>minutes</span>',
    'problem.hlp': 'Your response window before you lose the customer',
    'problem.v3': '5 minutes',
    'problem.p1': 'Messages never stop, even after the store closes.',
    'problem.p2': 'of customers deal with whoever replies first.',
    'problem.p3': 'After that, the chance of conversion drops sharply.',

    'solution.tag': 'The Solution',
    'solution.title': 'Why <span class="gradient-text">Mujeeb</span>?',
    'solution.sub': 'A small, clear summary of Mujeeb’s value: faster replies, a better Arabic experience, and your team staying in control of important conversations.',
    'solution.i1.t': 'Arabic done right',
    'solution.i1.p': 'It handles Arabic clearly and supports a tone that fits your business.',
    'solution.i2.t': 'Fast replies and follow-up',
    'solution.i2.p': 'From the first question to the order or booking, the customer keeps moving without delay.',
    'solution.i3.t': 'With your team in control',
    'solution.i3.p': 'Whenever a conversation needs human judgment, it is smoothly handed over to your team.',

    'pricing.tag': 'Pricing',
    'pricing.title': 'Clear plans for <span class="gradient-text">different stages</span>',
    'pricing.sub': '3 plans, clear features, with both monthly and yearly billing.',
    'pricing.monthly': 'Monthly',
    'pricing.yearly': 'Yearly <b>Save 20%</b>',
    'pricing.tag1': 'For startups',
    'pricing.tag2': 'For growing businesses',
    'pricing.tag3': 'For enterprises and larger teams',
    'pricing.mo': '/mo',
    'pricing.d1': 'A practical way to start with Mujeeb.',
    'pricing.d2': 'For broader automation of replies, follow-up, and booking.',
    'pricing.d3': 'A flexible setup with wider integrations and more oversight.',
    'pricing.custom': 'Custom pricing',
    'pricing.popular': 'Most Popular',
    'pricing.cta1': 'Start Now',
    'pricing.cta2': 'Book a Demo',
    'pricing.cta3': 'Talk to Our Team',

    'pf.0': 'One chatbot',
    'pf.1': 'Up to 1,000 conversations / month',
    'pf.2': 'WhatsApp or website integration',
    'pf.3': 'Basic analytics dashboard',
    'pf.7': 'Up to 3 chatbots',
    'pf.8': 'Up to 10,000 conversations / month',
    'pf.9': 'WhatsApp + Instagram + website',
    'pf.12': 'Advanced analytics dashboard',
    'pf.14': 'Unlimited chatbots',
    'pf.16': 'ERP / SAP / Odoo integration',
    'pf.17': 'Advanced workflow automation',
    'pf.20': 'Dedicated account manager',

    'faq.tag': 'FAQ',
    'faq.title': 'Everything you need to <span class="gradient-text">know</span>',
    'faq.sub': 'Short and clear answers before you get started.',
    'faq.q1': 'How long does launching the bot take?',
    'faq.a1': 'From discovery to launch, it usually takes 10–14 business days depending on the project complexity.',
    'faq.q2': 'Does the bot understand local Arabic dialects?',
    'faq.a2': 'Yes, and it understands context, not just keywords.',
    'faq.q3': 'Which platforms does it work on?',
    'faq.a3': 'WhatsApp and your website, and it can be prepared for other digital channels depending on your needs.',
    'faq.q4': 'Do I need technical experience?',
    'faq.a4': 'No. We handle setup, training, and integration for you.',
    'faq.q5': 'What if the bot does not know the answer?',
    'faq.a5': 'It hands the conversation to your team with the full context.',

    'contact.title': 'Ready to transform <span class="gradient-text">your business</span>?',
    'contact.sub': 'Book a short session. We understand what you want to automate and suggest a practical starting point.',
    'contact.k1': 'A free, no-obligation consultation',
    'contact.k2': 'A solution map tailored to your business',
    'contact.k3': 'A reply within 24 business hours',

    'form.name': 'Full name *',
    'form.phone': 'Phone number *',
    'form.company': 'Company name',
    'form.email': 'Email *',
    'form.service': 'Requested service',
    'form.msg': 'Tell us about your biggest challenge',
    'form.namePh': 'Mohammad Al-Omari',
    'form.companyPh': 'Your company',
    'form.msgPh': 'What would you like to automate?',
    'form.opt0': 'Choose a service...',
    'form.opt1': 'Chatbot',
    'form.opt2': 'Workflow automation',
    'form.opt3': 'System integration',
    'form.opt4': 'End-to-end solution',
    'form.submit': 'Book your free session',
    'form.note': 'By submitting the form, you agree that we may contact you via WhatsApp or email.',
    'form.successT': 'Your request has been sent successfully!',
    'form.successP': 'Our team will contact you within 24 business hours.',

    'footer.brand': 'We help Arabic businesses automate conversations, customer service, and bookings with more clarity and speed.',
    'footer.product': 'Product',
    'footer.direct': 'Direct Contact',
    'footer.wa': 'Chat with us on WhatsApp',
    'footer.rights': '© 2026 Mujeeb. All rights reserved.',

    'meta.title': 'Mujeeb — Smart assistant for WhatsApp and your digital channels'
  };

  const AR_TITLE = document.title;
  const STORAGE_KEY = 'mujeeb_lang';
  const listeners = [];

  function apply(lang) {
    const en = lang === 'en';
    const root = document.documentElement;
    root.lang = lang;
    root.dir = en ? 'ltr' : 'rtl';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (el._ar == null) el._ar = el.textContent;
      el.textContent = en && EN[k] != null ? EN[k] : el._ar;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const k = el.getAttribute('data-i18n-html');
      if (el._arHtml == null) el._arHtml = el.innerHTML;
      el.innerHTML = en && EN[k] != null ? EN[k] : el._arHtml;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const k = el.getAttribute('data-i18n-ph');
      if (el._arPh == null) el._arPh = el.getAttribute('placeholder') || '';
      el.setAttribute('placeholder', en && EN[k] != null ? EN[k] : el._arPh);
    });

    document.title = en ? EN['meta.title'] : AR_TITLE;
    document.querySelectorAll('.lang-toggle-text').forEach(t => { t.textContent = en ? 'العربية' : 'EN'; });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    listeners.forEach(fn => { try { fn(lang); } catch (e) {} });
  }

  function current() {
    try { return localStorage.getItem(STORAGE_KEY) || 'ar'; } catch (e) { return 'ar'; }
  }

  window.MujeebLang = {
    get current() { return document.documentElement.lang === 'en' ? 'en' : 'ar'; },
    t: function (key) { return this.current === 'en' && EN[key] != null ? EN[key] : null; },
    onChange: function (fn) { if (typeof fn === 'function') listeners.push(fn); },
    set: function (lang) { apply(lang); }
  };

  function init() {
    apply(current());
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        apply(document.documentElement.lang === 'en' ? 'ar' : 'en');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
