<template>
  <div class="page-wrapper">
    <div class="page">
      <div class="page-inner">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
@import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
@import "../node_modules/@mdi/font/css/materialdesignicons.css";

body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  background: #cccccc;
  font-family: -apple-system, BlinkMacSystemFont, "Noto Sans SC",
    "Source Han Sans SC", "Helvetica Neue", Arial, "PingFang SC",
    "Hiragino Sans GB", STHeiti, "Microsoft YaHei", "Microsoft JhengHei",
    "Noto Sans CJK SC", "Source Han Sans CN", "Source Han Sans TC",
    "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif !important;
  font-size: 0.9em;
}

.page-inner {
  height: 100%;
  width: 100%;
}

.page-wrapper {
  background: #cccccc;
  margin: 0;
  padding: 0;
  -webkit-print-color-adjust: exact;
  box-sizing: border-box;
}

.resume {
  height: 100%;
  width: 100%;
}

.page {
  background: white;
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  page-break-after: auto;
  overflow: hidden;
}
</style>
