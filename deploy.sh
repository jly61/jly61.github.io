#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
# echo 'b.xugaoyi.com' > CNAME

git init
git add -A
git commit -m "部署"
git push -f git@github.com:jly61/jly61.github.io.git master:gh-pages # 推送到github gh-pages分支

cd -
rm -rf docs/.vuepress/dist
