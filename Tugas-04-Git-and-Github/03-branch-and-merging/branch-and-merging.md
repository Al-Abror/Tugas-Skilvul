1. What does git clean do?
    menghapus file yang tidak terlacak di direktori repo (file yang ada di direktori repo tetapi belum ditambahkan ke indeks repo dengan ekstensi)

2. What do the -d and -f flags for git clean do?
    -d akan menghapus setiap direktori tidak terlacak, secara default akan mengabaikan direktori.
    -f atau --force akan menghapus dengan paksa file yang tidak terlacak dari direktori saat ini

3. What git command creates a branch?
    git branch branchName

4. What is the difference between a fast-forward and recursive merge?
    fast-forward -> merging yang dilakukan ketika kedua branch tersebut berada pada jalur commit yang sama
    recursive merge -> ketika kedua branch tersebut tidak berada dalam satu jalur

5. What git command changes to another branch?
    git checkout branchTujuan

6. How do you remove modified or deleted files from the working directory?
    git add -u    

7. What git command deletes a branch?
    git branch -d branchName

8. What does the git diff command do?
    membandingkan perbedaan yang baru saja dilakukan dengan revisi/commit terakhir.

9. How do you remove files from the staging area?
    git rm fileName

10. How do merge conflicts happen?
    pada cabang yang dikerjakan ada file yang sama dengan cabang lain. Kemudian, saat digabungkan terjadi bentrok.