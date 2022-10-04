import {RichText, useBlockProps, InspectorControls} from '@wordpress/block-editor';
import {ColorPalette, PanelBody, PanelRow} from "@wordpress/components";
import getPaletteColors from '../../helper/getPaletteColors';

const MyBlockEditor = (props) => {

    const {
        attributes: attr,
        setAttributes: setAttr,
    } = props;

    const blockProps = useBlockProps();
    return (
        <div blockProps={blockProps}>
            <InspectorControls>
                <PanelBody title={"Colores"}>
                    <PanelRow>
                        <div className="">
                            <h3>Color</h3>
                            <ColorPalette
                                value={attr.bgColor}
                                onChange={(value) => setAttr({bgColor: value})}
                                colors={getPaletteColors}
                            />
                        </div>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <div className='px-5 py-4 text-white' style={{backgroundColor: `${attr?.bgColor}`}}>
                <RichText
                    tagName="button"
                    value={attr.text}
                    onChange={(value) => setAttr({text: value})}
                    placeholder={"Escribe nombre..."}
                />
            </div>
        </div>
    )
}

export default MyBlockEditor;