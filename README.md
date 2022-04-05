# resume

Based on brilliant project [best resume ever](https://github.com/salomonelli/best-resume-ever).

## 如何使用

Fork 或 Clone 本仓库，安装依赖：

```bash
yarn
```

修改 `src/resume` 中的信息为您的简历信息。

其中：`data-default.yml` 存放公有信息，在使用 `data-cn.yml` 或 `data-en.yml` 生成不同语言的简历页面时，将自动合并其中的内容。例如：

```yml
# data-default.yml
experience:
- timeperiod: 2022.02 - 2022.04
  website: https://www.company-homepage.com
  internship: true

# data-en.yml
experience:
- company: Company Name
  position: Your position
  description: What do you do here?

# 将合并为
experience:
- timeperiod: 2022.02 - 2022.04
  website: https://www.company-homepage.com
  internship: true
  company: Company Name
  position: Your position
  description: What do you do here?
```

使用如下命令在本机即时预览生成简历的结果：

``` bash
yarn serve
```

使用如下命令在 `export` 目录下导出您的简历为 PDF 和 JPEG 格式的文件。

``` bash
yarn export
```

## 修复代码格式

``` bash
yarn lint
```
