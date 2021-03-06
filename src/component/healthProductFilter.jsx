

export const Filter = () => {

    return (
        <>
            <div id="global">
                <div id="filter">
                    <h2>Filter</h2>
                    <div id="filflex">
                        <div>
                            <h3>Category</h3>
                            <label for="cate" class="radlbl">Devices</label>
                            <input
                                type="radio"
                                id="cate"
                                name="cate"
                                value="cate"
                                class="rad"
                            />
                        </div>
                        <hr />
                        <div>
                            <h3>Sub Category</h3>
                            <label for="gluco" class="radlbl">Glucometer</label>
                            <input
                                type="radio"
                                id="gluco"
                                name="gluco"
                                value="gluco"
                                class="rad"
                            /><br />
                            <label for="well" class="radlbl">Sexual Wellness</label
                            ><input
                                type="radio"
                                id="well"
                                name="well"
                                value="well"
                                class="rad"
                            /><br />
                            <label for="bp" class="radlbl">BP Moniters</label
                            ><input
                                type="radio"
                                id="bp"
                                name="bp"
                                value="bp"
                                class="rad"
                            /><br />
                            <label for="hc" class="radlbl">Healthcare Devices</label>
                            <input
                                type="radio"
                                id="hc"
                                name="hc"
                                value="hc"
                                class="rad"
                            /><br />
                            <label for="off" class="radlbl">Offers- Devices</label
                            ><input
                                type="radio"
                                id="off"
                                name="off"
                                value="off"
                                class="rad"
                            /><br />
                            <label for="thermo" class="radlbl">Thermometers</label
                            ><input
                                type="radio"
                                id="thermo"
                                name="thermo"
                                value="thermo"
                                class="rad"
                            /><br />
                            <label for="oxy" class="radlbl">Oxymeters</label
                            ><input
                                type="radio"
                                id="oxy"
                                name="oxy"
                                value="oxy"
                                class="rad"
                            /><br />
                            <label for="nubu" class="radlbl">Nebulizers</label
                            ><input
                                type="radio"
                                id="nebu"
                                name="nebu"
                                value="nebu"
                                class="rad"
                            /><br />
                        </div>
                        <hr />
                        <div>
                            <h3>Brand</h3>
                            <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="Search"
                            /><br />
                            <label for="accu" class="radlbl">ACCU</label>
                            <input
                                type="checkbox"
                                id="accu"
                                name="accu"
                                value="accu"
                                class="rad"
                            /><br />
                            <label for="accusure" class="radlbl">ACCUSURE</label>
                            <input
                                type="checkbox"
                                id="accusure"
                                name="accusure"
                                value="accusure"
                                class="rad"
                            /><br />
                            <label for="apollo" class="radlbl">APOLLO</label>
                            <input
                                type="checkbox"
                                id="apollo"
                                name="apollo"
                                value="apollo"
                                class="rad"
                            /><br />
                            <label for="beato" class="radlbl">BEATO</label>
                            <input
                                type="checkbox"
                                id="beato"
                                name="beato"
                                value="beato"
                                class="rad"
                            /><br />
                            <label for="contour" class="radlbl">CONTOUR</label>
                            <input
                                type="checkbox"
                                id="contour"
                                name="contour"
                                value="contour"
                                class="rad"
                            /><br />
                            <label for="veri" class="radlbl">VERI-Q</label>
                            <input
                                type="checkbox"
                                id="veri"
                                name="veri"
                                value="veri"
                                class="rad"
                            /><br />
                            <label for="trust" class="radlbl">Dr TRUST</label>
                            <input
                                type="checkbox"
                                id="trust"
                                name="trust"
                                value="trust"
                                class="rad"
                            /><br />
                        </div>
                        <hr />
                        <div>
                            <h3>Price</h3>
                            <label for="low" class="radlbl">less then ???500</label>
                            <input
                                type="checkbox"
                                id="low"
                                name="low"
                                value="low"
                                class="rad"
                                onclick="chelow()"
                            /><br />
                            <label for="basic" class="radlbl">???500 - ???1000</label>
                            <input
                                type="checkbox"
                                id="basic"
                                name="basic"
                                value="basic"
                                class="rad"
                                onclick="chebas()"
                            /><br />
                            <label for="medium" class="radlbl">???1000 - ???2000</label>
                            <input
                                type="checkbox"
                                id="medium"
                                name="medium"
                                value="medium"
                                class="rad"
                                onclick="chemed()"
                            /><br />
                            <label for="high" class="radlbl">???2000 and above</label>
                            <input
                                type="checkbox"
                                id="high"
                                name="high"
                                value="high"
                                class="rad"
                                onclick="chehig()"
                            />
                        </div>
                    </div>
                </div>
                <div id="device">
                    <div id="rt">
                        <h2>Covid Essentials</h2>
                        <p>Sort By:</p>
                        <select name="sort" id="sort">
                            <option value="popu" class="opt">Popularity</option>
                            <option value="low" class="opt" onclick="lowa()">
                                Price Low to High
                            </option>
                            <option value="high" class="opt" onclick="higher()">
                                Price High to Low
                            </option>
                        </select>
                    </div>
                    <div id="jav"></div>
                </div>
            </div>
        </>
    );
}

Filter();