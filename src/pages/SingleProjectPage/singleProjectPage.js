import React, {useEffect, useState} from 'react'

import { connect } from "react-redux";

import {URL} from '../../utils/url.helper'

import JoinTeam from '../../components/JoinTeam/joinTeam';
import Participants from '../../components/Participants/participants';

const SingleProjectPage = (props) => {

    const [project, setProject] = useState([])

    useEffect(() => {
        fetch(`${URL}/projects/${props.match.params.id}`, {
            headers: {
                Authorization: 'Bearer ' + props.user.token
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProject(data.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <img src={project.image} />
            <div>Название: {project.title}</div>
            <div>Описание: {project.description}</div>
            <div>Cумма для сбора: {project.total_sum}</div>

            <form action="https://www.coinpayments.net/index.php" method="post" target="_top" id='payment'>
	            <input type="hidden" name="cmd" value="_pay_simple" />
	            <input type="hidden" name="reset" value="1" />
	            <input type="hidden" name="merchant" value="ec9c98b27ac5728fba41bf5b0f63cb11" />
	            <input type="hidden" name="currency" value="LTC" />
	            <input type="hidden" name="amountf" value="1.00" />
	            <input type="hidden" name="item_name" value="Test Item" />
	            <input type="image" src="https://www.coinpayments.net/images/pub/buynow-grey.png" alt="Купить используя CoinPayments.net" />
            </form>

            <JoinTeam {...props} />
            <Participants {...props} />
        </div>
    )
}

const mapStateToProps = (state) => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(SingleProjectPage);