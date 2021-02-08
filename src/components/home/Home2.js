import React, { Fragment } from 'react'
import Card2 from './Card2'

function Home2({ rasmlar }) {
    return (
        <div>
            {
                rasmlar.map((rasm, index) => {
                    console.log({rasmlar})
                    return (
                        <Fragment key={index}>

                            <Card2 img={rasm.urls.regular} likes={rasm.likes} username={rasm.user.first_name} />
                        </Fragment>
                    )
                })
            }
        </div>
    )
}

export default Home2
