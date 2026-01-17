# EmailJS Deployment Guide

## 🚀 Deploying to Vercel or Render.com

This guide will help you deploy your portfolio with EmailJS integration securely.

---

## 📝 Prerequisites

Before deployment, you need to complete your EmailJS setup:

### 1. Create Email Template on EmailJS

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to **Email Templates**
3. Click **Create New Template**
4. Use this template ID: `template_contact`
5. Template content should include these variables:
   ```
   From: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```
6. Save the template

### 2. Get Your API Keys

You already have:
- **Public Key**: `mB6iKJ-4Yt3V_gobk`
- **Service ID**: `service_fmbwr4g`

---

## 🔐 Environment Variables Setup

### For Vercel:

1. Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project → **Settings** → **Environment Variables**
3. Add these variables:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_fmbwr4g
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=mB6iKJ-4Yt3V_gobk
```

4. Click **Save**
5. Redeploy your application

### For Render.com:

1. Go to your service on [Render Dashboard](https://dashboard.render.com/)
2. Select your web service → **Environment**
3. Add these environment variables:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_fmbwr4g
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=mB6iKJ-4Yt3V_gobk
```

4. Click **Save Changes**
5. Render will automatically redeploy

---

## 🧪 Testing

### Local Testing:
```bash
npm run dev
```
Visit `http://localhost:3000` and test the contact form.

### Production Testing:
1. Fill out the contact form on your deployed site
2. You should receive an email at `batuhansimsarjs@gmail.com`
3. Check for success/error messages on the form

---

## ⚠️ Important Notes

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Template ID**: Make sure your EmailJS template is named `template_contact`
3. **Email Limits**: Free plan has 200 emails/month
4. **CORS**: EmailJS handles CORS automatically, no extra config needed

---

## 🔧 Troubleshooting

### Email not sending?
- Check EmailJS dashboard for error logs
- Verify template ID matches `template_contact`
- Ensure environment variables are set correctly
- Check browser console for errors

### Form not working after deployment?
- Verify environment variables are added to deployment platform
- Redeploy after adding env vars
- Check that service is connected to your Gmail account

---

## 📚 Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Render Environment Variables](https://render.com/docs/environment-variables)
