import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MetadataList()
{
    const [metadataList, setMetadataList] = useState([]);

    useEffect(() =>
    {
        // Fetch metadata data from the backend when the component mounts
        axios.get('http://localhost:3001/metadata/all')
            .then(response =>
            {
                // Set the retrieved metadata list to state
                setMetadataList(response.data);
            })
            .catch(error =>
            {
                console.error('Error fetching metadata:', error);
            });
    }, []); // Empty dependency array to run the effect only once when the component mounts

    return (
        <div>
            <h2>Metadata List</h2>
            <ul>
                {/* Map through the metadataList array and render each metadata item */}
                {metadataList.map(metadata => (
                    <li key={metadata.id}>{metadata.metadata}</li>
                ))}
            </ul>
        </div>
    );
}

export default MetadataList;
