import React from 'react';
import UltimoProducto from './UltimoProducto';
import Categories from './Categories';

function ContentRowCenter() {
    return (
        <div className="row">

            {/*<!-- Last Movie in DB -->*/}
            <UltimoProducto />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <Categories />

        </div>
    )
}

export default ContentRowCenter;