const Meta = (props) => {
    return (
        <>
            <meta name="title" content={props.title} />
            <meta name="description" content={props.description} />
            <meta property="og:image" content={props.imageURL} />

            <meta property="twitter:title" content={props.title} />
            <meta property="twitter:description" content={props.description} />
            <meta property="twitter:image" content={props.imageURL}></meta>

            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:image" content={props.imageURL} />

        </>
    )
}

export default Meta;