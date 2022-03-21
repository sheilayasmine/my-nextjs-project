// import Input from "../../components/input";
// import Button from "../../components/button";
// import { Title, SubTitle } from "../../components/typography";
// import useForm from "./hooks/useForm";
// import { NoAuthProvider } from "../../providers/auth";

// const LoginContainer = () => {
//     const {
//         handleChange,
//         handleSubmit,
//         handleBlur,
//         hasErrors,
//         isValid,
//         values
//     } = useForm({
//         initialValues: {
//             email: '',
//             password: ''
//         }
//     });

//     return (
//     <NoAuthProvider>
//         <main className=" p-3 text-gray-700 h-screen max-w-md mx-auto flex flex-col space-y-3 justify-center items-center">
//             <div className="w-full">
//                 <div className="w-full py-5">
//                     <Title text="Sign In" />
//                     <Title />
//                     <SubTitle content="Welcome to BinarGram" />
//                 </div>
//                 <form className="w-full border p-5 rounded-2xl" onSubmit={handleSubmit}>
//                     <Input
//                     name="email"
//                     label="Email"
//                     type="text"
//                     placeholder="your@email.com"
//                     onChange={(value) => handleChange("email", value)}
//                     onBlur={(e) => handleBlur("email", e)}
//                     />
//                     {
//                     hasErrors("email") && (
//                     <div className="text-xs text-red-500 pb-3">{hasErrors("email")}</div>
//                     )
//                     }
//                     <Input
//                     name="password"
//                     label="Password"
//                     type="password"
//                     placeholder="Your secret password"
//                     onChange={(value) => handleChange("password", value)}
//                     onBlur={(e) => handleBlur("password", e)}
//                     />
//                     {
//                     hasErrors("password") && (
//                     <div className="text-xs text-red-500 pb-3">{hasErrors("password")}</div>
//                     )
//                     }
//                     <Button type="submit" label="Go to My Account" />
//                 </form>
//             </div>
//         </main>
//     </NoAuthProvider>
// )
// }

// export default LoginContainer;
// import Input from "../../components/input"; 
// import Button from "../../components/button"; 
// import { Title, SubTitle } from "../../components/typography"; 
// import useForm from "./hooks/useForm"; 
// import { NoAuthProvider } from "../../providers/auth"; 
 
// const LoginContainer = () => { 
//     const { 
//         handleChange, 
//         handleSubmit, 
//         handleBlur, 
//         hasErrors, 
//         isValid, 
//         values 
//     } = useForm({ 
//         initialValues: { 
//             email: '', 
//             password: '' 
//         } 
//     }); 
     
//     return ( 
//     <NoAuthProvider> 
//         <main className=" p-3 text-gray-700 h-screen max-w-md mx-auto flex flex-col space-y-3 justify-center items-center"> 
//             <div className="w-full"> 
//                 <div className="w-full py-5"> 
//                     <Title text="Sign In" /> 
//                     <Title /> 
//                     <SubTitle content="Welcome to BinarGram" /> 
//                 </div> 
//                 <form className="w-full border p-5 rounded-2xl" onSubmit={handleSubmit}> 
//                     <Input 
//                     name="email" 
//                     label="Email" 
//                     type="text" 
//                     placeholder="your@email.com" 
//                     onChange={(value) => handleChange("email", value)} 
//                     onBlur={(e) => handleBlur("email", e)} 
//                     /> 
//                     { 
//                     hasErrors("email") && ( 
//                     <div className="text-xs text-red-500 pb-3">{hasErrors("email")}</div> 
//                     ) 
//                     } 
//                     <Input 
//                     name="password" 
//                     label="Password" 
//                     type="password" 
//                     placeholder="Your secret password" 
//                     onChange={(value) => handleChange("password", value)} 
//                     onBlur={(e) => handleBlur("password", e)} 
//                     /> 
//                     { 
//                     hasErrors("password") && ( 
//                     <div className="text-xs text-red-500 pb-3">{hasErrors("password")}</div> 
//                     ) 
//                     } 
//                     <Button type="submit" label="Go to My Account" /> 
//                 </form> 
//             </div> 
//         </main> 
//     </NoAuthProvider> 
// ) 
// } 
 
// export default LoginContainer; 
 
import Input from "../../components/input"; 
import Button from "../../components/button"; 
import { Title, SubTitle } from "../../components/typography"; 
import { NoAuthProvider } from "../../providers/auth"; 
import { useFormik, getIn } from "formik"; 
import * as Yup from 'yup'; 
import { useLoginDispatcher } from '../../redux/reducers/login'; 
 
const validationSchema = Yup.object({ 
    email: Yup.string().required().email(), 
    password: Yup.string().required(), 
}); 
 
const initialValues = { 
    email: "", 
    password: "" 
}; 
 
const LoginContainer = () => { 
    const { login: { loading }, doLogin } = useLoginDispatcher(); 
 
    const onSubmit = async (values) => { 
 
        try { 
            const payload = { 
                identifier: values.email, 
                password: values.password, 
            }; 
            await doLogin(payload); 
            window.location.href = "/"; 
        } catch (error) { 
            alert(error); 
        } 
    } 
 
    const { 
        handleChange, 
        handleBlur, 
        handleSubmit, 
        errors, 
        touched, 
        } = useFormik({ 
        initialValues, 
        validationSchema, 
        onSubmit 
    }); 
 
    return ( 
        <NoAuthProvider> 
            <main className="p-3 text-gray-700 h-screen max-w-md mx-auto flex flex-col space-y-3 justify-center items-center"> 
                <div className="w-full"> 
                    <div className="w-full py-5"> 
                        <Title text="Sign In" />
                        <Title /> 
                        <SubTitle content="Welcome to BinarGram" /> 
                    </div> 
                    <form className="w-full border p-5 rounded-2xl" onSubmit={handleSubmit}> 
                        <Input 
                        name="email" 
                        label="Email" 
                        type="text" 
                        placeholder="your@email.com" 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        dataTestId="input-email" 
                        /> 
                         
                        {getIn(touched, "email") && getIn(errors, "email") && ( 
                        <div className="text-xs text-red-500 pb-3" data-testid="error-email"> 
                            {getIn(errors, "email")} 
                        </div> 
                        )} 
                         
                        <Input 
                        name="password" 
                        label="Password" 
                        type="password" 
                        placeholder="Your secret password" 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        dataTestId="input-password" 
                        /> 
                        {getIn(touched, "password") && getIn(errors, "password") && ( 
                        <div className="text-xs text-red-500 pb-3" data-testid="error-password"> 
                            {getIn(errors, "password")} 
                        </div> 
                        )} 
                         
                        <Button type="submit" label={loading ? 'Please wait...' : 'Go to My Account'} /> 
                         
                    </form> 
                </div> 
            </main> 
        </NoAuthProvider> 
    ) 
} 
 
export default LoginContainer;
