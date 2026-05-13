(function () {
  "use strict";

  var STORAGE_KEY = "cpt208-portfolio-lang";

  var STRINGS_EN = {
    skip_link: "Skip to content",
    brand_sub: "CPT208 · A3 Digital heritage & playful experience · Process portfolio",
    nav_label: "Page sections",
    menu: "Menu",
    nav_motivation: "Motivation & research",
    nav_requirements: "User requirements",
    nav_ideation: "Ideation & alternatives",
    nav_implementation: "Implementation",
    nav_evaluation: "Evaluation & reflection",
    hero_project: "V-Museum (Weibo)",
    hero_title: "User-centred design, prototypes, and evaluation",
    hero_lead:
      "Team process portfolio: motivation and research, user requirements, ideation and alternatives, implementation, and evaluation — with survey charts, concept sketches, and UI iteration screenshots. The deployed high-fidelity prototype is linked below.",
    hero_repo_1: "GitHub · Full repository",
    hero_repo_2_before: "GitHub · Process portfolio ",
    hero_repo_2_after: " folder",
    hero_btn_start: "Start from research",
    hero_btn_prototype: "Open deployed prototype (Vercel)",
    s01_h2: "Motivation & research",
    why_h3: "Why this topic (The Why)",
    gap_h3: "Literature & product gap (The Gap)",
    gap_th0: "Type / name",
    gap_th1: "Three strengths (They did well)",
    gap_th2: "Three limitations (They missed)",
    survey_h3: "Background survey: charts & visualisation",
    stakeholders_h3: "Stakeholders & personas (The Stakeholders)",
    s02_h2: "User requirements",
    journey_h3: "User journey map & pain points",
    journey_caption:
      "User pain-point journey map · Click image to open full size in a new tab",
    journey_fc1: "Pain distribution (supports “frustration / insufficient info” stages)",
    journey_fc2: "Current pain points (extra dimensions)",
    must_h3: "Playfulness must-haves (3 Must-haves)",
    evidence_h3: "Field / interview evidence (7 photos or short clips)",
    data_h3: "Data collection, sample, and analysis",
    data_p1:
      "<strong>Quantitative:</strong> Online/offline questionnaire on visitor motives, pain points, and attitudes toward AI/AR-assisted visits (charts in this section and under Motivation). Sample: <strong>young adults and general adult museum-goers</strong>; sample size and screening in the group questionnaire doc / <code>问卷结果.pdf</code>.",
    data_p2:
      "<strong>Qualitative:</strong> In the Alpha phase, <strong>three</strong> peers took part in semi-structured interviews and walkthroughs on playfulness, clarity, and on-site network concerns; themes fed back into architecture (see Evaluation).",
    data_p3:
      "<strong>Analysis:</strong> Questionnaire results inform journey pain points and must-have priorities; interviews and heuristic observation jointly point to <strong>weak-network usability</strong> and <strong>offline / edge inference</strong> design implications.",
    s03_h2: "Ideation & alternatives",
    early_h3: "Early web concept sketches & brainstorm",
    early_pdf: "System concept iteration draft.pdf",
    crazy_h3: "Crazy Eights (8 quick ideas / sketches + early UI)",
    compare_h3: "Design alternatives (2–3 options)",
    lowfi_h3: "Low-fidelity clickable prototype",
    lowfi_btn: "Low-fi Figma prototype",
    s04_h2: "Implementation",
    arch_h3: "System architecture (data flow)",
    arch_caption:
      "Left to right: visitors configure museum and avatar on the Vercel-hosted portal → on-site QR sync with museum XR devices → LLM+RAG live guidance and post-visit AI memorial video → cloud manages profiles, digital assets, and AI jobs.",
    iter_h3_before: "System UI iteration screenshots (",
    iter_h3_after: ") · Incremental web UI improvements",
    m0408: "0408 · Early UI",
    m0410: "0410 · WebXR mock-ups (PC / mobile)",
    m0412: "0412",
    m0416: "0416 · WebXR layout & style refinement (deprecated)",
    m0421: "0421",
    m0422: "0422 · Tour route customisation",
    m0430: "0430 · AI memorial video UI",
    m0501: "0501 · Integrated build — key screens",
    m0506: "0506 · Visual refresh + bilingual update",
    hifi_h3: "High-fidelity / runnable prototype",
    hifi_online: "Online interactive version:",
    hifi_offline: "Offline demos — open HTML in the repo (system model iterations):",
    team_h3: "Individual contributions",
    team_intro:
      "Below are the <strong>main integration leads</strong> for each deliverable, for alignment with Poster, Portfolio, System, and Video submissions:",
    team_th0: "Member",
    team_th1: "Primary role (integration)",
    team_note:
      "<strong>Note:</strong> All four members contributed across research, design, prototyping, testing, and documentation; the table only highlights <strong>submission and integration</strong> leads.",
    tech_h3: "Technical reflection (AI-assisted coding)",
    tech_p:
      "The group used AI for part of the front-end scaffolding and debugging; verification included must-have walkthroughs, on-device mobile checks, and Alpha task scripts. Ethics: default accessibility of generated code (contrast, focus order, keyboard paths) and transparency of third-party APIs; prompts and tool versions are listed in References.",
    s05_h2: "Evaluation & reflection",
    alpha_h3: "Usability testing (Alpha · 3 participants)",
    alpha_p:
      "Once the full journey was demoable, we ran <strong>semi-structured interviews + task walkthroughs</strong>: participants first completed “overview → route/guide logic → imagine an on-site visit”, then we probed <strong>playfulness, clarity, network concerns, and privacy</strong>. Qualitative Alpha only (no formal SUS); thematic coding informed architecture and UI priorities.",
    alpha_core_h: "Key takeaway (from Alpha, before case detail)",
    alpha_core_p:
      "All three saw potential in “personalised routes + narrative guidance”, but <strong>all flagged weak in-museum networks</strong>: they would try only if “it doesn’t keep spinning when it’s crowded.” That pushed us from <strong>always-on public cloud</strong> to <strong>local LLM + preloaded resource packs</strong>, and heavy video / HD assets to <strong>async fetch after the visit on good Wi-Fi</strong>.",
    insight_h: "Cross-participant themes",
    response_h: "Design & engineering responses to feedback",
    iter_section_h3: "Iterative improvement (Before / After · feedback-driven)",
    iter_callout_h: "UI layer: from “scattered early info” to “integrated journey + route customisation”",
    iter_callout_p:
      "Screens below show web prototype iterations; the <strong>architecture shift</strong> above matches: weak-network contexts use <strong>local LLM + preloaded packs</strong> so narration does not stall, while heavy media uses <strong>post-visit cloud sync</strong> — separating “play on-site” from “share afterwards” across bandwidth.",
    crazy8_cap:
      "<strong>Crazy 8 · 6</strong> · Early solution sketches for iteration (manuscript)",
    before_cap: "<strong>Before</strong> · Feedback comparison / before.png",
    after_cap: "<strong>After</strong> · Feedback comparison / after.png",
    rationale_h: "Concrete optimisations (mapped to figures)",
    reflect_h3: "Social / ethical impact & role of AI (final reflection)",
    refs_h3: "References (selected)",
    footer: "CPT208 Human-Centric Computing · Process Portfolio · V-Museum",
    meta_desc:
      "CPT208 HCI process portfolio: motivation & research, user requirements, ideation & alternatives, implementation, evaluation & reflection.",
    title_doc: "CPT208 Process Portfolio · My Stories in Museums",
    persona_tag_p: "Primary user",
    persona_tag_s: "Secondary user",
    persona1_name: "Lin Xiao · Museum visitor (content experiencer)",
    persona1_g: "<strong>Goals:</strong> Understand the route in limited time, reduce getting lost and overload, and turn the visit into a tellable personal story; open to light XR/AI if flows are clear and easy to exit.",
    persona1_sc: "<strong>Context:</strong> Weekend visit to a general museum with friends and a phone; wants quick route planning before entry, spatial cues and playful prompts during the visit, and a shareable memento after.",
    persona1_pa: "<strong>Pain points:</strong> Uneven label density, little personalisation, scattered memories after the visit; worries whether AI narration is trustworthy or disruptive to others.",
    persona1_pl: "<strong>Playfulness:</strong> Goal-based routes (e.g. more immersive vs. time-saving), light exploratory tasks or feedback on-site, and an emotional, customisable narrative or video summary at the end.",
    persona2_name: "Zhou Lan · Museum digital ops / education",
    persona2_g: "<strong>Goals:</strong> Keep exhibits and digital content aligned, tune narration tone and events, and check that the visitor experience matches curatorial intent.",
    persona2_sc: "<strong>Context:</strong> Updates exhibits and reviews public-facing copy in the “Museum Admin Center”, frequent route and slot changes during special exhibitions.",
    persona2_pa: "<strong>Pain points:</strong> Fragmented tools, visitor–back-office drift, extra proofreading cost for AI-generated content.",
    persona2_rel: "<strong>Relation to the system:</strong> Supplies trustworthy content and policy boundaries for the visitor app; pairs with the visitor journey so “play” does not trade off institutional responsibility.",
    must_li1_title:
      "<strong>1. XR Immersive Historical Scene + AI Character Interaction</strong>",
    must_li1_1: "1.1 Set up independent experience rooms to ensure a safe and stable experience.",
    must_li1_2: "1.2 Restore historical scenes of cultural relics 1:1 through XR devices.",
    must_li1_3:
      "1.3 Support real-time dialogue, puzzle solving, and task interaction with AI-driven virtual historical figures.",
    must_li2_title: "<strong>2. AI Co-created Memorial Video</strong>",
    must_li2_1: "2.1 Visitors can capture wonderful moments during the visit through XR devices.",
    must_li2_2:
      "2.2 AI automatically edits materials, integrating immersive scene clips and personal participation footage.",
    must_li2_3:
      "2.3 Generate an exclusive customised memorial video, supporting one-click saving and sharing.",
    must_li3_title: "<strong>3. AI-Powered Personalized Visiting Adaptation</strong>",
    must_li3_1:
      "3.1 AI dynamically adjusts explanation depth and visiting routes based on visitors’ interests and pace.",
    must_li3_2: "3.2 Support digital check-in at key exhibits and accumulation of points.",
    must_li3_3: "3.3 Achieve a personalised “thousand people, thousand faces” guidance experience.",
    must_li3_4:
      "3.4 Exchange accumulated points for exclusive digital souvenirs or physical cultural and creative gifts.",
    alt_brainstorm: "Brainstorm sketch",
    alt_concept: "System concept sketch",
    fc_bs: "Brainstorm (brainStorm.jpg)",
    fc_sys: "System concept map",
    fc_w1: "Web concept sketch 1",
    fc_w2: "Web concept sketch 2",
    fc_w3: "Web concept sketch 3",
    fc_w4: "Web concept sketch 4",
    fc_w5: "Web concept sketch 5",
    compare_intro:
      "During the early stages, we seriously considered two alternative approaches that leaned more heavily on a single technology:",
    compare_a_h: "Alternative Option A: Pure XR Historical Recreation",
    compare_a_p:
      "Focused on creating highly immersive, photorealistic recreations of historical environments and events, allowing visitors to “travel back in time.” It looked amazing, but it was pretty passive. There wasn’t much real interaction.",
    compare_b_h: "Alternative Option B: Pure AI Voice Chatbot Guide",
    compare_b_p:
      "Developing a knowledgeable, conversational AI voice assistant that visitors could freely question about any exhibit. It could have natural conversations and tailor explanations to each person. That made it more engaging and accessible, but it missed the emotional punch of actually seeing history come to life.",
    compare_c_h: "Final hybrid Option C (XR + AI) — adopted for this project",
    compare_c_p1: "<strong>Advantages of the final hybrid option C (XR + AI):</strong>",
    compare_c_p2:
      "The XR part builds the world and the atmosphere — it makes you feel like you’re really there in that historical moment. Then the AI voice turns that world into a conversation. Visitors can ask questions on the fly, ask for a simpler explanation, or dive deeper into something they’re curious about.",
    compare_c_p3:
      "That turns a one-way tour into a kind of discovery game. It’s way less boring. Sure, building this hybrid system is more complicated than just picking one approach, but it’s worth it. Visitors remember more, get more curious, and have a better time — whether they’re kids, adults, or just have different ways of learning.",
    p1_h: "P1 · Network-sensitive visitor",
    p2_h: "P2 · Experience-oriented visitor",
    p3_h: "P3 · Route-planner visitor",
    dt_bg: "Background & motives",
    dt_perf: "Task performance",
    dt_views: "Main views",
    dt_notes: "Observer notes",
    dt_quote: "Anonymous quote",
    rationale_1:
      "<strong>Route information density (P3):</strong> Bring route and detail into one view to cut mid-visit hops — each hop is costly on weak networks when deployed.",
    rationale_2:
      "<strong>Weak-network first (P1):</strong> From “always online fetch” to “resource pack ready + local LLM” so basic guidance survives disconnects.",
    rationale_3:
      "<strong>Defer heavy media (P1 + P2):</strong> Full renders and HD cloud assets move to <strong>post-visit download / background sync</strong> so narration is not starved — balancing souvenirs with on-site stability.",
    reflect_p1:
      "When generative features shape narration and commemorative media, we must govern <strong>factual accuracy</strong> (aligned with curatorial text, sensitive wording review), <strong>copyright & likeness</strong> (photos vs. AI re-use), and <strong>public audio & camera privacy</strong>. The admin back-office keeps “play” inside <strong>auditable content boundaries</strong> so excitement does not outweigh inclusion (language, hearing, devices) or respect for diverse audiences.",
    reflect_p2:
      "<strong>Generative AI in this project:</strong> Used for <strong>code scaffolding, copy polishing, and visual sketch variants</strong>; requirements, interview findings, architecture trade-offs, and test logs were <strong>human-verified</strong>. We separate model suggestions from participant quotes and cite tools with access dates in References. Risk: plausible-sounding but unverified claims — mitigated by <strong>quoting participants, keeping Before/After and design alternatives visible, and explicit weak-network engineering commitments</strong> rather than marketing-only language.",
    insight_li1: "<strong>Playfulness:</strong> Narrative and pacing received positive feedback; the “play” framing holds.",
    insight_li2:
      "<strong>Adoption intent:</strong> All would try in a real visit if <strong>weak networks do not break the core path</strong>.",
    insight_li3:
      "<strong>Risks:</strong> Public-cloud dependence, heavy assets, holiday congestion — aligns with P1’s offline needs and P2’s post-visit download preference.",
    resp_p1:
      "<strong>Local LLM + resource pack (during visit):</strong> Run the narration model on <strong>museum AR / edge devices</strong>; preload or batch texts, structured exhibit data, voice, and fallback assets so core inference and playback stay <strong>local</strong>, reducing reliance on venue Wi-Fi / cellular.",
    resp_p2:
      "<strong>Post-visit async cloud assets:</strong> During the visit, generate <strong>light previews and metadata</strong>; HD photos, AI cuts, and share cards download later when the visitor has good connectivity, avoiding contention with on-site critical flows.",
    resp_p3:
      "<strong>Path decision:</strong> Browser-heavy always-on WebAR was demoted in favour of assumptions aligned with <strong>venue devices + offline packs</strong>, matching Alpha’s “offline feels safer” consensus.",
    survey_fc0: "Supplementary chart",
    survey_fc1: "Pain points",
    survey_fc2: "Current pain points (2)",
    survey_fc3: "Visit purposes",
    survey_fc4: "Willingness to use AI+AR for visits",
    survey_fc5: "Preferred AI assistance modes",
    survey_fc6: "How AI/AR could combine with museums",
    survey_fc7: "Concerns about AR/AI",
    survey_fc8: "Edge device choices",
    survey_fc9: "Code_Generated_Image (cite AI tool in references if used)",
    survey_fc10: "Code_Generated_Image1",
    survey_fc11: "Code_Generated_Image2",
    journey_title_open: "Open full image in a new tab for small text",
    img_alt_journey: "User journey map & pain points",
    img_alt_pain: "Survey: pain-point distribution",
    img_alt_pain2: "Survey: current pain points 2"
  };

  var GAP_EN = [
    [
      "<strong>Paper 1</strong><br /><small>Almeshari, Dowell &amp; Nyhan (2020). <em>Museum Mobile Guide Preferences of Different Visitor Personas</em>. <em>J. Comput. Cult. Heritage</em> 14(1), art. 9. DOI: 10.1145/3423186</small>",
      "① Visitor types from questionnaires support personas and prioritisation. ② Compares preferences for guidance, navigation, and social features. ③ Aligns with our background survey on who needs guides most.",
      "① Single <strong>science-museum</strong> sample — careful when generalising. ② Little on <strong>crowding / weak networks</strong> and drop-off. ③ No <strong>generative narration fact-checking or museum review</strong> — gaps we address in the system."
    ],
    [
      "<strong>Paper 2</strong><br /><small>Trajkova et al. (2020). <em>Move Your Body: Engaging Museum Visitors with Human-Data Interaction</em>. Proc. ACM CHI. DOI: 10.1145/3313831.3376186</small>",
      "① Tests playful interaction in a real museum. ② Uses dwell time and gestures as observable “fun” metrics. ③ Embodiment and visuals align with our XR direction.",
      "① Focuses on <strong>fixed installations</strong>, not <strong>phone-based whole-museum</strong> routes. ② Weak link to <strong>personalised routes and post-visit mementos</strong>. ③ Limited discussion of <strong>networks and hardware cost</strong> — salient in our Alpha."
    ],
    [
      "<strong>Paper 3</strong><br /><small>Roussou &amp; Katifori (2018). <em>Flow, Staging, Wayfinding, Personalization: Evaluating User Experience with Mobile Museum Narratives</em>. <em>Multimodal Technol. Interact.</em> 2(2), 32. DOI: 10.3390/mti2020032</small>",
      "① Field iteration of mobile narrative prototypes. ② Combines observation, interviews, surveys, and logs — useful for journey maps. ③ Splits story, wayfinding, and personalisation — helps structure must-haves.",
      "① Heavy <strong>curator-written content</strong> — costly to replicate. ② Mostly <strong>pre-authored narratives</strong>, not open <strong>LLM dialogue and compliance</strong>. ③ Little on <strong>peak crowds and network strategy</strong> — we bridge with resource packs and local capacity."
    ],
    [
      "<strong>Paper 4</strong><br /><small>Falk, J. H. (2006). <em>An Identity-Centered Approach to Understanding Museum Learning</em>. <em>Curator: The Museum Journal</em> 49(2), 151–166. DOI: 10.1111/j.2151-6952.2006.tb00207.x</small>",
      "① Identity and motives explain visitor differences — supports personas. ② Post-visit meaning-making fits commemorative storytelling. ③ Conceptual framing helps align with museums without diving into implementation.",
      "① Predates mainstream <strong>mobile guides, generative AI, and XR</strong>. ② Little on <strong>IA or museum review workflows</strong>. ③ No <strong>weak-network or edge deployment</strong> — we add in engineering."
    ],
    [
      "<strong>Product 1</strong><br /><small>British Museum Audio app (official audio guide)</small>",
      "① Expert-written, authoritative — matches our trust goals. ② Many languages and themed tours; international audiences. ③ Maps and object highlights aid orientation.",
      "① <strong>Paid bundles</strong> raise the full-experience threshold. ② Mostly <strong>passive listening</strong>, limited co-creation vs. our <strong>AI routes and memorial video</strong>. ③ Phone + audio form factor, not our <strong>venue XR + local models</strong> stack."
    ],
    [
      "<strong>Product 2</strong><br /><small>My Visit to the Louvre / Louvre : ma visite (official visitor app)</small>",
      "① Strong indoor maps and suggested routes reduce getting lost. ② Text + optional audio support self-pacing. ③ Pre-visit favourites align with “my visit plan” needs.",
      "① Depth often behind <strong>in-app purchases</strong>. ② Core is <strong>navigation + listening</strong>, not our <strong>avatar co-presence or AI video</strong>. ③ Relies on <strong>networks and downloads</strong>; weak Wi-Fi hurts — we stress <strong>stable on-site, HD after the visit</strong>."
    ],
    [
      "<strong>Product 3</strong><br /><small>Bloomberg Connects (“Connects: Arts &amp; Culture” multi-museum platform)</small>",
      "① Free, multi-museum aggregation lowers first-use cost. ② Offline downloads help unstable in-museum networks. ③ Subtitles, type, and basic a11y options.",
      "① Partner-maintained pages vary in depth and tone. ② More <strong>browsing content</strong> than our <strong>admin governance and review loop</strong>. ③ No out-of-the-box <strong>3D avatar + edge LLM</strong> bundle."
    ],
    [
      "<strong>Product 4</strong><br /><small>Smartify (cross-museum recognition app)</small>",
      "① Camera recognition lowers “find the number then search” friction. ② Free mode reaches younger audiences. ③ Bite-sized info suits short browsing.",
      "① Recognition depends on <strong>lighting, angle, and digitisation</strong> — less stable than fixed XR anchors. ② Still read/listen-first, not our full <strong>personalised route + co-created video</strong>. ③ <strong>Museum-wide review, weak-network fallbacks, and edge ops</strong> need separate build-out."
    ]
  ];

  for (var r = 0; r < GAP_EN.length; r++) {
    for (var c = 0; c < 3; c++) {
      STRINGS_EN["gap_" + r + "_" + c] = GAP_EN[r][c];
    }
  }

  function cacheZh(el) {
    if (el.dataset.i18nZh != null) return;
    if (el.hasAttribute("data-i18n-html")) {
      el.dataset.i18nZh = el.innerHTML;
    } else {
      el.dataset.i18nZh = el.textContent;
    }
  }

  function setLang(lang) {
    var isZh = lang === "zh";
    document.documentElement.lang = isZh ? "zh-CN" : "en";
    document.documentElement.setAttribute("data-locale", lang);
    document.body.dataset.locale = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key) return;
      if (isZh) {
        if (el.dataset.i18nZh != null) {
          if (el.hasAttribute("data-i18n-html")) el.innerHTML = el.dataset.i18nZh;
          else el.textContent = el.dataset.i18nZh;
        }
      } else {
        cacheZh(el);
        var val = STRINGS_EN[key];
        if (val == null) return;
        if (el.hasAttribute("data-i18n-html")) el.innerHTML = val;
        else el.textContent = val;
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var spec = el.getAttribute("data-i18n-attr");
      if (!spec) return;
      var parts = spec.split("|");
      parts.forEach(function (p) {
        var kv = p.split(":");
        if (kv.length !== 2) return;
        var attr = kv[0];
        var key = kv[1];
        var zhKey = "i18nZh-" + attr;
        if (isZh) {
          if (el.dataset[zhKey] != null) el.setAttribute(attr, el.dataset[zhKey]);
        } else {
          if (el.dataset[zhKey] == null) el.dataset[zhKey] = el.getAttribute(attr) || "";
          var v = STRINGS_EN[key];
          if (v != null) el.setAttribute(attr, v);
        }
      });
    });

    var heroRepo2 = document.querySelector("[data-i18n-wrap='hero_repo_2']");
    if (heroRepo2) {
      if (isZh) {
        if (heroRepo2.dataset.i18nZhWrap != null) heroRepo2.innerHTML = heroRepo2.dataset.i18nZhWrap;
      } else {
        if (heroRepo2.dataset.i18nZhWrap == null) heroRepo2.dataset.i18nZhWrap = heroRepo2.innerHTML;
        heroRepo2.innerHTML =
          '<a href="https://github.com/LUCK559/CPT208-MyStoriesInMuseum/tree/main/portfolio" target="_blank" rel="noopener noreferrer">' +
          STRINGS_EN.hero_repo_2_before +
          "<code>portfolio</code>" +
          STRINGS_EN.hero_repo_2_after +
          "</a>";
      }
    }

    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      var active = btn.getAttribute("data-set-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    var mt = document.querySelector('meta[name="description"]');
    if (mt) {
      if (isZh) {
        if (mt.dataset.i18nZhDesc != null) mt.setAttribute("content", mt.dataset.i18nZhDesc);
      } else {
        if (mt.dataset.i18nZhDesc == null) mt.dataset.i18nZhDesc = mt.getAttribute("content") || "";
        mt.setAttribute("content", STRINGS_EN.meta_desc);
      }
    }

    var ti = document.querySelector("title");
    if (ti) {
      if (isZh) {
        if (ti.dataset.i18nZhTitle != null) ti.textContent = ti.dataset.i18nZhTitle;
      } else {
        if (ti.dataset.i18nZhTitle == null) ti.dataset.i18nZhTitle = ti.textContent;
        ti.textContent = STRINGS_EN.title_doc;
      }
    }
  }

  function init() {
    var saved = "zh";
    try {
      saved = localStorage.getItem(STORAGE_KEY) || "zh";
    } catch (e) {}
    if (saved !== "zh" && saved !== "en") saved = "zh";

    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-set-lang");
        if (lang === "zh" || lang === "en") setLang(lang);
      });
    });

    if (saved === "en") {
      document.querySelectorAll("[data-i18n]").forEach(cacheZh);
      document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
        var spec = el.getAttribute("data-i18n-attr");
        if (!spec) return;
        spec.split("|").forEach(function (p) {
          var kv = p.split(":");
          if (kv.length === 2) {
            var attr = kv[0];
            el.dataset["i18nZh-" + attr] = el.getAttribute(attr) || "";
          }
        });
      });
      var hr2 = document.querySelector("[data-i18n-wrap='hero_repo_2']");
      if (hr2 && hr2.dataset.i18nZhWrap == null) hr2.dataset.i18nZhWrap = hr2.innerHTML;
      var mt = document.querySelector('meta[name="description"]');
      if (mt && mt.dataset.i18nZhDesc == null) mt.dataset.i18nZhDesc = mt.getAttribute("content") || "";
      var ti = document.querySelector("title");
      if (ti && ti.dataset.i18nZhTitle == null) ti.dataset.i18nZhTitle = ti.textContent;
      setLang("en");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
