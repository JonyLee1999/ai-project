# 苹果风格设计系统 🎨

## 🎯 设计原则

### 1. 清晰性 (Clarity)
内容是至关重要的。清晰的视觉传达和功能性始终优先于装饰性元素。

**实施策略：**
- 使用充足的留白空间
- 保持文字的高对比度
- 确保触摸目标足够大（最小44pt）
- 遵循视觉层级原则

### 2. 遵从性 (Deference)
界面帮助用户理解内容并与之交互，但从不与内容竞争关注度。

**实施策略：**
- 减少视觉噪音
- 使用半透明效果和模糊
- 让内容成为焦点
- 避免过度装饰

### 3. 深度感 (Depth)
使用不同的视觉层次和运动效果来传达层级关系和活力。

**实施策略：**
- 使用阴影表现层级
- 创建逼真的动画效果
- 通过视差表现深度
- 利用透明度和模糊

## 🎨 视觉设计

### 颜色系统

#### 主色板
```css
/* 系统颜色 - 浅色模式 */
:root {
  /* 主色调 */
  --blue: #007AFF;
  --green: #34C759;
  --indigo: #5856D6;
  --orange: #FF9500;
  --pink: #FF2D92;
  --purple: #AF52DE;
  --red: #FF3B30;
  --teal: #5AC8FA;
  --yellow: #FFCC02;
  
  /* 中性色 */
  --gray: #8E8E93;
  --gray2: #AEAEB2;
  --gray3: #C7C7CC;
  --gray4: #D1D1D6;
  --gray5: #E5E5EA;
  --gray6: #F2F2F7;
}
```

#### 语义化颜色
```css
/* 标签颜色 - 浅色模式 */
:root {
  --label-primary: rgba(0, 0, 0, 1);
  --label-secondary: rgba(60, 60, 67, 0.6);
  --label-tertiary: rgba(60, 60, 67, 0.3);
  --label-quaternary: rgba(60, 60, 67, 0.18);
}

/* 填充颜色 */
:root {
  --fill-primary: rgba(120, 120, 128, 0.2);
  --fill-secondary: rgba(120, 120, 128, 0.16);
  --fill-tertiary: rgba(118, 118, 128, 0.12);
  --fill-quaternary: rgba(116, 116, 128, 0.08);
}

/* 背景颜色 */
:root {
  --background-primary: #FFFFFF;
  --background-secondary: #F2F2F7;
  --background-tertiary: #FFFFFF;
}
```

#### 深色模式适配
```css
@media (prefers-color-scheme: dark) {
  :root {
    /* 标签颜色 - 深色模式 */
    --label-primary: rgba(255, 255, 255, 1);
    --label-secondary: rgba(235, 235, 245, 0.6);
    --label-tertiary: rgba(235, 235, 245, 0.3);
    --label-quaternary: rgba(235, 235, 245, 0.18);
    
    /* 背景颜色 - 深色模式 */
    --background-primary: #000000;
    --background-secondary: #1C1C1E;
    --background-tertiary: #2C2C2E;
  }
}
```

### 字体系统

#### 字体族
```css
/* San Francisco 字体栈 */
:root {
  --font-family-system: -apple-system, BlinkMacSystemFont, 
                        'SF Pro Display', 'SF Pro Text', 
                        'Helvetica Neue', Helvetica, Arial, sans-serif;
  --font-family-mono: 'SF Mono', Monaco, 'Cascadia Code', 
                      'Roboto Mono', Consolas, 'Courier New', monospace;
}
```

#### 字体大小层级
```css
/* iOS文本样式 */
:root {
  /* 大标题 */
  --text-style-largeTitle: 34px;
  
  /* 标题组 */
  --text-style-title1: 28px;
  --text-style-title2: 22px;
  --text-style-title3: 20px;
  
  /* 正文组 */
  --text-style-headline: 17px;
  --text-style-body: 17px;
  --text-style-callout: 16px;
  --text-style-subhead: 15px;
  --text-style-footnote: 13px;
  
  /* 说明文字 */
  --text-style-caption1: 12px;
  --text-style-caption2: 11px;
}
```

#### 字重系统
```css
:root {
  --font-weight-ultralight: 100;
  --font-weight-thin: 200;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-heavy: 800;
  --font-weight-black: 900;
}
```

### 间距系统

#### 8点网格系统
```css
:root {
  /* 基础间距单位：8px */
  --spacing-base: 8px;
  
  /* 间距等级 */
  --spacing-xs: calc(var(--spacing-base) * 0.5);  /* 4px */
  --spacing-sm: var(--spacing-base);              /* 8px */
  --spacing-md: calc(var(--spacing-base) * 2);    /* 16px */
  --spacing-lg: calc(var(--spacing-base) * 3);    /* 24px */
  --spacing-xl: calc(var(--spacing-base) * 4);    /* 32px */
  --spacing-2xl: calc(var(--spacing-base) * 6);   /* 48px */
  --spacing-3xl: calc(var(--spacing-base) * 8);   /* 64px */
}
```

#### 语义化间距
```css
:root {
  /* 内容间距 */
  --spacing-content-xs: var(--spacing-xs);
  --spacing-content-sm: var(--spacing-md);
  --spacing-content-md: var(--spacing-lg);
  --spacing-content-lg: var(--spacing-xl);
  
  /* 布局间距 */
  --spacing-layout-sm: var(--spacing-xl);
  --spacing-layout-md: var(--spacing-2xl);
  --spacing-layout-lg: var(--spacing-3xl);
}
```

### 圆角系统

```css
:root {
  /* 圆角等级 */
  --radius-xs: 4px;     /* 小元素 */
  --radius-sm: 6px;     /* 按钮、输入框 */
  --radius-md: 8px;     /* 卡片内部元素 */
  --radius-lg: 12px;    /* 卡片 */
  --radius-xl: 16px;    /* 大卡片 */
  --radius-2xl: 20px;   /* 模态框 */
  --radius-3xl: 24px;   /* 主要容器 */
  --radius-full: 50%;   /* 圆形 */
}
```

### 阴影系统

```css
:root {
  /* 阴影等级 */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1), 
               0 1px 2px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07), 
               0 2px 4px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 
               0 4px 6px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1), 
               0 10px 10px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25);
  
  /* 内阴影 */
  --shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.06);
}
```

## 🎬 动画系统

### 缓动函数
```css
:root {
  /* 苹果标准缓动 */
  --ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-decelerate: cubic-bezier(0.0, 0.0, 0.2, 1);
  --ease-accelerate: cubic-bezier(0.4, 0.0, 1, 1);
  --ease-sharp: cubic-bezier(0.4, 0.0, 0.6, 1);
  
  /* 苹果特有缓动 */
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### 动画时长
```css
:root {
  /* 标准时长 */
  --duration-shortest: 150ms;  /* 小元素 */
  --duration-shorter: 200ms;   /* 中等元素 */
  --duration-short: 250ms;     /* 大元素 */
  --duration-standard: 300ms;  /* 标准 */
  --duration-long: 375ms;      /* 复杂动画 */
  --duration-longer: 400ms;    /* 页面转换 */
  --duration-longest: 500ms;   /* 大型转换 */
}
```

### 动画类型
```css
/* 淡入淡出 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

/* 滑动 */
@keyframes slideInUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

/* 缩放 */
@keyframes scaleIn {
  from { 
    opacity: 0;
    transform: scale(0.95);
  }
  to { 
    opacity: 1;
    transform: scale(1);
  }
}

/* 弹性 */
@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -8px, 0);
  }
  70% {
    transform: translate3d(0, -4px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
  }
}
```

## 🧩 组件规范

### 按钮系统

#### 主要按钮
```css
.btn-primary {
  background: linear-gradient(135deg, #007AFF 0%, #0056CC 100%);
  color: white;
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--text-style-body);
  font-weight: var(--font-weight-semibold);
  box-shadow: var(--shadow-md);
  transition: all var(--duration-short) var(--ease-standard);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}
```

#### 次要按钮
```css
.btn-secondary {
  background: var(--fill-primary);
  color: var(--label-primary);
  border: 1px solid var(--fill-secondary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--text-style-body);
  font-weight: var(--font-weight-medium);
  backdrop-filter: blur(20px);
  transition: all var(--duration-short) var(--ease-standard);
}
```

### 卡片系统

#### 基础卡片
```css
.card {
  background: var(--background-secondary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--fill-tertiary);
  transition: all var(--duration-standard) var(--ease-standard);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

#### 玻璃卡片
```css
.card-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  transition: all var(--duration-standard) var(--ease-standard);
}

@media (prefers-color-scheme: dark) {
  .card-glass {
    background: rgba(28, 28, 30, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
}
```

### 输入系统

#### 文本输入框
```css
.input {
  background: var(--background-tertiary);
  border: 1px solid var(--fill-secondary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: var(--text-style-body);
  color: var(--label-primary);
  transition: all var(--duration-shorter) var(--ease-standard);
}

.input:focus {
  border-color: var(--blue);
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
  outline: none;
}
```

## 📐 布局系统

### 网格系统
```css
.grid {
  display: grid;
  gap: var(--spacing-xl);
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-cols-4 {
  grid-template-columns: repeat(4, 1fr);
}

/* 响应式网格 */
.grid-responsive {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
```

### 弹性布局
```css
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}
```

### 容器系统
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
}

.container-sm {
  max-width: 768px;
}

.container-lg {
  max-width: 1440px;
}
```

## 📱 响应式设计

### 断点系统
```css
/* 移动设备优先 */
:root {
  --breakpoint-sm: 640px;   /* 小型设备 */
  --breakpoint-md: 768px;   /* 平板 */
  --breakpoint-lg: 1024px;  /* 笔记本 */
  --breakpoint-xl: 1280px;  /* 桌面 */
  --breakpoint-2xl: 1536px; /* 大屏 */
}

/* 媒体查询混合宏（示例） */
@media (min-width: 640px) {
  .sm\:text-lg {
    font-size: var(--text-style-headline);
  }
}

@media (min-width: 768px) {
  .md\:grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .lg\:grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### 触摸目标
```css
/* 最小触摸目标：44px */
.touch-target {
  min-height: 44px;
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## ♿ 可访问性

### 焦点状态
```css
.focus-visible {
  outline: 2px solid var(--blue);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* 移除默认焦点，使用自定义样式 */
button:focus:not(.focus-visible) {
  outline: none;
}
```

### 高对比度支持
```css
@media (prefers-contrast: high) {
  :root {
    --label-secondary: var(--label-primary);
    --fill-primary: rgba(120, 120, 128, 0.4);
  }
}
```

### 减少动画
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 🎨 使用指南

### 1. 颜色使用
- **主色调**：仅用于主要操作和强调
- **语义色**：错误(红)、成功(绿)、警告(橙)、信息(蓝)
- **中性色**：文本、背景、边框
- **支持深色模式**：自动适配用户偏好

### 2. 字体使用
- **标题层级**：严格遵循语义层级
- **正文文字**：保持17px基准大小
- **辅助文字**：使用较小尺寸和较低对比度

### 3. 间距使用
- **遵循8px网格**：所有间距为8的倍数
- **语义化使用**：内容间距 vs 布局间距
- **保持一致性**：相同元素使用相同间距

### 4. 动画使用
- **有意义的动画**：提供视觉反馈
- **自然的缓动**：使用苹果标准缓动函数
- **合适的时长**：不过快也不过慢
- **尊重用户偏好**：支持减少动画设置

---

*这个设计系统基于苹果的Human Interface Guidelines，旨在创建一致、直觉且优雅的用户体验。* 