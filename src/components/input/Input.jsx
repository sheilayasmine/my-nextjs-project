// const Input = ({
//     label,
//     name,
//     type,
//     placeholder,
//     }) => {
//     return (
//         <label htmlFor={name} className="block w-full mb-3">
//             <div className="font-bold mb-1">{label}</div>
//             <input
//                name={name}
//                type={type}
//                className="py-2 focus:ring-0 focus:outline-none border-b w-full"
//                placeholder={placeholder}
//             />
//         </label>
//         )
//     }

// export default Input;

// const Input = ({
//     label,
//     name,
//     type,
//     placeholder,
//     onChange,
//     onBlur
// }) => {

//     return (
//     <label htmlFor={name} className="block w-full mb-1">
//         <div className="font-bold mb-1">{label}</div>
//         <input
//         name={name}
//         type={type}
//         className="py-2 focus:ring-0 focus:outline-none border-b w-full"
//         placeholder={placeholder}
//         onChange={(e) => onChange(e.target.value)}
//         onBlur={(e) => onBlur(e)}
//         />
//     </label>
//     )
// }

// export default Input;

const Input = ({ label, name, type, onChange, onBlur, placeholder, dataTestId }) => {
  return (
    <label htmlFor={name} className="block w-full mb-3">
      <div className="font-bold mb-1">{label}</div>
      <input type={type} name={name} className="py-2 focus:ring-0 focus:outline-none border-b w-full" placeholder={placeholder} onChange={onChange} onBlur={onBlur} data-testid={dataTestId} />
    </label>
  );
};

export default Input;
