import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
 
import metadata from './block.json';
import './style.scss';
 
function BlockEdit(props) {
    const blockProps = useBlockProps( { className: 'container flex flex-wrap bg-slate-400 py-4' } );
    const innerBlocksProps = useInnerBlocksProps(
        blockProps,
        { allowedBlocks: [ 'core/heading', 'core/paragraph', 'core/image', 'create-block/columns' ] }
    );
 
    return (
        <div {...innerBlocksProps} />
    );
}
 


function BlockSave(props) {
    const blockProps = useBlockProps.save( { className: 'flex flex-wrap bg-slate-400 py-4' } );
    const innerBlocksProps = useInnerBlocksProps.save( blockProps );
 
    return <div {...innerBlocksProps} />
}
 
registerBlockType( metadata, {
    edit: BlockEdit,
    save: BlockSave,
} )