import React, { useState } from 'react';
import data from '../data/products.json';
import Card from './AllProductsComponents/Card';

export default function AllProduct() {
    const [Malecheck, isMale] = useState(false);
    const [Femalecheck, isFemale] = useState(false);
    const [cards,changeCards] = useState(data);
    const allprods = data;

    function malechange() {
        isMale(document.getElementById('male').checked);

        !Malecheck ?
        changeCards(cards.filter((obj) => {
            return (
                obj.type == 'male'
            )
        }))
        : changeCards(allprods)
    }


    function femalechange() {
        isFemale(document.getElementById('female').checked);

        !Femalecheck ?
        changeCards(cards.filter((obj) => {
            return (
                obj.type == 'female'
            )
        }))
        : changeCards(allprods)
    }

    return (
        <div class="mt-4">
            <div class="d-md-none">
                <button>Filter</button>
            </div>



            <div class="row">

                {/* -------------------- FILTER ---------------------------- */}

                <div class="d-none d-md-inline col-md-2">
                    <form class="container mt-3 ms-3">
                        <h2 class="mb-4">Filter</h2>

                        <div class="mb-5">

                            <p class="mb-2">Lifestyle</p>
                            <p class="mb-2">Running</p>
                            <p class="mb-2">Basketball</p>
                            <p class="mb-2">Football</p>
                            <p class="mb-2">Training & Gym</p>
                            <p class="mb-2">Golf</p>
                        </div>
                        <hr />
                        <div class="mb-3">
                            <h5 class="fs-5 fw-normal mb-3">Gender</h5>
                            <div class="mb-2">
                                <input class="me-1" type="checkbox" id="male" name="male" value="Male" onChange={malechange} />
                                <label for="male"> Male </label>
                            </div>
                            <div>
                                <input class="me-1" type="checkbox" id="female" name="female" value="Female" onChange={femalechange}/>
                                <label for="female"> Female </label>
                            </div>
                        </div>
                    </form>
                </div>

                {/* -------------------- Cards ---------------------------- */}

                <div class="col col-md-9">
                    <div class="row mx-2">
                        {
                            cards.map((obj) => {
                                return (
                                    <div class="container mt-4 col-6 col-md-3">
                                        <Card name={obj.name} price={obj.price} img={obj.img} categ="Men's Shoe" />
                                    </div>
                                )
                            })
                        }

                        {/* <div class="container mt-4 col-6 col-md-3">
                            <Card name={data[0].name} price={data[0].price} img={data[0].img} categ="Women's Shoe" />
                        </div>
                        <div class="container mt-4 col-6 col-md-3">
                            <Card name={data[2].name} price={data[2].price} img={data[2].img} categ="Men's Shoe" onSale={data[2].onSale} salePrice={data[2].salePrice} />
                        </div>
                        <div class="container mt-4 col-6 col-md-3">
                            <Card name={data[0].name} price={data[0].price} img={data[0].img} categ="Women's Shoe" onSale={data[2].onSale} salePrice={data[2].salePrice} />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}