import {  useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';



const Edit = (props) => {
    const { attributes, setAttributes } = props;
    const { className, columns } = attributes;

    const getColumnClass = (columns) => {
        return `grid sm:grid-cols-1 md:grid-cols-${columns} lg:grid-cols-${columns} gap-2 my-2`;
    };

    useEffect(() => {
        const columnClass = getColumnClass(columns);
        if (className !== columnClass) {
            setAttributes({ className: columnClass });
        }
    }, [columns]);

    const blockProps = useBlockProps({
        className: className,
    });

    const innerBlocksProps = useInnerBlocksProps(blockProps, {
        allowedBlocks: ['create-block/tw-columns']
    });

    return (
        <div {...innerBlocksProps} />
    );
};

export default Edit;