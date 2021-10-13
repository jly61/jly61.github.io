#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
# echo 'b.xugaoyi.com' > CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:jly61/jly61.github.io.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://jly61:${GITHUB_TOKEN}@github.com/jly61/jly61.github.io.git
  git config --global user.name "jly"
  git config --global user.email "896503709@qq.com"
fi

git init
git add -A
git commit -m "部署"
git push -f githubUrl master:gh-pages # 推送到github gh-pages分支

cd -
rm -rf docs/.vuepress/dist
