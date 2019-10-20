server: ruby -run -e httpd website/ -p $PORT || php -S localhost:$PORT
markdown: fswatch -0 pages | xargs -0 -I {} basename {} .md | xargs -I % make html/%.html html/%/index.html
parcel: npx parcel watch $FILES --out-dir website
