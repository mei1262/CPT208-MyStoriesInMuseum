# V-Museum（唯博）前端系统

面向博物馆参观场景的静态 Web 原型：参观者工作台、游览计划、AI 纪念影像入口、AR 演示与馆方后台界面等。

**本 README 所在位置**：小组 GitHub 仓库 [`LUCK559/CPT208-MyStoriesInMuseum`](https://github.com/LUCK559/CPT208-MyStoriesInMuseum) 的 **`frontend/` 子目录**（与 `portfolio/`、`activityRecords/` 等并列）。系统源码与静态资源以该子目录为 Web 根目录组织。

## 在线演示（生产环境）

| 项目 | 说明 |
|------|------|
| **Live URL** | [https://cpt208v-museum.vercel.app/](https://cpt208v-museum.vercel.app/) |
| **托管平台** | [Vercel](https://vercel.com/) |
| **访问权限** | 站点为公开访问；部署项目需在 Vercel 控制台将 **Deployment Protection** 关闭（或使用符合课程要求的公开生产域名），确保评分期内访客无需登录即可打开。 |

入口页面为根路径下的 `index.html`（Vercel 对静态项目会将 `index.html` 作为目录默认文档）。

---

## 技术部署说明

### 1. 项目类型与部署策略

`frontend/` 目录为 **纯静态前端**（HTML + 内联/外链脚本与样式），无 Node 构建步骤。适合直接部署到 **Vercel**、GitHub Pages、Netlify 等静态托管服务。

推荐使用 **Vercel**：与 Git 仓库联动后，每次推送到默认分支可自动触发部署，并自动生成 HTTPS 与预览环境。

### 2. 部署到 Vercel（推荐流程）

#### 方式 A：通过 GitHub 连接（适合小组协作与持续交付）

1. 确保小组仓库已推送到 GitHub，并保持 **Public**（或按课程要求对评分方可见）：  
   [https://github.com/LUCK559/CPT208-MyStoriesInMuseum](https://github.com/LUCK559/CPT208-MyStoriesInMuseum)（默认分支 `main`，前端代码在 [`frontend`](https://github.com/LUCK559/CPT208-MyStoriesInMuseum/tree/main/frontend) 目录）。
2. 登录 [Vercel Dashboard](https://vercel.com/dashboard)，选择 **Add New… → Project**，导入上述仓库 **LUCK559/CPT208-MyStoriesInMuseum**。
3. 在 **Configure Project** 中：
   - **Root Directory**：必须设为 **`frontend`**（勿留空为仓库根目录，否则找不到 `index.html`）。点击 **Edit** 选择子目录 `frontend`。
   - **Framework Preset**：选择 **Other**（无框架）。
   - **Build Command**：留空（无需构建）。
   - **Output Directory**：留空或 `.`（将包含 `index.html` 的目录作为站点根目录发布）。
4. 点击 **Deploy**。首次部署完成后，控制台会给出形如 `https://<project>.vercel.app` 的生产域名。
5. 在 **Project → Settings → Domains** 中可绑定自定义域名（可选）。
6. 若出现 **404 on refresh** 等问题：本项目为多页 HTML（`index.html`、`ai-memorial.html` 等），非单页应用路由，一般 **不需要** 额外 Rewrite；确保所有 `.html` 与静态资源路径与仓库目录结构一致即可。

#### 方式 B：通过 Vercel CLI

```bash
git clone https://github.com/LUCK559/CPT208-MyStoriesInMuseum.git
cd CPT208-MyStoriesInMuseum/frontend
npm i -g vercel
vercel          # 按提示登录并链接项目；若从仓库根目录执行，需在提示中指定 Root 为 frontend
vercel --prod   # 推送到生产环境
```

### 3. 部署前检查清单

- [ ] 仓库中包含 `index.html` 及所有被引用的 **静态资源**（例如 `MuseumSource/`、`AvatarSource/`、`i18n.js` 等），避免线上环境图片或脚本 404。
- [ ] 页面中外链 CDN（如 Tailwind、Font Awesome、Google Fonts）在目标网络下可访问；若需离线演示，需在文档中说明网络要求或改为本地资源。
- [ ] 在无痕窗口或使用未登录 Vercel 的浏览器打开 Live URL，确认 **无需登录** 即可完整使用核心流程。

### 4. 与课程要求的对照（摘要）

- **Live URL**：使用上方 Vercel 生产链接提交；保持项目在评分期内 **不暂停、不私有化**。
- **现代云平台**：Vercel 符合「GitHub Pages、Vercel 等」类要求。
- **源代码仓库**：[LUCK559/CPT208-MyStoriesInMuseum](https://github.com/LUCK559/CPT208-MyStoriesInMuseum)（本系统在其中的 [`frontend/`](https://github.com/LUCK559/CPT208-MyStoriesInMuseum/tree/main/frontend) 子目录）。

---

## 本地运行与预览

无需安装依赖即可预览（依赖浏览器访问 CDN）：

1. 克隆小组仓库并进入 `frontend` 目录：

   ```bash
   git clone https://github.com/LUCK559/CPT208-MyStoriesInMuseum.git
   cd CPT208-MyStoriesInMuseum/frontend
   ```

2. 任选一种方式启动本地 HTTP 服务（避免部分浏览器对 `file://` 的限制）：

   ```bash
   # Python 3
   python -m http.server 8080
   ```

   浏览器访问：`http://localhost:8080/`。

3. 或使用 VS Code / Cursor 的 **Live Server** 等扩展，以工作区根目录打开 `index.html` 所在文件夹并启动服务。

---

## 技术栈

| 类别 | 技术 |
|------|------|
| 标记与脚本 | HTML5、原生 JavaScript |
| 样式 | [Tailwind CSS](https://tailwindcss.com/)（CDN）、自定义 CSS |
| 图标 | [Font Awesome 6](https://fontawesome.com/)（CDN） |
| 字体 | [Google Fonts - Noto Sans SC](https://fonts.google.com/)（CDN） |
| 国际化 | 自研 `i18n.js`（`data-i18n` 等） |
| 数据持久化（浏览器端） | `localStorage`（游览计划等） |

---

## 仓库结构（简要）

```
frontend/
├── index.html              # 主站与参观者/馆方模块
├── i18n.js                 # 中英文文案
├── ar-demo.html            # AR 相关演示
├── ai-memorial.html        # AI 纪念入口（已完成行程列表）
├── ai-memorial-photo.html  # 纪念影像（照片向）
├── ai-memorial-video.html  # 纪念影像（视频向）
├── ai-memorial-preview.html
├── MuseumSource/           # 博物馆相关图片等资源
├── AvatarSource/           # 虚拟形象等资源
└── README.md
```

---

## 小组 GitHub 仓库

| 项目 | 链接 |
|------|------|
| **仓库（根目录）** | [https://github.com/LUCK559/CPT208-MyStoriesInMuseum](https://github.com/LUCK559/CPT208-MyStoriesInMuseum) |
| **默认分支** | [`main`](https://github.com/LUCK559/CPT208-MyStoriesInMuseum/tree/main) |
| **本系统源码目录** | [`frontend/`](https://github.com/LUCK559/CPT208-MyStoriesInMuseum/tree/main/frontend) |

部署到 Vercel 时，**Root Directory 选 `frontend`**，与上表一致。

---

## 许可与课程说明

本项目用于 CPT208 课程作业演示。小组仓库根目录若已包含 **`ai-logs/`**（AI 使用记录），请以课程要求为准维护；本 `frontend/README.md` 仅描述前端子目录的部署与运行。
