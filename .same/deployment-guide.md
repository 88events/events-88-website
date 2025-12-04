# Easy Deployment Guide

## How to Update Your Live Website

### Step 1: Make Your Changes
Edit any files in Same as usual.

### Step 2: Deploy to Live Site
Run this ONE command in the terminal:

```bash
cd /home/project/events-88 && ./deploy.sh "describe your changes"
```

**Example:**
```bash
cd /home/project/events-88 && ./deploy.sh "updated gallery images"
```

### Step 3: Wait 2-3 Minutes
Netlify will automatically detect the update and redeploy your site.

Check deployment status at: https://app.netlify.com

---

## That's It!

Your workflow:
1. Edit files in Same ✏️
2. Run `./deploy.sh "your message"` 🚀
3. Site updates automatically in 2-3 min ✅

---

## Current Setup

- **GitHub Repo**: https://github.com/88events/events-88
- **Live Site**: https://events-88.com
- **Netlify Dashboard**: https://app.netlify.com
