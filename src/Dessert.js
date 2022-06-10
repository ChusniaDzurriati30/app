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
      name: 'Dessert Keju',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1-dfkaKJkJpCbm3tELRx3MOKe_dTawCTO',
      imageAlt: "7 VARIAN MENU HOTPLATE",
      price: '17k',
    },
    {
      id: 1,
      name: 'Dessert Kurma',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1D1OsJThkQdtNemoEYgSVrmJQXjGraoQn',
      imageAlt: "7 VARIAN MENU HOTPLATE",
      price: '18k',
    },
    {
      id: 1,
      name: 'Dessert Choco Beng beng',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1ehBMWAfGag-025UKTyYI5giP8uxSXxoq',
      imageAlt: "7 VARIAN MENU HOTPLATE",
      price: '20k',
    },
    {
      id: 1,
      name: 'Croffle ',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1wXCoQVO7rinPabi_9dKr8z2ciE7pH6xC',
      imageAlt: "7 VARIAN MENU HOTPLATE",
      price: '5k-10k',
    },
    {
      id: 1,
      name: 'Croffle ',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1cWSGsMSNZ4wPgTSvXaopvzGjBD_DP4jD',
      imageAlt: "7 VARIAN MENU HOTPLATE",
      price: '5k-10k',
    },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-yellow-400">
          <Navbar/>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Dessert Box And Croffle</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-2000 object-center object-cover lg:w-2000 lg:h-2000"
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
  