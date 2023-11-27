if [ -z "$LOCATION" ]; then
  echo "The 'LOCATION' variable is not set. Skipping the script. Make sure that LOCATION variable is added in env file."
  exit 1
fi

npm install
npm run build

echo "";
echo "RSYNCING NEW BUILD";
echo "rsync -ahz --progress --exclude={'pipelines','deployment','bitbucket-pipelines.yml'} --chmod=Du=rwx,Dg=rx,Do=rx,Fu=rw,Fg=r,Fo=r -e 'sshpass -p'$HOST_PASSWORD' ssh -o StrictHostKeyChecking=no -o ProxyCommand="sshpass -p'$PROXY_HOST_PASSWORD' ssh -o StrictHostKeyChecking=no -W %h:%p $USER@$PROXY_HOST"' $BITBUCKET_CLONE_DIR/. $USER@$SERVER_HOST:$LOCATION";
echo "==================";
rsync -ahz --progress --exclude={'pipelines','deployment','bitbucket-pipelines.yml'} --chmod=Du=rwx,Dg=rx,Do=rx,Fu=rw,Fg=r,Fo=r -e 'sshpass -p'$HOST_PASSWORD' ssh -o StrictHostKeyChecking=no -o ProxyCommand="sshpass -p'$PROXY_HOST_PASSWORD' ssh -o StrictHostKeyChecking=no -W %h:%p $USER@$PROXY_HOST"' $BITBUCKET_CLONE_DIR/. $USER@$SERVER_HOST:$LOCATION --delete-after

# Proxying through jump to restart service on the environment box
echo "";
echo "Restarting PM2";
echo "==================";
sshpass -p$HOST_PASSWORD ssh -o StrictHostKeyChecking=no -o ProxyCommand="sshpass -p$PROXY_HOST_PASSWORD ssh -o StrictHostKeyChecking=no -W %h:%p $USER@$PROXY_HOST" $USER@$SERVER_HOST "source ~/.bash_profile && pm2 restart $PROJECT_NAME"
