# Food Delivery App Deployment Guide

This guide provides instructions for deploying both the frontend and backend of the Food Delivery application for free.

## Prerequisites

- GitHub account
- MongoDB Atlas account (already set up)
- Stripe account (if using payment functionality)

## Backend Deployment (Render.com)

1. **Create a Render.com account**
   - Go to [Render.com](https://render.com/) and sign up for a free account

2. **Deploy the backend**
   - Click "New" and select "Web Service"
   - Connect your GitHub repository or upload files directly
   - Configure the service:
     - Name: `food-delivery-backend` (or choose your preferred name)
     - Environment: Node
     - Root Directory: `backend` (if your repository contains both frontend and backend)
     - Build Command: `npm install`
     - Start Command: `node server.js`
     - Select the free plan

3. **Configure environment variables**
   - In the Render dashboard, go to your web service
   - Click on "Environment" tab
   - Add the following environment variables:
     ```
     JWT_SECRET=your_jwt_secret_key
     STRIPE_SECRET_KEY=your_stripe_secret_key
     MONGODB_URI=your_mongodb_connection_string
     FRONTEND_URL=your_frontend_url (add this after deploying the frontend)
     ```

4. **Deploy the service**
   - Click "Create Web Service"
   - Wait for the deployment to complete (this may take a few minutes)
   - Note the URL provided by Render (e.g., `https://food-delivery-backend.onrender.com`)

## Frontend Deployment (Netlify)

1. **Create a Netlify account**
   - Go to [Netlify.com](https://www.netlify.com/) and sign up for a free account

2. **Deploy the frontend**
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository or upload files directly
   - Configure the build settings:
     - Base directory: `frontend` (if your repository contains both frontend and backend)
     - Build Command: `npm run build`
     - Publish Directory: `dist` (for Vite projects)

3. **Configure environment variables**
   - In the Netlify dashboard, go to your site settings
   - Navigate to "Build & deploy" → "Environment"
   - Add the following environment variables:
     ```
     VITE_API_URL=your_backend_url (e.g., https://food-delivery-backend.onrender.com)
     ```

4. **Deploy the site**
   - Click "Deploy site"
   - Wait for the deployment to complete
   - Your site will be available at a URL like `https://your-site-name.netlify.app`

5. **Update backend with frontend URL**
   - Go back to Render.com and update the `FRONTEND_URL` environment variable with your Netlify URL

## Alternative: Vercel for Frontend Deployment

If you prefer using Vercel instead of Netlify:

1. **Create a Vercel account**
   - Go to [Vercel.com](https://vercel.com/) and sign up for a free account

2. **Deploy the frontend**
   - Click "New Project"
   - Import your GitHub repository
   - Configure the project settings:
     - Framework Preset: Vite
     - Root Directory: `frontend` (if your repository contains both frontend and backend)
     - Build Command: `npm run build` (should be auto-detected)
     - Output Directory: `dist` (should be auto-detected)

3. **Configure environment variables**
   - Add the same environment variables as mentioned for Netlify

## Notes and Limitations

- **Free Tier Limitations**:
  - Render's free tier web services go to sleep after 15 minutes of inactivity
  - When a new request comes in, the service will wake up, but there might be a delay of up to 30 seconds for the first request
  - Free tier includes 750 hours of runtime per month

- **Database**:
  - Continue using your existing MongoDB Atlas cluster (free tier provides 512MB storage)
  - Make sure your MongoDB Atlas cluster is configured to accept connections from any IP (0.0.0.0/0) or specifically from Render's IP range

- **Static Files and Images**:
  - For the `uploads` directory that serves images, you might need to implement a solution for file storage:
    - Option 1: Use Cloudinary or AWS S3 for image storage (recommended for production)
    - Option 2: For simplicity, keep using local storage on Render, but note that files will be lost on redeployments

## Troubleshooting

- **CORS Issues**: If you encounter CORS errors, verify that the `FRONTEND_URL` is correctly set in your backend environment variables
- **Connection Issues**: Ensure your MongoDB connection string is correct and the user has the proper permissions
- **Build Failures**: Check the build logs for errors; common issues include missing dependencies or build script errors

For more detailed information, refer to the documentation of each platform:
- [Render Documentation](https://render.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs) 