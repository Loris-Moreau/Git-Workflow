## Step 1 - Make a Discord Webhook
1. Find the Discord channel in which you would like to send commits and other updates

2. In the settings for that channel, find the Webhooks option and create a new webhook.

> [!caution]
> Do **NOT** give this URL out to the public.
> Anyone or service can post messages to this channel, without even needing to be in the server.
> Keep it safe!

![WebhookDiscord](http://i.imgur.com/PZE2wFu.png)

## Step 2 - Set up the webhook on GitHub
1. Navigate to your repository on Github, and open the Settings

![Settings](http://i.imgur.com/4GNq1lu.png)

2. Select Add Webhook

![Add](http://i.imgur.com/ZvrBQdi.png)

3. Paste in the webhook URL and append `/github` to the end.
5. select the webhook events that you want to receive. You should only subscribe to the webhook events that you need.
6. set the type to `application/json`, then Add Webhook.

![WebhookSettings](http://i.imgur.com/mrf8Qmj.png)

4. Test it by updating something or starting the repository! If it works, you're all set!

![Star](http://i.imgur.com/ABlwTLf.png)
