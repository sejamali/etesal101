import React, { useState } from 'react';
import axios from 'axios';

function MetadataForm()
{
    const [metadata, setMetadata] = useState('');

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        try
        {
            await axios.post('http://localhost:3001/metadata/new', { metadata });
            alert('Metadata created successfully');
            setMetadata('');
        } catch (error)
        {
            console.error('Error creating metadata:', error);
            alert('Failed to create metadata');
        }
    };

    return (
        <div>
            <h2>Add Metadata</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Metadata"
                    value={metadata}
                    onChange={e => setMetadata(e.target.value)}
                />
                <button type="submit">Add Metadata</button>
            </form>
        </div>
    );
}

export default MetadataForm;
