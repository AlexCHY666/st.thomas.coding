path_website="/Users/hello./Library/Mobile Documents/com~apple~CloudDocs/St. Thomas/Coding/stthomas.lbp-sb.com.git"

cd "$path_website"

git pull origin main

git add .

git commit -m "Auto-update on $(date)"

git push origin main

echo "Pushed to GitHub"
