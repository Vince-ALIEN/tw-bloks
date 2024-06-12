import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Edit = (props) => {
    const blockProps = useBlockProps({
        className: props.attributes.className,
    });

    return (
        <div {...blockProps}>
            <InnerBlocks allowedBlocks={[ 'core/heading', 'core/paragraph', 'core/image']} />
        </div>
    );
};

export default Edit;
