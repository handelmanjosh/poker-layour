type PlayerProps = {
    className?: string;
}

export default function Player({className}: PlayerProps) {
    return (
        <div className={`${className ? "absolute" : ""} bg-black rounded-full w-[30px] h-[30px] md:w-[60px] md:h-[60px] ${className ?? ""}`} ></div>
    )
}