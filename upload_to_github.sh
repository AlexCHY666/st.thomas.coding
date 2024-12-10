#!/bin/bash

# 定义仓库路径
REPO_PATH="/Users/hello./Library/Mobile Documents/com~apple~CloudDocs/St. Thomas/Coding/Website.git"

# 切换到仓库路径
cd "$REPO_PATH"

# 拉取最新更改
git pull origin main

# 添加更改
git add .

# 提交更改
git commit -m "Auto-update on $(date)"

# 推送到 GitHub
git push origin main

echo "Changes have been pushed to GitHub!"
