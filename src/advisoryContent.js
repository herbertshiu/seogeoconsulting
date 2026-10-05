export const advisoryPaths = {
  en: '/advisory',
  zh: '/zh/advisory',
};

export const advisoryMeta = {
  en: {
    title: 'Advisory note: SEO and GEO issues for any company size — SEO / GEO Consulting',
    description: 'Six SEO and GEO issues that block discovery and citation for small, mid-size, and larger companies, plus a sequence you can run this month.',
    locale: 'en_HK',
    htmlLang: 'en-HK',
  },
  zh: {
    title: '諮詢備忘：任何規模的公司都面對的 SEO 與 GEO 問題 — SEO / GEO Consulting',
    description: '六個會擋住搜尋與 AI 引用的 SEO / GEO 問題。小型、中型與較大公司的標準相同，運作節奏不同，並附上本月可執行的順序。',
    locale: 'zh_HK',
    htmlLang: 'zh-Hant-HK',
  },
};

export const advisoryUi = {
  en: {
    kicker: 'FIELD GUIDE / 03',
    h1: 'Advisory',
    h1Accent: 'note.',
    lede: 'The standard does not change with headcount. A clear entity, pages that answer, proof a third party can cite, and URLs that can be retrieved. What changes is the order of operations.',
    updated: 'LAST UPDATED · 5 OCTOBER 2026',
    byline: 'SEO / GEO Consulting · Hong Kong',
    langLabel: 'Language',
    tocTitle: 'IN THIS NOTE',
    monthTitle: 'Do this month',
    monthLead: 'Five steps a small team can finish, and a larger team can run as a governance check. Do them before you publish anything new.',
    faqTitle: 'Questions teams actually ask',
    sourcesTitle: 'Primary sources',
    sourcesLead: 'Thresholds and definitions below come from these documents. A tactic is not a requirement until the primary source says it is.',
    limitsTitle: 'What this note is not',
    limits: 'This is an advisory note, not an audit and not a promise of rankings or citations. Core Web Vitals figures are the published thresholds. The scaled-content wording is quoted from Google’s spam policies. Citation reporting refers to Bing Webmaster Tools’ AI Performance documentation. Check the primary source, then apply the sequence to your own analytics.',
    cta: 'Request a 30-minute audit',
    playbook: 'Read the playbook',
    authority: 'Score your authority',
    restOfSite: 'The rest of this site is in English.',
    quoteNote: '',
  },
  zh: {
    kicker: '現場指南 / 03',
    h1: '諮詢',
    h1Accent: '備忘。',
    lede: '標準不隨人數改變。清楚的實體、能回答問題的頁面、第三方可以引用的證明，以及能夠被擷取的網址。會改變的是做事的順序。',
    updated: '最後更新 · 2026年10月5日',
    byline: 'SEO / GEO Consulting · 香港',
    langLabel: '語言',
    tocTitle: '本備忘目錄',
    monthTitle: '本月就做',
    monthLead: '這五步，小型團隊做得出來，較大團隊可以把它當成治理檢查。先做完，再考慮發布新頁。',
    faqTitle: '團隊真正會問的問題',
    sourcesTitle: '原始來源',
    sourcesLead: '下面的門檻和定義來自這些文件。原始來源沒有把它說成要求之前，某項做法就不是要求。',
    limitsTitle: '這份備忘不是什麼',
    limits: '這是一份諮詢備忘，不是審計，也不保證排名或引用。Core Web Vitals 的數字是已公布的門檻。規模化內容濫用的字句引自 Google 的垃圾內容政策。引用報告指的是 Bing Webmaster Tools 的 AI Performance 文件。先核對原始來源，再把這個順序用到你自己的數據上。',
    cta: '預約 30 分鐘審計',
    playbook: '閱讀手冊',
    authority: '檢視權威指標',
    restOfSite: '本網站其餘頁面目前為英文。',
    quoteNote: '（中文為本站譯文，不是 Google 的官方翻譯）',
  },
};

export const audiences = [
  { n: '01', title: { en: 'Small teams', zh: '小型團隊' }, text: { en: 'One site, a handful of offers.', zh: '一個網站、少數服務。' } },
  { n: '02', title: { en: 'Mid-size teams', zh: '中型團隊' }, text: { en: 'Several products or markets.', zh: '多個產品或市場。' } },
  { n: '03', title: { en: 'Larger organisations', zh: '較大機構' }, text: { en: 'Many sites, agencies, or markets.', zh: '多個網站、代理商或市場。' } },
];

export const issues = [
  {
    id: 'entity',
    n: '01',
    toc: { en: 'Entity', zh: '實體' },
    title: { en: 'The entity splits across languages', zh: '實體在兩種語言裡裂開' },
    lead: {
      en: 'If the two languages describe different businesses, search systems cannot tell you are one organisation.',
      zh: '如果兩種語言描述的是不同生意，搜尋系統就無法判斷你是同一家機構。',
    },
    paragraphs: [
      {
        en: 'The failure is specific. The English site says “digital transformation partner.” The Chinese site says “foreign-trade exhibition organiser.” The legal name, the trading name, the city, and the category then disagree across the about page, the footer, LinkedIn, and structured data. Search uses the visible facts — name, category, address, language — to decide which entity a page belongs to. When those facts diverge, you become two organisations that do not corroborate each other.',
        zh: '裂口通常很具體。英文站寫「數碼轉型夥伴」，中文站寫「外貿展覽主辦機構」。法定名稱、商用名稱、城市和類別，接著在關於頁、頁尾、LinkedIn 和結構化資料裡各說各話。搜尋靠看得到的事實——名稱、類別、地址、語言——判斷這個頁面屬於哪個實體。這些事實一分岔，你就變成兩家互相證明不了的機構。',
      },
      {
        en: 'Pick one category, one primary geography, and one name pair: the English name and the Chinese name. Repeat that pair in titles, the about page, the footer, public profiles, and schema.org name plus alternateName. Translate the explanation of the category. Do not translate the company into a different business. The organisation name on both versions of this site stays SEO / GEO Consulting. The interface language changes. The entity does not.',
        zh: '選定一個類別、一個主要地理範圍，以及一組名稱：英文名稱和中文名稱。在標題、關於頁、頁尾、對外檔案，以及 schema.org 的 name 與 alternateName 重複這一組。翻譯的是類別的說明，不是把公司譯成另一門生意。本站兩個語言版本的機構名稱都是 SEO / GEO Consulting。改變的是介面語言，不是實體。',
      },
      {
        en: 'Practical test: search the English name and the Chinese name separately. If the category or the city disagrees, the entity is already split. Fix that sentence before you commission more pages.',
        zh: '實務測試：分別搜尋英文名稱和中文名稱。如果類別或城市對不上，實體就已經裂開。先改好這一句，再委託更多頁面。',
      },
    ],
  },
  {
    id: 'answer',
    n: '02',
    toc: { en: 'Answer', zh: '答案' },
    title: { en: 'Priority pages open with a slogan', zh: '優先頁面用口號開場' },
    lead: {
      en: 'The first screen has to do the job of the page. A slogan does not.',
      zh: '第一屏就得完成這一頁的工作。口號做不到。',
    },
    paragraphs: [
      {
        en: '“We are a leading provider of innovative solutions” gives a buyer nothing to judge and gives an answer engine nothing to quote without inventing your point. On every page that is supposed to earn a customer, use the first 50 to 80 words to name who it is for, which problem it addresses, and what the reader can do next. Then add a definition, a comparison, and proof. Busy people read that opening. Retrieval systems lift it.',
        zh: '「我們是領先的創新方案供應商」讓買家無從判斷，也讓答案引擎在引用時不得不替你發明重點。每個應該帶來客戶的頁面，請用首 50 至 80 字說明給誰、處理什麼問題、讀者下一步可以做什麼。然後才加上定義、比較和證明。忙碌的人讀的是這一段。檢索系統抬走的也是這一段。',
      },
    ],
    contrast: [
      {
        label: { en: 'Weak opening', zh: '無力的開場' },
        text: { en: 'Welcome to our innovative logistics platform.', zh: '歡迎來到我們的創新物流平台。' },
      },
      {
        label: { en: 'Useful opening', zh: '有用的開場' },
        text: {
          en: 'A Hong Kong importer comparing warehouse partners needs three facts first: which districts you cover, how Mainland cross-border orders are handled, and which proof a buyer can check.',
          zh: '香港進口商在比較倉庫夥伴時，首先需要三項事實：你覆蓋哪些地區、內地跨境訂單如何處理，以及買家可以核對哪一項證明。',
        },
      },
    ],
  },
  {
    id: 'proof',
    n: '03',
    toc: { en: 'Proof', zh: '證明' },
    title: { en: 'Volume without first-hand proof', zh: '只有產量，沒有第一手證明' },
    lead: {
      en: 'Drafting with a model is not the failure. Publishing interchangeable pages, at scale, is.',
      zh: '用模型起草不是問題。問題是大量發布可以互換的頁面。',
    },
    paragraphs: [
      {
        en: 'Google’s spam policies define scaled content abuse in one sentence: many pages generated for the primary purpose of manipulating rankings, not helping users, no matter how they are created. The examples include generative AI used to produce many pages without adding value for users. The same policy introduction covers attempts to manipulate generative AI responses in Google Search. Chasing citations with a pile of generic pages is the same mistake as chasing rankings with one.',
        zh: 'Google 的垃圾內容政策用一句話界定規模化內容濫用：大量頁面的主要目的是操控排名而不是幫助使用者，不論這些頁面是怎樣產生的。例子包括使用生成式 AI 生產大量對使用者沒有附加價值的頁面。同一份政策的開端也涵蓋試圖操控 Google 搜尋中的生成式 AI 回應。用一堆空泛頁面追逐引用，和用一堆空泛頁面追逐排名，是同一個錯誤。',
      },
      {
        en: 'A passage any competitor could publish will not be the one an answer engine needs to attribute to you. Add a method, a date, a named source, a constraint, or a detail only your team would know. Where a reader would reasonably ask how the page was made, say what was automated and what a person checked. If you cannot add that detail, do not publish the URL. Fewer complete pages beat a calendar of near-duplicates.',
        zh: '任何競爭對手都能發布的段落，答案引擎不需要把它歸給你。補上方法、日期、具名來源、限制，或只有你的團隊才知道的細節。如果讀者合理會問這頁是怎樣做成的，就說明哪些是自動化、哪些經人核對。加不上這些細節，就不要發布該網址。少數完整的頁面，勝過一份近乎重複的內容日曆。',
      },
    ],
    quote: {
      en: 'Scaled content abuse is when many pages are generated for the primary purpose of manipulating search rankings and not helping users. This abusive practice is typically focused on creating large amounts of unoriginal content that provides little to no value to users, no matter how it\'s created.',
      zh: '規模化內容濫用，是指大量頁面的主要目的在於操控搜尋排名，而不是幫助使用者。這種濫用通常是製造大量缺乏原創、對使用者幾乎沒有價值的內容，不論這些內容是怎樣產生的。',
      cite: { en: 'Google Search Central, Spam policies', zh: 'Google Search Central，垃圾內容政策' },
    },
  },
  {
    id: 'retrieve',
    n: '04',
    toc: { en: 'Retrieval', zh: '擷取' },
    title: { en: 'The answer cannot be retrieved', zh: '答案無法被擷取' },
    lead: {
      en: 'A page that cannot be fetched cannot be ranked, and it cannot be cited.',
      zh: '抓不到的頁面不能排名，也不會被引用。',
    },
    paragraphs: [
      {
        en: 'Strategy does not outrun retrieval. Run this check on the URLs that are supposed to earn demand, not on a sample homepage screenshot.',
        zh: '策略跑不贏擷取。檢查那些應該帶來需求的網址，而不是只看首頁截圖。',
      },
    ],
    checks: [
      {
        en: 'Priority URLs return 200, are not blocked by robots.txt, are listed in the sitemap, and declare a canonical that matches the URL you want cited.',
        zh: '優先網址回傳 200、沒有被 robots.txt 封鎖、列在網站地圖裡，而且 canonical 指向你希望被引用的網址。',
      },
      {
        en: 'The templates that carry those pages stay within the published Core Web Vitals thresholds: LCP at or under 2.5 seconds, INP under 200 milliseconds, CLS under 0.1.',
        zh: '承載這些頁面的範本維持在已公布的 Core Web Vitals 門檻：LCP 不大於 2.5 秒、INP 低於 200 毫秒、CLS 低於 0.1。',
      },
      {
        en: 'The answer is in the initial HTML. A fact that appears only after a click is easy for people to miss and easy for some retrieval systems to miss.',
        zh: '答案在初始 HTML 裡。要點擊才出現的事實，人容易錯過，部分檢索系統也容易錯過。',
      },
      {
        en: 'Each full translation has its own URL, connected with hreflang. Google recommends different URLs per language and tells sites to avoid side-by-side translations, because it judges language from visible content, not from the lang attribute. This note follows that pattern.',
        zh: '每個完整譯本都有自己的網址，並以 hreflang 連接。Google 建議不同語言使用不同網址，並要求避免並排翻譯，因為它是靠看得到的內容判斷語言，而不是靠 lang 屬性。這份備忘跟隨這個做法。',
      },
      {
        en: 'Do not auto-redirect visitors based on a guessed language. Offer a link. A wrong redirect hides a version from both people and crawlers.',
        zh: '不要按猜測的語言自動重新導向。提供連結即可。錯誤的重新導向會讓人和爬蟲都看不到另一個版本。',
      },
    ],
  },
  {
    id: 'measure',
    n: '05',
    toc: { en: 'Measurement', zh: '量度' },
    title: { en: 'The report stops at a rank', zh: '報告停在排名' },
    lead: {
      en: 'A position is one lens. It is not a measurement system.',
      zh: '排名只是一個鏡頭，不是一套量度。',
    },
    paragraphs: [
      {
        en: 'Keep four numbers for the pages that matter: non-branded impressions, qualified organic sessions, assisted conversions, and whether those pages are cited. Where Bing Webmaster Tools shows AI Performance, record citations and grounding queries — the queries used to retrieve a cited passage — as a baseline. Do not turn that baseline into a target to game. Google’s spam policies already treat manipulation of generative AI responses as spam.',
        zh: '為重要頁面保留四個數字：非品牌曝光、合格的自然工作階段、輔助轉換，以及這些頁面有沒有被引用。如果 Bing Webmaster Tools 顯示 AI Performance，把引用次數和 grounding queries（為了擷取被引用段落而使用的查詢）記成基線。不要把基線變成拿來操弄的目標。Google 的垃圾內容政策已把操控生成式 AI 回應視為垃圾手法。',
      },
      {
        en: 'A small team can hold this baseline in Search Console and a spreadsheet. A larger team should segment it by language and market, because a gain in one language can hide a split entity in the other. Change a page when the answer is unclear. Do not rewrite it because a dashboard moved by one place.',
        zh: '小型團隊可以用 Search Console 加一份試算表保住這條基線。較大團隊應按語言和市場分開看，因為一種語言的增長可以掩蓋另一種語言裡裂開的實體。當答案不清楚時才改頁。不要因為儀表板移動一名就改寫。',
      },
    ],
  },
  {
    id: 'rhythm',
    n: '06',
    toc: { en: 'Rhythm', zh: '節奏' },
    title: { en: 'Same standard, different operating rhythm', zh: '標準相同，節奏不同' },
    lead: {
      en: 'Headcount changes how you govern the work. It does not change the work.',
      zh: '人數改變的是你怎樣治理這件工作，不是工作本身。',
    },
    paragraphs: [
      {
        en: 'Teams get into trouble when they copy another company’s channel plan. A five-person firm does not need an enterprise content calendar. A group with six markets does not get to skip the entity sentence. Use the band you are actually in.',
        zh: '團隊出問題，常常是因為抄了另一家公司的渠道計劃。五人公司不需要企業級的內容日曆。有六個市場的集團也不能跳過實體句。用你真正所在的那一檔。',
      },
    ],
    bands: [
      {
        title: { en: 'Small teams', zh: '小型團隊' },
        text: {
          en: 'Freeze the entity sentence in both languages, repair indexation, and rewrite the three URLs that already earn impressions. Do not open a blog programme this quarter.',
          zh: '先凍結兩種語言的實體句，修復索引，並改寫已經有曝光的三個網址。本季不要開一個網誌計劃。',
        },
      },
      {
        title: { en: 'Mid-size teams', zh: '中型團隊' },
        text: {
          en: 'Build an evidence layer: one case study with a method and a date, internal links between related questions, and a named owner for each language. Do not buy links before that layer exists.',
          zh: '建立證據層：一個有方法和日期的案例、相關問題之間的內部連結，以及每種語言的具名負責人。在證據層出現之前，不要購買連結。',
        },
      },
      {
        title: { en: 'Larger organisations', zh: '較大機構' },
        text: {
          en: 'Govern the name, the category, and the claims across sites, agencies, and markets. Local teams may localise examples. They should not invent a second category. Review the language pair whenever a market publishes a page.',
          zh: '在網站、代理商和市場之間治理名稱、類別和主張。在地團隊可以在地化例子，但不應發明第二個類別。每當一個市場發布新頁，就覆核一次語言配對。',
        },
      },
    ],
  },
];

export const monthSteps = [
  {
    en: 'Write the entity sentence in English and in Traditional Chinese. Put each sentence on the about page of its own language version, and record the pair in structured data.',
    zh: '用英文和繁體中文各寫一句實體句。各自放在該語言版本的關於頁，並把這一組名稱寫進結構化資料。',
  },
  {
    en: 'Choose three URLs that already receive impressions. Confirm the status code, the canonical, and that each URL is in the sitemap.',
    zh: '選三個已經有曝光的網址。確認狀態碼、canonical，以及它們是否在網站地圖裡。',
  },
  {
    en: 'Rewrite the opening of those three URLs so each one answers a single question in the first screen.',
    zh: '改寫這三個網址的開場，讓每一頁在第一屏回答一個問題。',
  },
  {
    en: 'Add one proof element to each URL: a date, a primary source, a method, or a constraint from your own work.',
    zh: '每個網址加上一項證明：日期、原始來源、方法，或來自你自己工作的限制。',
  },
  {
    en: 'Write down the baseline: non-branded impressions, qualified sessions, and any citation figure you can actually see. Review it next month before you publish anything new.',
    zh: '寫下基線：非品牌曝光、合格工作階段，以及你真正看得到的引用數字。下個月先覆核這條基線，再決定要不要發布新頁。',
  },
];

export const faqs = [
  {
    q: {
      en: 'Do small companies need a different SEO and GEO strategy from large ones?',
      zh: '小型公司的 SEO 與 GEO 策略需要和大公司不同嗎？',
    },
    a: {
      en: 'No. The standard is the same: a clear entity, pages that answer real questions, proof a third party can cite, and URLs that can be retrieved. What changes is the operating rhythm. Small teams should repair the entity and three existing pages before they start a publishing calendar. Larger organisations should govern the name, category, and claims across markets so local teams do not invent a second business.',
      zh: '不需要。標準相同：清楚的實體、回答真實問題的頁面、第三方可以引用的證明，以及能夠被擷取的網址。會改變的是運作節奏。小型團隊應先修復實體和三個既有頁面，再開始內容日曆。較大機構應在各市場治理名稱、類別和主張，避免在地團隊發明第二門生意。',
    },
  },
  {
    q: {
      en: 'Is GEO a replacement for SEO?',
      zh: 'GEO 可以取代 SEO 嗎？',
    },
    a: {
      en: 'No. SEO is how a URL becomes eligible to be found for a query. GEO is how a passage becomes easy to retrieve, interpret, and cite in an AI answer. A page that is not indexed cannot be cited. Treat them as one retrieval programme with two surfaces.',
      zh: '不可以。SEO 讓網址有資格在查詢中被找到。GEO 讓段落容易被擷取、理解，並在 AI 答案中被引用。沒有被索引的頁面不會被引用。把它們看成同一個檢索計劃的兩個表面。',
    },
  },
  {
    q: {
      en: 'Should a bilingual company put both languages on one URL?',
      zh: '雙語公司應把兩種語言放在同一個網址嗎？',
    },
    a: {
      en: 'No. Google recommends a different URL for each language version and warns against side-by-side translations, because it determines language from the visible words, not from the lang attribute. Connect the versions with hreflang and with an ordinary link. Do not auto-redirect people based on a guessed language. This advisory is published that way: English on /advisory and Traditional Chinese on /zh/advisory.',
      zh: '不應該。Google 建議每個語言版本使用不同網址，並提醒避免並排翻譯，因為它是靠看得到的文字判斷語言，而不是靠 lang 屬性。用 hreflang 和普通連結連接兩個版本。不要按猜測的語言自動重新導向。這份備忘就是這樣發布的：英文在 /advisory，繁體中文在 /zh/advisory。',
    },
  },
  {
    q: {
      en: 'Is using AI to draft a page a problem?',
      zh: '用 AI 起草頁面有問題嗎？',
    },
    a: {
      en: 'Drafting is not the problem. Publishing many unreviewed pages to capture queries, without first-hand detail, is the problem. Google defines scaled content abuse as generating many pages primarily to manipulate rankings rather than help users, no matter how the pages are created. The examples include generative AI. Add a method, a date, a source, or a constraint only your team would know. If you cannot, do not publish the page.',
      zh: '起草本身不是問題。問題是為了覆蓋查詢而大量發布未經覆核、又沒有第一手細節的頁面。Google 把規模化內容濫用界定為大量產生頁面，主要為了操控排名而不是幫助使用者，不論頁面是怎樣產生的。例子包括生成式 AI。補上方法、日期、來源，或只有你的團隊才知道的限制。做不到就不要發布。',
    },
  },
];

export const advisorySources = [
  { n: '01', label: 'Google Search Central', title: { en: 'Spam policies for Google web search', zh: 'Google 網頁搜尋垃圾內容政策' }, href: 'https://developers.google.com/search/docs/essentials/spam-policies' },
  { n: '02', label: 'Google Search Central', title: { en: 'Creating helpful, reliable, people-first content', zh: '建立對人有用、可靠的內容' }, href: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
  { n: '03', label: 'Google Search Central', title: { en: 'Managing multi-regional and multilingual sites', zh: '管理多地區與多語言網站' }, href: 'https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites' },
  { n: '04', label: 'Google Search Central', title: { en: 'SEO Starter Guide', zh: 'SEO 入門指南' }, href: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
  { n: '05', label: 'Google Search Central', title: { en: 'Core Web Vitals', zh: 'Core Web Vitals' }, href: 'https://developers.google.com/search/docs/appearance/core-web-vitals' },
  { n: '06', label: 'Microsoft Bing', title: { en: 'AI Performance in Bing Webmaster Tools', zh: 'Bing Webmaster Tools 的 AI Performance' }, href: 'https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview' },
];
