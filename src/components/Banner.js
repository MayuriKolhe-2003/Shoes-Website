import React from 'react'

const Banner = (props) => {
  return (
   <>

	<section className="banner-area organic-breadcrumb"style={{background: `url('assets/choose-3.jpg') `,backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
		<div className="container">
			<div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-center">
				<div className="col-first">
					<h1>{props.name}</h1>
					
				</div>
			</div>
		</div>
	</section>

   </>
  )
}

export default Banner