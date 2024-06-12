import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = (props) => {
    const { attributes } = props;
    const { className } = attributes;

    const blockProps = useBlockProps.save({
        className: className,
    });

    return (
        <div {...blockProps}>
            <InnerBlocks.Content />
        </div>
    );
};

export default Save;
