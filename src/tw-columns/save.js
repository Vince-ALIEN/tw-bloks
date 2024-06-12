import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = (props) => {
    const blockProps = useBlockProps.save({
        className: props.attributes.className,
    });
    return (
        <div {...blockProps}>
            <InnerBlocks.Content />
        </div>
    );
};

export default Save;
