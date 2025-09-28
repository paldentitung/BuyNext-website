# BuyNext E-Commerce Site

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)

## Overview

This is a modern, responsive e-commerce website built with React.js, designed to showcase and sell a variety of products across categories like Clothing, Kitchen, Home, Footwear, and more. It features dynamic product listings, variation support (e.g., colors and sizes), ratings, and detailed product descriptions. The site is structured for easy navigation and scalability, with placeholder pages for additional sections like Marketing, Analytics, and Contact.

The project uses React Router for client-side routing, React Icons for UI elements, and Tailwind CSS for styling (inferred from class names in components). Product data is managed statically for demo purposes but can be easily integrated with a backend API.

## Features

- **Product Catalog**: Browse products by category with search and filtering capabilities (extendable).
- **Product Variations**: Support for color/size options with image swaps.
- **Dynamic Routing**: URL-based navigation to individual pages (e.g., `/marketing`, `/products`).
- **Responsive Design**: Mobile-first layout using Tailwind CSS classes.
- **User Engagement**: Star ratings, detailed descriptions, and pricing in cents for precision.
- **Placeholder Pages**: Customizable pages for company info, blog, terms, privacy, and support.
- **Navigation**: Back button integration with React Router's `useNavigate`.

## Tech Stack

- **Frontend**: React 18+, React Router DOM
- **Styling**: Tailwind CSS (via className utilities)
- **Icons**: React Icons (e.g., FaArrowLeft)
- **Data Management**: Static JSON-like array for products (extensible to Redux or Context API)
- **Build Tool**: Vite or Create React App (assumed)
- **Deployment**: Compatible with Vercel, Netlify, or GitHub Pages

## Installation

1. **Clone the Repository**:

   ```
   git clone https://github.com/paldentitung/BuyNext-website.git
   cd BuyNext-website
   ```

2. **Install Dependencies**:

   ```
   npm install
   # or
   yarn install
   ```

3. **Run the Development Server**:

   ```
   npm start
   # or
   yarn start
   ```

   The app will open at `http://localhost:3000`.

4. **Build for Production**:
   ```
   npm run build
   # or
   yarn build
   ```

## Usage

- **Browse Products**: Navigate to the main products page to view the catalog.
- **View Details**: Click on a product to see variations, ratings, and descriptions.
- **Static Pages**: Access pages like `/about`, `/contact`, or `/terms-of-service` via the router.
- **Customization**: Edit `productsData.js` to add/remove products or integrate with a CMS/API.

### Example Product Structure

Products are defined in `productsData.js` with fields like:

- `id`: Unique identifier
- `image`: Imported asset path
- `name`: Product title
- `rating`: `{ stars: number, count: number }`
- `category`: e.g., "Clothing", "Kitchen"
- `priceCents`: Price in cents (e.g., 1499 = $14.99)
- `description`: Detailed text
- `variations`: Array of `{ name: string, image: string }`

## Project Structure

```
src/
├── assets/
│   └── images-folder/
│       ├── products/
│       └── variations/
├── components/
│   └── PlaceHolderPage.jsx  # Dynamic content pages
├── data/
│   └── productsData.js      # Product catalog
├── App.jsx                  # Main app with routing
└── index.js                 # Entry point
```

## Contributing

1. Fork the project.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

We welcome contributions for new features, bug fixes, or UI improvements!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Resources

- **Product Images**: [UserSimpleDev](https://usersimpledev.com/) – Product images used in this project
- **Images & Graphics**:
  - [Unsplash](https://unsplash.com/) – Free high-quality photos
  - [Freepik](https://www.freepik.com/) – Free and premium vector graphics
- **Icons**:
  - [React Icons](https://react-icons.github.io/react-icons/) – Icons used in this project

## Contact

For questions or support, reach out via the `/contact` page or email: [paldendorjetitung@gmail.com](mailto:paldendorjetitung@gmail.com)

---

_Built with ❤️ on September 28, 2025_
