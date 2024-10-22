docker build -t gcr.io/koacloud-437404/website:uat .  --platform linux/amd64
docker push gcr.io/koacloud-437404/website:uat
# gcloud run deploy --image gcr.io/koacloud-437404/website --platform managed