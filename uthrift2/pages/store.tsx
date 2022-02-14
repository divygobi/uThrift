import React from 'react'
import LandingNav from '../components/LandingNav';
import Layout from '../components/Layout';

function store() {
    return (
        <div>
            <LandingNav />
            <Layout>
                <div>
                    This is the Store
                </div>
            </Layout>
        </div>
    )
}

export default store;
