interface ICardInfo {
    mainContent: string,
    content: string
}

const CardInfo = ({mainContent, content}: ICardInfo) =>{
    return (
        <section className="bg-white min-h-[120px] p-2 rounded-lg">
            <h1 className="font-bold text-xl">{mainContent}</h1>
            <p>{content}</p>
        </section>
    )
}

export default CardInfo