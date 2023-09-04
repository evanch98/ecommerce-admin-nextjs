# ecommerce-admin-nextjs

Start Date: 26<sup>th</sup> July, 2023.

# Description

The E-Commerce Admin Dashboard with Stripe Integration is a robust web application designed to streamline and enhance the management of an e-commerce website. Developed using cutting-edge technologies like Next JS, TypeScript, Tailwind CSS, Shadcn UI, Planet Scale, Prisma, zustand, clerk auth, Cloudinary, and Stripe, this comprehensive dashboard provides administrators with a powerful toolkit to oversee and optimize various aspects of the online store.

# Key Features

- The admin dashboard allows the website's administrators to create, update, and delete store information.
- Admins can efficiently manage the billboards or banners that appear on the website's homepage. They can upload, update, and remove promotional banners to attract customers and highlight ongoing offers or sales.
- With the admin dashboard, managing product categories, sizes, and colors becomes a breeze. Administrators can add, edit, or delete categories, sizes, and colors, enabling the website to efficiently organize and display products.
- To enable smooth communication between the front-end web application and the back-end, the dashboard incorporates API routes. This ensures that product information is seamlessly fetched and displayed on the customer-facing website.
- The admin dashboard utilizes Clerk auth for secure authentication, ensuring that only authorized personnel can access and manage sensitive information.
- With Planet Scale and Prisma integration, the application benefits from a robust and scalable database, capable of handling growing product inventories and increasing website traffic.
- The heart of any e-commerce website lies in its product management capabilities. The admin dashboard empowers administrators to add new products, update existing ones, archive out-of-stock products, mark products as featured products, and remove products that are no longer available. They can set product details such as name, category, price, images, and other product-specific attributes.
- Efficient order management is crucial for any e-commerce website. The dashboard provides comprehensive tools to view, process, and manage incoming orders.
- Seamlessly integrate Stripe as the payment gateway, allowing customers to make secure and convenient online payments. Admins can view transaction history and ensure a seamless checkout experience for shoppers.

# Testing the Project

To test the project, download the zip file and open it in the editor of your choice.
Then, run `npm install` in the terminal to install the dependencies.

```bash
npm install
```

After installing the required dependencies, you will have to create a `.env` file at the root of your project folder.
The required environment variables are as follows.

```text
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
DATABASE_URL=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
STRIPE_API_KEY=
FRONTEND_STORE_URL=
STRIPE_WEBHOOK_SECRET=
```

Follow the steps from the official documentation for [Clerk](https://clerk.com/docs/quickstarts/nextjs), [Planet Scale](https://planetscale.com/docs/tutorials/connect-nextjs-app), [Cloudinary](https://cloudinary.com/documentation/how_to_integrate_cloudinary) and [Stripe](https://stripe.com/docs/development) to get the values for the enviroment variables, `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KET`, `DATABASE_URL`, `UPLOADTHING_SECRET`, and `UPLOADTHING_APP_ID`.
After completing the above steps, run `npm run dev` to test the project.

```bash
npm run dev
```

If you do not want to go through all the troubles, you can always test the [demo website](https://ecommerce-admin-nextjs-mu.vercel.app/) for this project.
