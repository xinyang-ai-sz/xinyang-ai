# XinYang AI Website

## 需要拷贝的文件和目录

请将以下文件和目录从项目根目录拷贝到您的本地仓库：

### 1. 项目核心文件
- `index.html` - 网站入口文件
- `package.json` - 项目配置和依赖
- `pnpm-lock.yaml` - 依赖版本锁定文件
- `vite.config.js` - Vite配置文件
- `tailwind.config.js` - Tailwind CSS配置
- `postcss.config.js` - PostCSS配置
- `eslint.config.js` - ESLint配置
- `.gitignore` - Git忽略文件

### 2. 源代码目录
- `src/` - 整个src目录（包含所有组件和页面）

### 3. 静态资源
- `public/` - 整个public目录（包含图片等静态资源）

### 4. 后端配置
- `supabase/` - 整个supabase目录（包含Edge Functions等）

### 5. GitHub配置
- `.github/` - 整个.github目录（包含Actions工作流配置）

## 部署步骤

1. **创建GitHub仓库**
   - 在GitHub上创建新仓库，名称为 `xinyang-ai`
   - 保持仓库为空（不要初始化README）

2. **初始化本地仓库**
   

3. **启用GitHub Pages**
   - 进入仓库Settings -> Pages
   - Source选择"GitHub Actions"

4. **配置环境变量**（如果需要）
   - 在仓库Settings -> Secrets and variables -> Actions
   - 添加必要的环境变量

## 常见问题

1. **部署失败**
   - 检查仓库Settings -> Actions -> General中的权限设置
   - 确保Workflow permissions已设置为"Read and write permissions"

2. **页面404**
   - 确保vite.config.js中的base配置正确：`base: '/xinyang-ai/'`
   - 检查路由是否使用了正确的base路径

3. **资源加载失败**
   - 确保所有静态资源都放在public目录下
   - 使用相对于public的路径引用资源

## 本地开发

1. **安装依赖**
   

2. **启动开发服务器**
   

3. **构建**
   

## 代码更新

1. **拉取最新代码**
   

2. **提交更新**
   

部署成功后，网站将可以通过以下地址访问：
`https://YOUR_USERNAME.github.io/xinyang-ai/`

## 支持

如果遇到问题，请：
1. 检查GitHub Actions日志了解具体错误
2. 确保所有必需的文件都已正确拷贝
3. 验证GitHub Pages设置是否正确