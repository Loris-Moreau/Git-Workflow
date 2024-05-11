## Step 1 - Make a Discord Webhook

1. Find the Discord channel in which you would like to send commits and other updates

2. In the settings for that channel, find the Webhooks option and create a new webhook.

> [!caution]
> Do **NOT** give this URL out to the public.
> Anyone or Anything can post messages to this channel, without even needing to be in the server.
> Keep it safe !

<p align="center">
  <img src=https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Webnook%20discord%20creation.png>
</p>

## Step 2 - Set up the webhook on GitHub

1. Navigate to your repository on Github, and open the Settings

<p align="center">
  <img src=https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Webnook%20git%20creation.png>
</p>

2. Select Add Webhook

<p align="center">
  <img src=https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Webnook%20git%20creation%202.png>
</p>

3. Paste in the webhook URL and append `/github` to the end.

4. select the webhook events that you want to receive, *You should only subscribe to the webhook events that you need.*

5. set the type to `application/json`, then Add Webhook.

<p align="center">
  <img src=https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Webnook%20git%20creation%203.png>
</p>

4. Test it by updating something or starting the repository! If it works, you're all set!

<p align="center">
  <img src=https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Webnook%20git%20testing.png>
</p>
