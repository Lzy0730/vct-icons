[![npm](https://img.shields.io/npm/v/remixicon.svg?labelColor=4A4A4A&color=006AFF&style=flat-square)](https://www.npmjs.com/package/vct-icons)
[![downloads](https://img.shields.io/npm/dt/remixicon.svg?labelColor=4A4A4A&color=23AF5F&style=flat-square)](https://www.npmjs.com/package/vct-icons)

简体中文

Vct Icons 是一套适配 Vue Common Template 的开源图标库。基于 Remix Icon 封装，额外支持本地 svg 图片，但需要安装 svg-sprite-loader 并指定目录。
图标以 24x24 网格为基准，分为“线性图标”和“面型图标”两种风格。所有的图标均可免费用于个人项目和商业项目，Enjoy it~

[![icon demo](http://cdn.remixicon.com/preview.svg)](https://remixicon.com)

前往 Remix Icon 官网查看整套图标库 [remixicon.com](https://remixicon.com).

## 使用说明

### 基本用法

直接在[remixicon.com](https://remixicon.com)点击您想要的图标, 在打开的图标窗口中复制图标名称作为组件 icon 属性值即可。

#### 安装引入

```
npm install vct-icons --save
```

```
import VctIcon from 'vct-icons'
import 'vct-icons/fonts/vct-icons.css'
Vue.use(VctIcon)
```

#### 使用

引入 Vct Icons 图标库后，就可以在 web 项目中使用了，只要在使用图标的时候将图标名称作为 icon 属性值就可以了。规则：icon="图标名称"

```html
<vct-icon icon="admin-line" />
```

#### 大小

size="图标大小"

```html
<div style="font-size: 24px;">
  <vct-icon icon="admin-line" size="ri-fw" />
  <!-- fixed width -->
  <vct-icon icon="admin-line" size="ri-xxs" />
  <!-- 0.5em -->
  <vct-icon icon="admin-line" size="ri-xs" />
  <!-- 0.75em -->
  <vct-icon icon="admin-line" size="ri-sm" />
  <!-- 0.875em -->
  <vct-icon icon="admin-line" size="ri-1x" />
  <!-- 1em -->
  <vct-icon icon="admin-line" size="ri-lg" />
  <!-- 1.3333em -->
  <vct-icon icon="admin-line" size="ri-xl" />
  <!-- 1.5em -->
  <vct-icon icon="admin-line" size="ri-2x" />
  <!-- 2em -->
  <vct-icon icon="admin-line" size="ri-3x" />
  <!-- 3em -->
  ...
  <vct-icon icon="admin-line" size="ri-10x" />
  <!-- 10em -->
</div>
```

> 您也可以在 [`remixicon.css`](https://github.com/Remix-Design/RemixIcon/blob/master/fonts/remixicon.css) 中查看到更多的尺寸定义相关信息。
