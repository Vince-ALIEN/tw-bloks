import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import edit from './edit';
import save from './save';
import variations from './variations';
import './style.css';  // Frontend styles
import './editor.css'; // Editor styles

registerBlockType(metadata.name, {
    ...metadata,
    variations,
    edit,
    save,
});
