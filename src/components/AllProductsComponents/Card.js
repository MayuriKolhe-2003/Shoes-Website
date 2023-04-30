import React from 'react';
import './AllProdstyles.css';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsBagHeart } from 'react-icons/bs'
export default function Card(props) {


    return (

        <div class="card shadow-sm border border-0">
            <div class="main-shoe container card-body">
                <div class="bg-light">
                    <img src={props.img} class="shoe-all-imag img-fluid" ></img>
                    <div class="d-flex justify-content-between">
                        <i class="fs-4"><AiOutlineShoppingCart /></i>
                        <i class="fs-4"><BsBagHeart /></i>
                    </div>

                </div>

                <p class="text-success mb-0">In Stock</p>
                <h5 class="card-title mb-2">{props.name}</h5>
                <h6 class="card-subtitle text-body-secondary text-muted fw-light">{props.categ}</h6>
                {
                    props.onSale
                        ? <p class="card-text fw-medium mt-2">MRP : <span class="text-muted text-decoration-line-through">{props.price}</span> {props.salePrice}</p>
                        : <p class="card-text fw-medium mt-2">MRP : {props.price}</p>
                }
            </div>
        </div>
    );
}