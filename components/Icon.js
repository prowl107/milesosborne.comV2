
const Icon = (props) => {
    return <i className={`${props.icon} ${props.className} transition duration-500 ease-in-out hover:text-blue-400 transform hover:-translate-y-1 hover:scale-110 ...`} />;
   };
    
   export default Icon;