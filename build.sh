#!/bin/bash

ssh_profile="root@boz.app.br"
domain="nandoburgos.dev"
path="/var/www/${domain}"

# Build your application
# yarn build

echo 'Uploading build to server'
ssh ${ssh_profile} "mkdir -p $path"
scp -r build/* ${ssh_profile}:${path}
ssh ${ssh_profile} "sudo chown -R www-data:www-data ${path}/*"

echo "Checking for existing Nginx configuration"
if ssh ${ssh_profile} "[ -f /etc/nginx/sites-available/${domain} ]"; then
    echo "Nginx configuration for ${domain} already exists. Deployment finished."
    exit 0
fi

echo "Creating Nginx configuration for ${domain}"
ssh ${ssh_profile} 'bash -s' << EOF
cat > /etc/nginx/sites-available/${domain} << EONGINX
server {
    listen 80;
    listen [::]:80;

    server_name ${domain};

    root ${path};
    index index.html;

    location / {
        try_files \$uri \$uri/ =404;
    }
}
EONGINX

ln -s /etc/nginx/sites-available/${domain} /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
EOF

# echo "Issuing SSL certificate with Certbot"
# ssh ${ssh_profile} "sudo certbot --nginx -d ${domain} -d www.${domain}"

echo "Deployment completed successfully."
