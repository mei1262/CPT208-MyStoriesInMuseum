Primary prompts · V-Museum / CPT208

下面这些是当时给 AI 的代表性主提示，措辞可能和最终对话里不完全一样，但意思对得上：主要覆盖过程作品集（`index.html`、`css/styles.css`、`js/main.js`）和 `system/` 里的高保真原型。每条都尽量写成一段话里说完。

---

## 1 · Process Portfolio：单页结构、导航与无障碍

```
你在帮我们做 CPT208 的人机交互过程作品集，项目叫 My Stories in Museums（V-Museum）。技术栈就 HTML5、一个 CSS、一点点原生 JS，不要上框架。我想要一整页从上往下滚动的 index.html，章节用语义化标签包起来：动机与研究、用户需求、创意与备选、技术实现、评估与反思，每块都要有 id 能和顶栏导航的锚点对应上。顶栏做成 sticky，手机窄屏时有个「菜单」按钮能展开收起导航，记得把 aria-expanded、aria-controls 写对。页面最前面放一个 skip link，第一个可聚焦元素，点了直接跳到 #main。字体用 Google Fonts 的 Noto Sans SC 配 Fraunces，整体偏博物馆那种暖灰、纸感一点，别做成那种一眼 AI 的紫渐变。正文里已有的中文不要删，你主要是在外面套结构和 class。最后请给出你打算用的 HTML 骨架，以及导航切换脚本要绑的 data 属性或 class 名，我好直接对照改。
```

---

## 2 · Process Portfolio：响应式图集、表格与 Before/After 版式

```
还是同一个作品集，这次只动 styles.css。宽表格在手机上会撑破版，麻烦给 .section、.subsection、.table-wrap 这类容器想好窄屏时的横向滚动或折行策略，别让整页被撑出横向滚动条。背景调查那堆统计图我想做成统一风格的图集网格：边框、轻阴影、图片 lazy loading 都顺手带上。另外「迭代改进」那块版式我想固定成：上面一整行放手稿大图（Crazy 8 那张），下面一行里 Before 和 After 两张截图并排，大概 640px 以下再叠成单列；类名我想用 .before-after、.before-after__manuscript、.before-after__pair 这种一眼能看懂的。截图不要被裁成奇怪比例，.figure 里的图用 height auto、该用 contain 的地方用 contain。如果你改 CSS 必须我在 HTML 里补 class，请用文字告诉我补哪几个就行，尽量别大改结构。
```

---

## 3 · `js/main.js`：移动端导航切换

```
帮写一个很小的 main.js，defer 加载，严格模式，不要 jQuery。页面里用 [data-nav-toggle] 和 [data-nav-list] 选中顶栏菜单按钮和导航列表，点击按钮就给列表加/去 is-open，同时把按钮上的 aria-expanded 在 true false 之间切。按 Escape 要关菜单并把焦点还给按钮；用户点了某个锚点链接跳章节以后菜单也要自动收起来。代码尽量别往 window 上乱挂东西，最后只输出完整的 main.js 内容给我粘贴。
```

---

## 4 · System 原型：页面壳与组件分区

```
我们在做一个博物馆参观者端加馆方后台概念的静态原型，想先落在**单个** HTML 文件里，不要打包构建。顶栏放个 logo 占位和语言切换（中英文可以先简单做，具体见下一条第六点也可以在这里先留个按钮位）。主体里用 tab 或大区块把几块串起来：访客首页、XR 导览那块、参观路线规划、AI 纪念视频流程、再带一块偏 admin 的面板（深度可以浅，主要是信息架构对得上）。颜色间距用 CSS 变量，375px 宽的手机上主壳不要出现横向滚动。header main nav section footer 这些语义标签该用的用上，数据全是 mock，按钮先 console.log 或简单 show hide 面板都行，style 放 head 里、script 放 body 末尾，关键地方注释一下方便我们之后换文案。
```

---

## 5 · 迭代排错：移动端横向溢出与触摸目标

```
我们 system 文件夹里那套博物馆原型在电脑上还行，一到 iPhone Safari 就有一点点横向溢出，而且有的按钮点起来像针尖一样。你帮我从常见原因里排查一圈，比如 100vw 把滚动条算进去了、写死的 px 宽度、特别长的连续英文不换行、负 margin 把东西顶出去之类的。修复尽量用最小 diff：图片 max-width 100%、该 contain 的 contain，主按钮触摸区域至少往 44px 那个量级靠。如果必须动 HTML 也尽量几行搞定，并说清楚改哪几行，我好在整合版里自己 merge。
```

---

## 6 · System：双语可切换功能（中 / 英）

```
系统原型这边我们想加一套**真正能用**的中英文切换，而不是只做两个静态页面。默认可以跟浏览器语言走，或者先写死默认中文也行，但用户点了「中文 / EN」之后，同一套界面上的标题、按钮、tab 标签、小提示语都要跟着切过去，刷新页面最好还能记住上次选的语言（localStorage 或 sessionStorage 你选一个简单可靠的）。实现上我倾向用 data-i18n-key 配一份 JSON 字典表里中英两套字符串，JS 里扫一遍带 key 的元素替换 textContent，复杂一点的句子如果不好拆就整段用两个 hidden 的 div 切换显示也行，你帮我们权衡一下哪种改动最小、和现有 HTML 最不打架。切语言时顺便给 html 或 body 加一个 lang 属性和比如 data-locale="zh" / "en"，方便以后 CSS 里微调字距或字号。请直接改我们 system 里那份整合页（或说明要替换的 script 片段），别引入 i18n 库，保持纯静态能双击打开。
```
