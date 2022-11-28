function $1({className, src}) {
    // if(!src.startsWith("/")) src = "/" + src;
    // src = window.location.pathname  + src;
    return (
        <img className={className} src={src}/>
    );
}

export default $1;