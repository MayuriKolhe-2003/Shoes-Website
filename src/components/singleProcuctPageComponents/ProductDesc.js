import React from 'react'
import Description from './Description'
import Specification from './Specification'
import Reviews from './Reviews'
import Comments from './Comments'
import { Link } from 'react-router-dom'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const ProductDesc = (props) => {
	const shoe = props.shoe;
	return (
		<>
			<section className="product_description_area">
				<div className="container">
					{/* NAV TABS SECTION*/}
					<Tabs defaultActiveKey="first">
						<Tab eventKey="first" title="Description">
							<Description />
						</Tab>
						<Tab eventKey="second" title="Specification">
							<Specification />
						</Tab>
						<Tab eventKey="third" title="Reviews">
							<Reviews />
						</Tab>
						<Tab eventKey="fourth" title="Comments">
							<Comments />
						</Tab>
					</Tabs>

				</div>
			</section>
		</>
	)
}

export default ProductDesc
