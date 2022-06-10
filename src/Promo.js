/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Navbar from './Navbar' ;
const products = [
    {
      id: 1,
      name: 'Croffle',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=12STskbpS5R9LZYNsPmhlxQp4xvL-OPYN',
      imageAlt: "Varian Menu Hotplate",
      price: '5k-10k',
    },
    {
        id: 1,
        name: 'Menu Bukber',
        href: '#',
        imageSrc: 'https://drive.google.com/uc?export=view&id=108rHS8lbYY0YBMj8PRlUvwQAUGI4yX_u',
        imageAlt: "Menu bukber",
        price: 'Paket 15k-100k',
      },
      {
        id: 1,
        name: 'promo liburan',
        href: '#',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1b3ZT0sNsxdaYWzPGI0FTjOZd6k1sslNA',
        imageAlt: "Menu bukber",
        price: 'Paket 10k-25k',
      },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-yellow-400">
          <Navbar/>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Promo </h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-250 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-2000 h-2000 object-center object-cover lg:w-2000 lg:h-2000"
                    
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  