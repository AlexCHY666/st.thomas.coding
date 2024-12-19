#!/bin/bash

REPO_PATH="/Users/hello./Library/Mobile Documents/com~apple~CloudDocs/St. Thomas/Coding/stthomas.lbp-sb.com.git"

cd "$REPO_PATH"

git pull origin main

git add .

git commit -m "Auto-update on $(date)"

git push origin main

echo "Pushed to GitHub"
