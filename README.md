#Prophet
***
If a task is getting repetetive - why not automate it?
We *at Elkia* found ourselves weekly advertising our server on a specific subreddit to grow our playerbase - now we don't need to anymore.

This script is meant to be ran by a cron-job once a week...

>Every monday - at 9:05AM
>
>`pm2 start app.js --cron "5 9 * * 1" --name Prophet`
