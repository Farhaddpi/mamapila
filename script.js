/* ---------- Bilingual content (one site, switch with the EN / فارسی buttons) ---------- */
const I18N = {
  en: {
    tb1:"Authentic Persian Taste, Made with Love in Canada", tb2:"Toronto · Ontario · Canada",
    nHome:"Home", nStory:"Our Story", nProd:"Products", nWhy:"Why Mama Pila", nGal:"Gallery", nOrder:"Order", nContact:"Contact",
    hEye:"A Taste of Grandma’s Kitchen", hH1:"<span>A Taste of</span><br>Grandma’s Kitchen",
    hLead:"Authentic Persian recipes made with the finest ingredients, proudly crafted in Canada with modern quality standards.",
    hB1:"Our Story", hB2:"Discover Products", hBadge:"NEW<br><strong>FROZEN</strong><br>FRESH",
    p1t:"Natural Ingredients", p1s:"No preservatives", p2t:"High in Protein", p2s:"Good for you",
    p3t:"Frozen Fresh", p3s:"Lock in freshness", p4t:"Grandma’s Recipe", p4s:"Authentic taste",
    p5t:"Made in Canada", p5s:"Toronto, Ontario", p6t:"Quality Control", p6s:"Every step matters",
    sEye:"Our Story", sH2:"A Legacy of Love &amp; Flavor", sH3:"Where Mama Pila Began",
    sP1:"Mama Pila began with a simple yet meaningful memory — one that many immigrants know well.",
    sP2:"Years ago, we started a new chapter of our lives in Canada. Like many newcomers, our days quickly became filled with work, responsibilities, and busy schedules. Amid all the hustle, the thing we missed most was the comfort of homemade food and the taste of our mothers’ cooking.",
    sP3:"Every summer, when our mothers came to visit, they would leave us with a special gift before returning home: freezer bags filled with homemade kotlets, lovingly prepared in our kitchens.",
    sP4:"After they left, those kotlets became more than just a meal. On long, exhausting workdays, all it took was a few minutes in a pan or air fryer to fill our homes with the aroma of comfort, family, and cherished memories.",
    sP5:"One day, we asked ourselves: why not share this feeling with others?",
    sSign:"With love,<br><b>Marjan &amp; Sepideh</b>",
    prEye:"Our Product", prH2:"Persian Kotlet",
    prSlogan:"Made with love · Women-owned business · No preservatives",
    prDesc:"Tender ground beef blended with potato, egg, herbs and Persian spices. Uncooked, frozen, and ready for your kitchen.",
    prF1n:"9", prF1l:"Pieces", prF2n:"400g", prF2l:"Net Weight", prF3n:"0", prF3l:"Preservatives",
    prCook:"Cooking", prC1:"Pan fry until golden and fully cooked.", prC2:"Air fry for a lighter, quicker meal.", prC3:"Keep frozen until ready to cook.",
    vEye:"Real Product Videos", vH2:"From Freezer to Table",
    gEye:"Gallery", gH2:"From Our Kitchen",
    oEye:"Order", oH2:"Order Mama Pila",
    oP:"To order our products — retail, wholesale, events or corporate — please get in touch. We would love to feed your family and your guests.",
    oCall:"Call 647 832 7100", oWa:"WhatsApp", oNote:"Retail · Wholesale · Events · Corporate",
    cEye:"Coming Soon", cH2:"More Persian Homemade Favorites",
    cP:"Our vision is to grow Mama Pila into a home for authentic Persian homemade foods across Canada.",
    mEye:"Find Us", mH2:"Visit Our Kitchen", mName:"Mama Pila", mAddr:"102 Crockford Blvd, Unit #4<br>Toronto, ON", mDir:"Get Directions",
    fOrderH:"Order &amp; Inquiries", fPhone:"647 832 7100", fAddrH:"Address", fAddr:"102 Crockford Blvd, Unit #4<br>Toronto, ON",
    fFollowH:"Follow Us", fTag:"From Our Family To Yours ❤️",
    title:"Mama Pila | Persian Kotlet Toronto"
  },
  fa: {
    tb1:"طعم اصیل ایرانی، با عشق در کانادا", tb2:"تورنتو · انتاریو · کانادا",
    nHome:"خانه", nStory:"داستان ما", nProd:"محصولات", nWhy:"چرا ماما پیلا", nGal:"گالری", nOrder:"سفارش", nContact:"تماس با ما",
    hEye:"طعم اصیل آشپزخانه‌ی مادربزرگ", hH1:"<span>طعمی از</span><br>آشپزخانه‌ی مادربزرگ",
    hLead:"دستورهای اصیل ایرانی، تهیه‌شده با بهترین مواد اولیه، با افتخار در کانادا و با استانداردهای روز دنیا تولید می‌شود.",
    hB1:"داستان ما", hB2:"مشاهده‌ی محصولات", hBadge:"جدید<br><strong>منجمد</strong><br>تازه",
    p1t:"مواد اولیه‌ی طبیعی", p1s:"بدون مواد نگهدارنده", p2t:"پروتئین بالا", p2s:"مفید برای شما",
    p3t:"منجمد و تازه", p3s:"حفظ تازگی", p4t:"دستور مادربزرگ", p4s:"طعم اصیل",
    p5t:"ساخت کانادا", p5s:"تورنتو، انتاریو", p6t:"کنترل کیفیت", p6s:"در هر مرحله",
    sEye:"داستان ما", sH2:"میراثی از عشق و طعم", sH3:"ماما پیلا از کجا شروع شد",
    sP1:"ماما پیلا از یک خاطره‌ی ساده اما ارزشمند شروع شد؛ خاطره‌ای که بسیاری از مهاجران با آن آشنا هستند.",
    sP2:"سال‌ها پیش، ما زندگی جدیدمان را در کانادا آغاز کردیم. مثل خیلی از خانواده‌های مهاجر، روزهایمان پر از کار، مسئولیت و مشغله بود. در میان تمام این شلوغی‌ها، چیزی که همیشه دلتنگش می‌شدیم طعم غذاهای خانگی و دستپخت مادر بود.",
    sP3:"هر تابستان که مادرانمان به دیدن ما می‌آمدند، قبل از بازگشتشان به ایران یک رسم همیشگی داشتند؛ چندین بسته کتلت خانگی درست می‌کردند، با عشق داخل فریزر می‌گذاشتند و می‌رفتند.",
    sP4:"بعد از رفتنشان، هر بار که خسته از سر کار به خانه برمی‌گشتیم، کافی بود چند دقیقه کتلت‌ها را در تابه یا ایرفرایر گرم کنیم تا عطر و طعم خانه در آشپزخانه بپیچد.",
    sP5:"همان روزها بود که با خودمان فکر کردیم: چرا این حس خوب را با دیگران به اشتراک نگذاریم؟",
    sSign:"با عشق،<br><b>مرجان و سپیده</b>",
    prEye:"محصول ما", prH2:"کتلت ایرانی",
    prSlogan:"با عشق مامان · کسب‌وکار متعلق به زنان · بدون نگهدارنده",
    prDesc:"گوشت چرخ‌کرده‌ی لطیف، ترکیب‌شده با سیب‌زمینی، تخم‌مرغ، سبزیجات و ادویه‌های ایرانی. خام، منجمد و آماده برای آشپزخانه‌ی شما.",
    prF1n:"۹", prF1l:"عدد", prF2n:"۴۰۰ گرم", prF2l:"وزن خالص", prF3n:"۰", prF3l:"نگهدارنده",
    prCook:"طرز تهیه", prC1:"در تابه سرخ کنید تا طلایی و کاملاً پخته شود.", prC2:"برای وعده‌ای سبک‌تر در ایرفرایر بپزید.", prC3:"تا زمان پخت در فریزر نگه دارید.",
    vEye:"ویدیوهای واقعی محصول", vH2:"از فریزر تا سفره",
    gEye:"گالری", gH2:"از آشپزخانه‌ی ما",
    oEye:"سفارش", oH2:"سفارش ماما پیلا",
    oP:"برای سفارش محصولات ما — به‌صورت تکی، عمده، برای ایونت‌ها و سفارش‌های شرکتی — با ما در تماس باشید. با افتخار میزبان خانواده و مهمان‌های شما هستیم.",
    oCall:"تماس: ۶۴۷ ۸۳۲ ۷۱۰۰", oWa:"واتساپ", oNote:"تکی · عمده · ایونت · شرکتی",
    cEye:"به‌زودی", cH2:"غذاهای خانگی ایرانی بیشتر",
    cP:"رؤیای ما این است که ماما پیلا را به خانه‌ای برای غذاهای خانگی و اصیل ایرانی در سراسر کانادا تبدیل کنیم.",
    mEye:"ما را پیدا کنید", mH2:"از آشپزخانه‌ی ما دیدن کنید", mName:"ماما پیلا", mAddr:"۱۰۲ کراکفورد بلوار، واحد ۴<br>تورنتو، انتاریو", mDir:"مسیریابی",
    fOrderH:"سفارش و سؤالات", fPhone:"۶۴۷ ۸۳۲ ۷۱۰۰", fAddrH:"آدرس", fAddr:"۱۰۲ کراکفورد بلوار، واحد ۴<br>تورنتو، انتاریو",
    fFollowH:"ما را دنبال کنید", fTag:"از خانواده‌ی ما به خانواده‌ی شما ❤️",
    title:"ماما پیلا | کتلت ایرانی تورنتو"
  }
};

function setLang(lang){
  if(lang!=='fa') lang='en';
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang==='fa' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const v = dict[el.getAttribute('data-i18n')];
    if(v!=null) el.innerHTML = v;
  });
  document.title = dict.title;
  document.querySelectorAll('.lang').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
  try{ localStorage.setItem('mp_lang', lang); }catch(e){}
}

(function initLang(){
  let lang='en';
  try{
    const p=new URLSearchParams(location.search).get('lang');
    lang = p || localStorage.getItem('mp_lang') || 'en';
  }catch(e){}
  setLang(lang);
  document.querySelectorAll('.lang').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
})();

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* ---------- Branded placeholder if an image asset is missing ---------- */
function brandedPlaceholder(){
  const svg = "<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#1a3b29'/><stop offset='1' stop-color='#081f15'/></linearGradient></defs><rect width='800' height='600' fill='url(#g)'/><rect x='18' y='18' width='764' height='564' fill='none' stroke='#d4a24b' stroke-width='3' rx='24'/><text x='400' y='312' fill='#ffd89c' font-family='Georgia,serif' font-size='54' font-weight='700' text-anchor='middle'>Mama Pila</text></svg>";
  return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
}
document.querySelectorAll('img').forEach(img=>{
  img.addEventListener('error',()=>{ if(img.dataset.fb) return; img.dataset.fb='1'; img.src=brandedPlaceholder(); },{once:true});
});
document.querySelectorAll('video').forEach(v=>{ v.addEventListener('error',()=>v.classList.add('media-missing')); });
