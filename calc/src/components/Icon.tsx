type IconClass = {
    className:string
}

export default function Icon ({className}:IconClass){
    return (
        <>
        <i className={className}></i>
        </>
    );
}