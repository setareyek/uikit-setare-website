
# uikit-setare-website

uikit-setare-website is a customizable UI kit built with Tailwind CSS, React, and TypeScript, designed to streamline the development of modern, responsive web applications. This library comes with a rich set of reusable components, enabling developers to quickly prototype and build consistent UIs. It also includes a Storybook for easy component visualization and testing.


## Features

- Tailwind CSS Integration: Fully styled components with utility-first classes from Tailwind CSS.
- TypeScript Support: Typed components for enhanced developer experience and type safety.
- React Components: A set of reusable, well-documented React components.
- Storybook: Visualize and interact with components in isolation using Storybook.
- Webpack Setup: Optimized build process using Webpack for efficient bundling.



## Installation

Install my-project with npm

```bash
  npm install uikit-setare-website
  cd uikit-setare-website
```

Import the components you need into your project:


# Usage
```javascript
import React from 'react';
import { Button } from 'uikit-setare-website';

const MyComponent = () => {
  return (
    <div>
      <Button onClick={() => alert('Button clicked!')}>
        Click Me
      </Button>
    </div>
  );
};

export default MyComponent;
```

# Tailwind CSS Setup
If you want to use tailwind classes in components ensure your project is set up to use Tailwind CSS. If you're starting from scratch, you can follow the official Tailwind CSS installation guide.
uikit-setare-website is designed to be flexible and customizable. You can easily extend or override component styles using Tailwind's utility classes.

```javascript
import React from 'react';
import { Button } from 'uikit-setare-website';

const CustomButton = () => {
  return (
    <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Custom Button
    </Button>
  );
};

export default CustomButton;
```

# Storybook
Explore the components and their variations interactively using Storybook.

To start Storybook locally:
```bash
npm run storybook
```
Once started, you can access Storybook at http://localhost:6006 and browse through the available components.

# License
This project is licensed under the MIT License - see the LICENSE file for details.



    
## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Authors

- [@whossein](https://www.github.com/whossein)
- [@rkamely](https://www.github.com/rkamely)



## Tech Stack

**Client:** React, TailwindCSS, Typescript, webpack




## Used By

This project is used by the following companies:

- Setareh aval



![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

