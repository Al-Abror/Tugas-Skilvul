mkdir git-basic
cd git-basic
touch first.txt
git init .
git add first.txt
git commit -m "adding first.txt"
git log
touch second.txt
git add second.txt 
git commit -m "adding second.txt"
rm first.txt
git add .
git commit -m "remove first.txt"
git log