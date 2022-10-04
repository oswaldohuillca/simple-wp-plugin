const MyBlockFront = (props) => {

    const {
        attributes: attr,
        setAttributes: setAttr,
    } = props;

    return (
        <>
            <div className='px-5 py-4 text-white' dangerouslySetInnerHTML={{__html: attr.text}} style={{backgroundColor: attr.bgColor}} />
        </>
    )    
}

export default MyBlockFront;