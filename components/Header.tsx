





export default function Header(props) {
    return (
        <header className="flex items-center justify-between p-4 bg-[#15b981] text-black-50">
            <h1 className="text-4xl">{props.title}</h1>
        </header>
    )
}