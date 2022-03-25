function Avatar({ url, className }) {
	return <img className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`} loading="lazy" src={url} alt="Profile Picture" />;
}
export default Avatar;
