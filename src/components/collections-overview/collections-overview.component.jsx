import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import "./collections-overview.styles.scss";

export default function CollectionOverview() {
        
    const collections = useSelector(selectCollectionsForPreview);
    return (
        <div className="collections-overview">
               {
                        collections.map( ({id, ...otherCollectionProps}) => (
                            <CollectionPreview key={id} {...otherCollectionProps} />
                        ))
                }
        </div>
    )
}
