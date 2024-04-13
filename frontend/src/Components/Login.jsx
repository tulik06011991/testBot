import React from 'react'

const Login = () => {
  return (
    <div>
      
      <div class="h-screen bg-indigo-100 flex justify-center items-center">
        <div class="lg:w-2/5 md:w-1/2 w-2/3">
          <form class="bg-white p-10 rounded-lg shadow-lg min-w-full">
            <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Login</h1>
            
            <div>
              <label class="text-gray-800 font-semibold block my-3 text-md" for="email">Email</label>
              <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="email" id="email" placeholder="@email" />
            </div>
            <div>
              <label class="text-gray-800 font-semibold block my-3 text-md" for="password">Password</label>
              <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="password" id="password" placeholder="password" />
            </div>
            <div>
              <label class="text-gray-800 font-semibold block my-3 text-md" for="confirm">Confirm password</label>
              <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="confirm" id="confirm" placeholder="confirm password" />
            </div>
            <button type="submit" class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Login</button>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
