const fs = require('fs');
const path = require('path');
const inFile = path.join(__dirname, 'index.html');
const outFile = path.join(__dirname, 'index.html');
let s = fs.readFileSync(inFile, 'utf8');

/** 已与 index.patched 合并后的页面：勿再跑旧版替换，否则会 MISS 并破坏文件 */
if (s.includes('museumAdminActivePanel') && s.includes('vmAfterLocaleChange')) {
  console.log('index.html already has full i18n wiring; skip.');
  process.exit(0);
}

function rep(a, b) {
  if (!s.includes(a)) {
    console.warn('MISS:', a.slice(0, 60));
    return;
  }
  s = s.split(a).join(b);
}

// roles card (if not already patched)
rep(
  '<p class="text-amber-600 text-sm font-bold mb-3">参观者 | Visitor</p>',
  '<p class="text-amber-600 text-sm font-bold mb-3" data-i18n="roles.cardKicker"></p>'
);
rep(
  '<h3 class="text-2xl sm:text-3xl font-bold mb-5 group-hover:text-amber-600 transition">探索、定制与生成</h3>',
  '<h3 class="text-2xl sm:text-3xl font-bold mb-5 group-hover:text-amber-600 transition" data-i18n="roles.cardTitle"></h3>'
);
rep(
  '<p class="text-zinc-500 leading-relaxed text-[15px]">选定展馆后，定制您的专属虚拟形象，开启 AR 导航并在游览结束后生成 AI 故事视频。</p>',
  '<p class="text-zinc-500 leading-relaxed text-[15px]" data-i18n="roles.cardDesc"></p>'
);
rep('title="博物馆方工作台">', 'data-i18n-title="fab.museumAdminTitle">');
rep(
  '<span class="pr-0.5 leading-snug text-left max-w-[7.5rem] sm:max-w-none">博物馆方入口</span>',
  '<span class="pr-0.5 leading-snug text-left max-w-[7.5rem] sm:max-w-none" data-i18n="fab.museumAdmin"></span>'
);

// i18n.js before main script
if (!s.includes('src="i18n.js"')) {
  s = s.replace('<script>\n    const museums', '<script src="i18n.js"></script>\n  <script>\n    const museums');
}

// visitor header + back btn
rep(
  '<button type="button" id="visitor-back-btn" onclick="performVisitorBack()" class="hidden shrink-0 items-center justify-center gap-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 sm:text-zinc-700 transition w-10 h-10 sm:w-auto sm:h-auto sm:px-4 sm:py-2.5 sm:rounded-xl sm:font-bold sm:text-sm" title="返回上一页" aria-label="返回上一页">',
  '<button type="button" id="visitor-back-btn" onclick="performVisitorBack()" class="hidden shrink-0 items-center justify-center gap-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 sm:text-zinc-700 transition w-10 h-10 sm:w-auto sm:h-auto sm:px-4 sm:py-2.5 sm:rounded-xl sm:font-bold sm:text-sm" data-i18n-title="common.backShortTitle" aria-label="返回上一页">'
);
rep('<span class="hidden sm:inline">返回上一页</span>', '<span class="hidden sm:inline" data-i18n="common.back"></span>');
rep('<p class="text-amber-600 text-sm font-bold">参观者工作台</p>', '<p class="text-amber-600 text-sm font-bold" data-i18n="visitor.workbench"></p>');
rep(
  '<h2 id="visitor-title" class="text-xl sm:text-2xl font-bold text-zinc-900 truncate">趣味功能概览</h2>',
  '<h2 id="visitor-title" class="text-xl sm:text-2xl font-bold text-zinc-900 truncate" data-title-key="visitor.titleOverview">趣味功能概览</h2>'
);
rep(
  'title="在 XR 展区扫码开启">',
  'data-i18n-title="visitor.xrBtnTitle">'
);
rep('<span>XR 展区扫码</span>', '<span data-i18n="visitor.xrBtn"></span>');
rep(
  'onclick="closeVisitorModule()" class="px-5 py-2 rounded-xl border border-zinc-200 text-zinc-500 hover:bg-red-50 hover:text-red-600 transition font-medium">关闭</button>',
  'onclick="closeVisitorModule()" class="px-5 py-2 rounded-xl border border-zinc-200 text-zinc-500 hover:bg-red-50 hover:text-red-600 transition font-medium" data-i18n="visitor.close"></button>'
);

// feature cards
rep('<span class="inline-block mb-3 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">陪看讲解</span>', '<span class="inline-block mb-3 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold" data-i18n="feature1.badge"></span>');
rep('<h4 class="text-2xl font-bold mb-3 text-zinc-900">1. 虚拟形象导览</h4>', '<h4 class="text-2xl font-bold mb-3 text-zinc-900" data-i18n="feature1.title"></h4>');
rep('<p class="text-lg font-bold text-zinc-800 leading-snug mb-2">选形象、配语音，虚拟人一路讲给你听。</p>', '<p class="text-lg font-bold text-zinc-800 leading-snug mb-2" data-i18n="feature1.lead"></p>');
rep('<p class="text-zinc-500 mb-8 text-sm leading-relaxed">历史人物或馆方 IP，口播对齐展线，告别「只看不说」。</p>', '<p class="text-zinc-500 mb-8 text-sm leading-relaxed" data-i18n="feature1.desc"></p>');
rep('<span class="inline-block mb-3 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">游后记念</span>', '<span class="inline-block mb-3 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold" data-i18n="feature2.badge"></span>');
rep('<h4 class="text-2xl font-bold mb-3 text-zinc-900">2. AI 纪念视频</h4>', '<h4 class="text-2xl font-bold mb-3 text-zinc-900" data-i18n="feature2.title"></h4>');
rep('<p class="text-lg font-bold text-zinc-800 leading-snug mb-2">上传照片 + AR 抓拍，一键合成短视频。</p>', '<p class="text-lg font-bold text-zinc-800 leading-snug mb-2" data-i18n="feature2.lead"></p>');
rep('<p class="text-zinc-500 mb-8 text-sm leading-relaxed">自动配乐、字幕与转场，方便分享与留存。</p>', '<p class="text-zinc-500 mb-8 text-sm leading-relaxed" data-i18n="feature2.desc"></p>');
rep('<span class="inline-block mb-3 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">路线 + 任务</span>', '<span class="inline-block mb-3 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold" data-i18n="feature3.badge"></span>');
rep('<h4 class="text-2xl font-bold mb-3 text-zinc-900">3. 路线定制与打卡</h4>', '<h4 class="text-2xl font-bold mb-3 text-zinc-900" data-i18n="feature3.title"></h4>');
rep('<p class="text-lg font-bold text-zinc-800 leading-snug mb-2">AI 排专属路线，沿路 AR 打卡换奖励。</p>', '<p class="text-lg font-bold text-zinc-800 leading-snug mb-2" data-i18n="feature3.lead"></p>');
rep('<p class="text-zinc-500 mb-8 text-sm leading-relaxed">偏好关键词 + 文字需求，任务与纪念品一链打通。</p>', '<p class="text-zinc-500 mb-8 text-sm leading-relaxed" data-i18n="feature3.desc"></p>');

// three "深入了解详情" buttons - add data-i18n to each with context
s = s.replace(
  '<button onclick="showFeatureDetail(1)" class="w-full py-4 bg-zinc-50 border border-amber-200 text-amber-700 rounded-2xl font-bold hover:bg-amber-500 hover:text-white transition">深入了解详情</button>',
  '<button onclick="showFeatureDetail(1)" class="w-full py-4 bg-zinc-50 border border-amber-200 text-amber-700 rounded-2xl font-bold hover:bg-amber-500 hover:text-white transition" data-i18n="feature1.more"></button>'
);
s = s.replace(
  '<button onclick="showFeatureDetail(2)" class="w-full py-4 bg-zinc-50 border border-amber-200 text-amber-700 rounded-2xl font-bold hover:bg-amber-500 hover:text-white transition">深入了解详情</button>',
  '<button onclick="showFeatureDetail(2)" class="w-full py-4 bg-zinc-50 border border-amber-200 text-amber-700 rounded-2xl font-bold hover:bg-amber-500 hover:text-white transition" data-i18n="feature2.more"></button>'
);
s = s.replace(
  '<button onclick="showFeatureDetail(3)" class="w-full py-4 bg-zinc-50 border border-amber-200 text-amber-700 rounded-2xl font-bold hover:bg-amber-500 hover:text-white transition">深入了解详情</button>',
  '<button onclick="showFeatureDetail(3)" class="w-full py-4 bg-zinc-50 border border-amber-200 text-amber-700 rounded-2xl font-bold hover:bg-amber-500 hover:text-white transition" data-i18n="feature3.more"></button>'
);

// step0 big buttons
rep('transition-all">\n              开始定制 V-Museum 旅程\n            </button>', 'transition-all" data-i18n="step0.startJourney"></button>');
rep('<i class="fa-solid fa-map-location-dot"></i> 我的游览计划\n            </button>', '<i class="fa-solid fa-map-location-dot"></i> <span data-i18n="step0.myPlans"></span>\n            </button>');
rep('<i class="fa-solid fa-clapperboard text-amber-500 group-hover:text-white transition-colors"></i> AI 纪念视频生成\n            </button>', '<i class="fa-solid fa-clapperboard text-amber-500 group-hover:text-white transition-colors"></i> <span data-i18n="step0.aiMemorial"></span>\n            </button>');

// my plans panel
rep('<i class="fa-solid fa-map-location-dot text-amber-500"></i> 我的游览计划\n              </h3>', '<i class="fa-solid fa-map-location-dot text-amber-500"></i> <span data-i18n="plans.title"></span>\n              </h3>');
rep('transition" title="返回上一页">\n                <i class="fa-solid fa-arrow-left"></i> 返回上一页\n              </button>', 'transition" data-i18n-title="common.backShortTitle">\n                <i class="fa-solid fa-arrow-left"></i> <span data-i18n="common.back"></span>\n              </button>');
rep('<span class="text-lg">📍</span> 未完成\n                </h4>', '<span class="text-lg">📍</span> <span data-i18n="plans.incomplete"></span>\n                </h4>');
rep('<span class="text-lg">✅</span> 已完成\n                </h4>', '<span class="text-lg">✅</span> <span data-i18n="plans.completed"></span>\n                </h4>');

fs.writeFileSync(outFile, s);
console.log('wrote', outFile);
