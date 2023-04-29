import React from 'react'
import products from '../../data/products.json'
import { AiOutlineStar } from 'react-icons/ai'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductCard from './ProductCard';

const NewArrival = () => {

	const options = {
		margin: 30,
		loop:true,
		autoplay: true,
		nav:true,
		dots:false,
			responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 1,
			},
			600: {
				items: 2,
			},
			700: {
				items: 3,
			},
			1000: {
				items: 5,
			}
		},
	};
	//const shoes = products.shoes;
	return (
		<>
			<section className='section bg-light'>
				<div className="container">
					<div className="row justify-content-center mb-3 pb-3">
						<div className="col-md-12 heading-section text-center ftco-animate">
							<h2 className="mb-4">New Shoes Arrival</h2>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<OwlCarousel className="owl-carousel owl-theme" {...options}>
							{products.map(obj => {
								return(
									<ProductCard key={obj.id} product={obj} />
								)
							})}
						</OwlCarousel>

					</div>
				</div>
			</section>

		</>
	)
}

export default NewArrival
