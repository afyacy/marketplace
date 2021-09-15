import { useForm } from "react-hook-form";
import Image  from "next/image";
import Head from 'next/head';
import { providers, signIn, getSession} from "next-auth/client";
import {useRouter} from "next/router";
import Navbar from "../components/layout/Navbar";



export default function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const loginUser = async (data) => {

      const result = await signIn('credentials', {
        redirect: false,
        email: data['email'],
        password: data['password'],
    });

    if (result.error !== null)
      {
          if (result.status === 401)
          {
              resultError = "Your username/password combination was incorrect. Please try again";
          }
          else
          {
            resultError = result.error;
          }
      }
      else
      {
        router.push("/home")
      }
    
  }
    return (
      // <!-- Login goes here -->
      <>
      <Head>
			  <title>MarketPlace - Login</title>
		  </Head>
      <Navbar />
      <div className="flex h-screen justify-center items-center">
        <div className="container w-full lg:w-full w-7/12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 shadow-lg">
          {/* Left Section */}
          <div>  
            <h3 className="ml-8 mt-16 text-2xl">Welcome Back!</h3>
            <form className="mt-8" onSubmit={handleSubmit(loginUser)}>
              <div className="sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="col-span-3 sm:col-span-2">
                      <div className="mt-1 flex rounded-full border text-teal ml-2">
                        <input
                          {...register("email", { required: true })}
                          type="text" 
                          name="email" 
                          id="email" 
                          className="p-3 pl-6 rounded rounded-full sm:text-sm w-full focus:outline-none focus:ring-2 focus:ring-teal-light focus:border-transparent" 
                          placeholder="Enter your email" />
                      </div>
                      {errors.email && <span className="ml-2">This field is required</span>}
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <div className="mt-1 flex rounded-full border text-teal ml-2">
                        <input
                        {...register("password", { required: true })}
                          type="password" 
                          name="password" 
                          id="password" 
                          className="p-3 pl-6 rounded-full sm:text-sm w-full focus:outline-none focus:ring-2 focus:ring-teal-light focus:border-transparent" 
                          placeholder="Enter password" />
                      </div>
                      {errors.password && <span className="ml-2">This field is required</span>}
                    </div> 
                    <div className="col-span-3 sm:col-span-2 ">
                      <div className="flex text-teal ml-2 mt-16">
                        <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium  bg-teal-light hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <span className="text-white  text-lg">Submit</span>
                        </button>
                      </div>
                    </div> 
                    <div className="text-center mt-2">
                        Don’t have an account? <a href="register" className="text-teal-light"> Sign Up</a>
                    </div>
                </div>
              </div>
            </form>

          </div>

          {/* Right Section */}
          <div className="flex items-center py-4 px-2">
              <Image src="/images/undraw_creative_team_r90h.svg" alt="Logo" className="h-8 w-10 mr-2" width="550px" height="500px"/>
          </div>
        </div>
      </div>
    </>
    )
  }

  signIn.getInitialProps = async(context) => {
    const {request, response} = context;
    const session = await (getSession({request}));

    if (session && response && session.accessToken) {
        response.writeHead(302, {
            Location: "/dashboard",
        })
        response.end();
        return;
    }
    return {
        session: undefined,
        providers: await providers(context), 
    }
}