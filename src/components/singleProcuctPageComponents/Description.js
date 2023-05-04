import React from 'react'


const Description = (props) => {
	const shoe = props.shoe;
  return (
   <>
   <div>
	<p>{shoe.description}</p>
<h4>Benefits</h4>
<ul list-style='circle'>
	{shoe.benefits.map((e)=>{
		return(
			<li>{e}</li>
		)
	})}
</ul>

<h4>Product Details</h4>
<ul  list-style='circle'>
{shoe.details.map((e)=>{
		return(
			<li>{e}</li>
		)
	})}
</ul>

	</div>
   </>
  )
}

export default Description
