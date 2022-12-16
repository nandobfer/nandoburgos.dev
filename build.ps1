yarn build
Write-Output 'Uploading files to oracle'
scp -r build/* nandoburgos.dev:/var/www/nandoburgos.dev/