import { Path, SVG } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const variations = [
    {
        name: 'one-columns',
        isDefault: true,
        title: __( 'Une Colonnes'),
        description: __( 'Une colonnes'),
        icon: (
			<SVG
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="48"
				viewBox="0 0 48 48"
			>
				<Path d="M0 10a2 2 0 0 1 2-2h44a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V10Z" />
			</SVG>
		),
        attributes: {
            columns: 1,
            isVariation: true,
        },
        isActive: ["isVariation"],
        innerBlocks: [
            ['create-block/tw-columns', { className: 'bg-gray-100 p-4' }, [['core/paragraph', { placeholder: 'Entrez du texte pour la première colonne...' }]]]
        ],
        scope: ['inserter']
    },
    {
        name: 'two-columns',
        title: __( 'Deux Colonnes'),
        description: __( 'Disposition en deux colonnes'),
        icon: (
			<SVG
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="48"
				viewBox="0 0 48 48"
			>
				<Path d="M0 10a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V10Zm25 0a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H27a2 2 0 0 1-2-2V10Z" />
			</SVG>
		),
        attributes: {
            columns: 2,
            isVariation: true,
        },
        isActive: ["isVariation"],
        innerBlocks: [
            ['create-block/tw-columns', { className: 'bg-gray-100 p-4' }, [['core/paragraph', { placeholder: 'Entrez du texte pour la première colonne...' }]]],
            ['create-block/tw-columns', { className: 'bg-gray-100 p-4' }, [['core/paragraph', { placeholder: 'Entrez du texte pour la deuxième colonne...' }]]]
        ],
        scope: ['inserter']
    },
    {
        name: 'three-columns',
        title: 'Trois Colonnes',
        description: 'Disposition en trois colonnes',
        icon: (
			<SVG
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="48"
				viewBox="0 0 48 48"
			>
				<Path d="M0 10a2 2 0 0 1 2-2h10.531c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H2a2 2 0 0 1-2-2V10Zm16.5 0c0-1.105.864-2 1.969-2H29.53c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H18.47c-1.105 0-1.969-.895-1.969-2V10Zm17 0c0-1.105.864-2 1.969-2H46a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H35.469c-1.105 0-1.969-.895-1.969-2V10Z" />
			</SVG>
		),
        attributes: {
            columns: 3
        },
        innerBlocks: [
            ['create-block/tw-columns', { className: 'bg-gray-100 p-4' }, [['core/paragraph', { placeholder: 'Entrez du texte pour la première colonne...' }]]],
            ['create-block/tw-columns', { className: 'bg-gray-100 p-4' }, [['core/paragraph', { placeholder: 'Entrez du texte pour la deuxième colonne...' }]]],
            ['create-block/tw-columns', { className: 'bg-gray-100 p-4' }, [['core/paragraph', { placeholder: 'Entrez du texte pour la troisième colonne...' }]]]
        ],
        scope: ['inserter']
    }
];

export default variations;
