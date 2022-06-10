import Navbar from './Navbar' ;
export default function Example() {
  return (
<div class="w-full md:w-1000 md:max-w-full mx-auto bg-yellow-400">
  <Navbar/>
  <div class="p-6 border border-gray-300 sm:rounded-md">
    <form method="POST" action="https://herotofu.com/start">
      <label class="block mb-6">
        <span class="text-gray-700">Your name</span>
        <input
          type="text"
          name="name"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Joe Bloggs"
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Email address</span>
        <input
          name="email"
          type="email"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="joe.bloggs@example.com"
          required
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Message</span>
        <textarea
          name="message"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          rows="3"
          placeholder="Tell us what you're thinking about..."
        ></textarea>
      </label>
      <div class="mb-6">
        <button
          type="submit"
          class="
            h-10
            px-5
            text-yellow-400
            bg-white
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-yellow-100
          "
        >
          Contact Us
        </button>
      </div>
      <div>
      <div class="mt-2 text-gray-700 text-right text-xs">
        
        <a href="https://herotofu.com" class="hover:underline" target="_blank"
          >Chusniaaa</a
        >
        <p className="mt-2 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-x2 sm:mx-auto md:mt-5 md:text-x0.5 lg:mx-0">
           @Hotplate.id 
            </p>
        <p className="mt-2 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-x2 sm:mx-auto md:mt-5 md:text-x0.5 lg:mx-0">
           @Kopidessert
            </p>
            <p className="mt-2 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-x2 sm:mx-auto md:mt-5 md:text-x0.25 lg:mx-0">
          Tweet hotplatekopi 
            </p>

        </div>
      </div>
    </form>
  </div>
</div>
)
}